import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import { razorpayService } from '../utils/razorpayService';
import { formatAmount, logPaymentEvent, PAYMENT_ERROR_MESSAGES } from '../utils/razorpayConfig';

interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
}

interface PaymentProps {
  isOpen: boolean;
  onClose?: () => void;
  onSuccess?: (orderDetails: any) => void;
  onFailure?: (error: any) => void;
  product?: {
    id: number;
    name: string;
    salePrice: number;
    image: string;
  };
  quantity?: number;
  items?: any[];
  totalAmount?: number;
}

const Payment: React.FC<PaymentProps> = ({ 
  isOpen, 
  onClose, 
  onSuccess, 
  onFailure, 
  product, 
  quantity = 1,
  items = [],
  totalAmount = 0
}) => {
  const { state, clearCart } = useCart();
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: '',
    email: '',
    phone: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderDetails, setOrderDetails] = useState<any>(null);

  // Determine items to process - either cart items or single product
  const itemsToProcess = product 
    ? [{ id: product.id, name: product.name, price: product.salePrice, quantity: quantity, image: product.image }]
    : items.length > 0 
      ? items.map(item => ({ id: item.id, name: item.name, price: item.salePrice, quantity: item.quantity, image: item.image }))
      : state.items.map(item => ({ id: item.id, name: item.name, price: item.salePrice, quantity: item.quantity, image: item.image }));

  // Calculate total
  const subtotal = totalAmount > 0 ? totalAmount : itemsToProcess.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0);
  const convenienceFee = subtotal * 0.025;
  const finalTotal = subtotal + convenienceFee;

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setShowSuccess(false);
      setOrderDetails(null);
      setError(null);
      setIsProcessing(false);
    }
  }, [isOpen]);

  // Load saved customer details on component mount
  useEffect(() => {
    const savedDetails = localStorage.getItem('srsewingworld-customer');
    if (savedDetails) {
      try {
        const parsed = JSON.parse(savedDetails);
        setCustomerDetails(prev => ({
          ...prev,
          ...parsed,
        }));
      } catch (error) {
        console.error('Error parsing saved customer details:', error);
      }
    }
  }, []);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerDetails(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate customer details
  const validateCustomerDetails = (): boolean => {
    if (!customerDetails.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!customerDetails.email.trim()) {
      setError('Please enter your email');
      return false;
    }
    if (!customerDetails.phone.trim()) {
      setError('Please enter your phone number');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerDetails.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!/^[6-9]\d{9}$/.test(customerDetails.phone)) {
      setError('Please enter a valid 10-digit phone number');
      return false;
    }
    return true;
  };

  // Handle payment initiation
  const handlePayment = async () => {
    if (!validateCustomerDetails()) {
      return;
    }

    if (itemsToProcess.length === 0) {
      setError('Your cart is empty');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      logPaymentEvent('Payment initiated', { total: finalTotal, itemsCount: itemsToProcess.length });

      // Use the method that doesn't require server-side order creation
      await razorpayService.initializePaymentWithoutOrder(
        finalTotal,
        itemsToProcess,
        customerDetails,
        // Success callback
        (response, orderDetails) => {
          logPaymentEvent('Payment completed successfully', { response, orderDetails });
          setOrderDetails(orderDetails);
          setShowSuccess(true);
          setIsProcessing(false);
          
          // Clear cart on successful payment (only if using cart items)
          if (!product) {
            clearCart();
          }
          
          // Call success callback if provided
          if (onSuccess) {
            onSuccess(orderDetails);
          }
        },
        // Failure callback
        (error) => {
          logPaymentEvent('Payment failed', { error });
          setError(error.message || PAYMENT_ERROR_MESSAGES.PAYMENT_FAILED);
          setIsProcessing(false);
          
          // Call failure callback if provided
          if (onFailure) {
            onFailure(error);
          }
        },
        // Cancel callback
        () => {
          logPaymentEvent('Payment cancelled by user');
          setIsProcessing(false);
          // Don't show error for user cancellation
        }
      );
    } catch (error: any) {
      logPaymentEvent('Payment initialization error', { error });
      setError(error.message || PAYMENT_ERROR_MESSAGES.GENERIC_ERROR);
      setIsProcessing(false);
      
      if (onFailure) {
        onFailure(error);
      }
    }
  };

  // Handle close
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  // Don't render anything if not open
  if (!isOpen) {
    return null;
  }

  // Success view
  if (showSuccess && orderDetails) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-4">Thank you for your purchase</p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-4 text-left">
              <h3 className="font-semibold text-gray-900 mb-2">Order Details</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p><span className="font-medium">Order ID:</span> {orderDetails.id}</p>
                <p><span className="font-medium">Amount:</span> {formatAmount(orderDetails.amount)}</p>
                <p><span className="font-medium">Items:</span> {orderDetails.items.length}</p>
                <p><span className="font-medium">Date:</span> {new Date(orderDetails.timestamp).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-blue-900 mb-2">What's Next?</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• You'll receive an email confirmation shortly</li>
                <li>• Our team will contact you within 24 hours</li>
                <li>• Delivery will be arranged at your convenience</li>
              </ul>
            </div>

            <button
              onClick={handleClose}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Checkout</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Summary */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Order Summary</h3>
          <div className="space-y-2">
            {itemsToProcess.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-gray-600">
                  {item.name} × {item.quantity}
                </span>
                <span className="font-medium">{formatAmount(item.price * item.quantity)}</span>
              </div>
            ))}
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>{formatAmount(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Convenience Fee (2.5%)</span>
                <span>{formatAmount(convenienceFee)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-1">
                <span>Total</span>
                <span>{formatAmount(finalTotal)}</span>
              </div>
            </div>
            </div>
          </div>

        {/* Customer Details Form */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Customer Details</h3>
          <div className="space-y-4">
              <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
                </label>
                <input
                  type="text"
                id="name"
                name="name"
                value={customerDetails.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
                </label>
                <input
                type="email"
                id="email"
                name="email"
                value={customerDetails.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
                  </label>
                  <input
                type="tel"
                id="phone"
                name="phone"
                value={customerDetails.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your 10-digit phone number"
                maxLength={10}
                    required
                  />
                </div>
              </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {/* Payment Button */}
              <button
          onClick={handlePayment}
          disabled={isProcessing || itemsToProcess.length === 0}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
            isProcessing || itemsToProcess.length === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isProcessing ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing Payment...
            </div>
          ) : (
            `Pay ${formatAmount(finalTotal)}`
          )}
        </button>

        {/* Security Notice */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            🔒 Your payment is secured by Razorpay
          </p>
        </div>

        {/* Payment Methods Info */}
        <div className="mt-4 bg-blue-50 rounded-lg p-3">
          <h4 className="font-medium text-blue-900 text-sm mb-2">Accepted Payment Methods:</h4>
          <div className="flex flex-wrap gap-2 text-xs text-blue-800">
            <span>• Credit/Debit Cards</span>
            <span>• UPI</span>
            <span>• Net Banking</span>
            <span>• Wallets</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment; 