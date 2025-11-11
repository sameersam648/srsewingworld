import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Payment from './Payment';

const Cart: React.FC = () => {
  const { state, removeItem, updateQuantity, clearCart, closeCart, getTotalItems, getTotalPrice } = useCart();
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  // Debug logging
  console.log('Cart state:', state);
  console.log('Cart items:', state.items);
  console.log('Cart isOpen:', state.isOpen);

  // Close cart on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCart();
      }
    };

    if (state.isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [state.isOpen, closeCart]);

  // Close cart on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeCart();
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleCheckout = () => {
    if (state.items.length === 0) {
      alert('Your cart is empty. Please add some items before checkout.');
      return;
    }
    
    setIsPaymentOpen(true);
    closeCart(); // Close cart when opening payment
  };

  const handleClosePayment = () => {
    setIsPaymentOpen(false);
  };

  const handlePaymentSuccess = (orderDetails: any) => {
    console.log('Payment successful:', orderDetails);
    // Cart will be cleared automatically by the Payment component
    setIsPaymentOpen(false);
  };

  const handlePaymentFailure = (error: any) => {
    console.error('Payment failed:', error);
    setIsPaymentOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {state.isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={handleBackdropClick}
            />
            
            {/* Cart Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-full sm:w-96 lg:max-w-md bg-white shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                  <h2 className="text-lg sm:text-xl font-bold">Shopping Cart</h2>
                  {getTotalItems() > 0 && (
                    <span className="bg-white text-[#ff416c] px-2 py-1 rounded-full text-xs sm:text-sm font-bold">
                      {getTotalItems()}
                    </span>
                  )}
                </div>
                <button
                  onClick={closeCart}
                  className="p-1 sm:p-2 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Close cart"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                {state.items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingCart className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mb-3 sm:mb-4" />
                    <h3 className="text-base sm:text-lg font-semibold text-gray-600 mb-2">Your cart is empty</h3>
                    <p className="text-sm sm:text-base text-gray-500">Add some products to get started!</p>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    {state.items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200"
                      >
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg border border-gray-200"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 truncate text-sm sm:text-base">{item.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">
                              {formatPrice(item.salePrice)} each
                            </p>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center justify-between mt-2 sm:mt-3">
                              <div className="flex items-center space-x-1 sm:space-x-2">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                                </button>
                                <span className="w-6 sm:w-8 text-center font-semibold text-sm sm:text-base">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                                </button>
                              </div>
                              
                              <div className="flex items-center space-x-1 sm:space-x-2">
                                <span className="font-bold text-green-600 text-sm sm:text-base">
                                  {formatPrice(item.salePrice * item.quantity)}
                                </span>
                                <button
                                  onClick={() => removeItem(item.id)}
                                  className="p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-600 transition-colors"
                                  aria-label="Remove item"
                                >
                                  <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {state.items.length > 0 && (
                <div className="border-t border-gray-200 p-4 sm:p-6 bg-gray-50">
                  {/* Price Breakdown */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-semibold">{formatPrice(getTotalPrice())}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-base sm:text-lg font-semibold">Total:</span>
                        <span className="text-xl sm:text-2xl font-bold text-green-600">
                          {formatPrice(getTotalPrice())}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <motion.button
                      onClick={handleCheckout}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white py-3 sm:py-4 rounded-lg font-semibold hover:from-[#ff4b2b] hover:to-[#ff416c] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm sm:text-base"
                    >
                      <span>Proceed to Checkout</span>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.button>
                    
                    <button
                      onClick={clearCart}
                      className="w-full bg-gray-200 text-gray-700 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors text-sm sm:text-base"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Payment Modal */}
      <Payment
        isOpen={isPaymentOpen}
        onClose={handleClosePayment}
        onSuccess={handlePaymentSuccess}
        onFailure={handlePaymentFailure}
        items={state.items}
        totalAmount={getTotalPrice()}
      />
    </>
  );
};

export default Cart; 