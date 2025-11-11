import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartIcon: React.FC = () => {
  const { toggleCart, getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <motion.button
      className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
      onClick={toggleCart}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      aria-label="Open shopping cart"
      style={{ boxShadow: '0 8px 32px rgba(34,197,94,0.25)' }}
    >
      <ShoppingCart className="h-7 w-7" />
      
      {/* Cart Badge */}
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white"
          >
            {totalItems > 99 ? '99+' : totalItems}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CartIcon; 