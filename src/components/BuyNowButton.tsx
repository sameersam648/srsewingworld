import React, { useState } from 'react';
import { razorpayService } from '../utils/razorpayService';
import { formatAmount, logPaymentEvent, PAYMENT_ERROR_MESSAGES } from '../utils/razorpayConfig';

interface Product {
  id: number;
  name: string;
  salePrice: number;
  image: string;
}

interface BuyNowButtonProps {
  product: Product;
  quantity?: number;
  className?: string;
  onSuccess?: (orderDetails: any) => void;
  onFailure?: (error: any) => void;
}

const BuyNowButton: React.FC<BuyNowButtonProps> = ({
  product,
  quantity = 1,
  className = '',
  onSuccess,
  onFailure,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const handleBuyNow = async () => {
    setIsProcessing(true);
    setShowPayment(true);

    try {
      logPaymentEvent('Buy Now initiated', { product, quantity });

      // Create cart item format for the service
      const cartItem = {
        id: product.id,
        name: product.name,
        price: product.salePrice,
        quantity: quantity,
        image: product.image,
      };

      await razorpayService.initializePaymentWithoutOrder(
        product.salePrice * quantity,
        [cartItem],
        undefined, // Use saved customer details or prompt for new ones
        // Success callback
        (response, orderDetails) => {
          logPaymentEvent('Buy Now payment successful', { response, orderDetails });
          setIsProcessing(false);
          setShowPayment(false);
          
          if (onSuccess) {
            onSuccess(orderDetails);
          }
        },
        // Failure callback
        (error) => {
          logPaymentEvent('Buy Now payment failed', { error });
          setIsProcessing(false);
          setShowPayment(false);
          
          if (onFailure) {
            onFailure(error);
          }
        },
        // Cancel callback
        () => {
          logPaymentEvent('Buy Now payment cancelled');
          setIsProcessing(false);
          setShowPayment(false);
        }
      );
    } catch (error: any) {
      logPaymentEvent('Buy Now initialization error', { error });
      setIsProcessing(false);
      setShowPayment(false);
      
      if (onFailure) {
        onFailure(error);
      }
    }
  };

  const handleClosePayment = () => {
    setShowPayment(false);
    setIsProcessing(false);
  };

  const handlePaymentSuccess = (orderDetails: any) => {
    console.log('Buy Now payment successful:', orderDetails);
    setShowPayment(false);
    if (onSuccess) {
      onSuccess(orderDetails);
    }
  };

  const handlePaymentFailure = (error: any) => {
    console.error('Buy Now payment failed:', error);
    setShowPayment(false);
    if (onFailure) {
      onFailure(error);
    }
  };

  return (
    <>
      <button
        onClick={handleBuyNow}
        disabled={isProcessing}
        className={`bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#ff4b2b] hover:to-[#ff416c] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      >
        {isProcessing ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </>
        ) : (
          <>
            <span>Buy Now</span>
            <span className="text-sm">({formatAmount(product.salePrice * quantity)})</span>
          </>
        )}
      </button>

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Purchase</h2>
              <div className="bg-gray-50 rounded-lg p-4 mb-4 text-left">
                <div className="flex items-center space-x-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600">
                      Quantity: {quantity} × {formatAmount(product.salePrice)}
                    </p>
                    <p className="font-bold text-green-600">
                      Total: {formatAmount(product.salePrice * quantity)}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={handleBuyNow}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white py-3 rounded-lg font-semibold hover:from-[#ff4b2b] hover:to-[#ff416c] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Processing...' : 'Continue to Payment'}
                </button>
                
                <button
                  onClick={handleClosePayment}
                  className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BuyNowButton; 