import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  salePrice: number;
  image: string;
}

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  className?: string;
  variant?: 'default' | 'compact' | 'full';
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ 
  product, 
  quantity = 1,
  className = '', 
  variant = 'default' 
}) => {
  const { addItem, getItemQuantity } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  
  const currentQuantity = getItemQuantity(product.id);

  const handleAddToCart = () => {
    console.log('handleAddToCart called with product:', product);
    console.log('Quantity to add:', quantity);
    addItem(product, quantity);
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1500);
  };

  if (variant === 'compact') {
    return (
      <motion.button
        onClick={handleAddToCart}
        className={`bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white px-4 py-2 rounded-lg font-semibold hover:from-[#ff4b2b] hover:to-[#ff416c] transition-all duration-300 flex items-center space-x-2 ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isAdding}
      >
        {isAdding ? (
          <>
            <Check className="h-4 w-4" />
            <span>Added!</span>
          </>
        ) : (
          <>
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
            {currentQuantity > 0 && (
              <span className="bg-white text-[#ff416c] px-2 py-0.5 rounded-full text-xs font-bold">
                {currentQuantity}
              </span>
            )}
          </>
        )}
      </motion.button>
    );
  }

  if (variant === 'full') {
    return (
      <motion.button
        onClick={handleAddToCart}
        className={`w-full bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white py-3 rounded-lg font-semibold hover:from-[#ff4b2b] hover:to-[#ff416c] transition-all duration-300 flex items-center justify-center space-x-2 ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isAdding}
      >
        {isAdding ? (
          <>
            <Check className="h-5 w-5" />
            <span>Added to Cart!</span>
          </>
        ) : (
          <>
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
            {currentQuantity > 0 && (
              <span className="bg-white text-[#ff416c] px-2 py-0.5 rounded-full text-xs font-bold">
                {currentQuantity} in cart
              </span>
            )}
          </>
        )}
      </motion.button>
    );
  }

  // Default variant
  return (
    <motion.button
      onClick={handleAddToCart}
      className={`bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white px-6 py-2 rounded-lg font-semibold hover:from-[#ff4b2b] hover:to-[#ff416c] transition-all duration-300 flex items-center space-x-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={isAdding}
    >
      {isAdding ? (
        <>
          <Check className="h-4 w-4" />
          <span>Added!</span>
        </>
      ) : (
        <>
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
          {currentQuantity > 0 && (
            <span className="bg-white text-[#ff416c] px-2 py-0.5 rounded-full text-xs font-bold">
              {currentQuantity}
            </span>
          )}
        </>
      )}
    </motion.button>
  );
};

export default AddToCartButton; 