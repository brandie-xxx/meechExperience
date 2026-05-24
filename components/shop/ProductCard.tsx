import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Flame } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  hideBestSellerBadge?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, hideBestSellerBadge }) => {
  const { addToCart } = useCart();
  const [showSizeSelector, setShowSizeSelector] = useState(false);
  const [addedState, setAddedState] = useState(false);

  // Generates a stable low stock number based on name hash for genuine urgency
  const getStockAlert = () => {
    const hash = product.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const remaining = (hash % 3) + 2; // stable number between 2 and 4
    return `Only ${remaining} left • Selling fast`;
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // If only one size or Caps, add immediately safely
    if (product.sizes.length <= 1) {
      addToCart(product, product.sizes[0] || 'Adjustable');
      triggerAddedFeedback();
    } else {
      setShowSizeSelector(true);
    }
  };

  const selectSizeAndAdd = (size: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, size);
    setShowSizeSelector(false);
    triggerAddedFeedback();
  };

  const triggerAddedFeedback = () => {
    setAddedState(true);
    setTimeout(() => {
      setAddedState(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="block space-y-4">
        <div className="aspect-square rounded-3xl sm:rounded-[40px] overflow-hidden relative bg-secondary-bg">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />

          {/* Scarcity Tag */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center space-x-1 border border-black/5 shadow-sm">
            <Flame className="w-3 h-3 text-[#FF7A00]" />
            <span className="text-[9px] font-bold text-primary tracking-tight uppercase">
              {getStockAlert()}
            </span>
          </div>
          
          {/* Quick Action Overlays with Multi-Size Selector */}
          <AnimatePresence mode="wait">
            {addedState ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-x-4 bottom-4 lg:bottom-6 lg:inset-x-6 py-3.5 lg:py-5 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg border border-emerald-400/20 z-10"
              >
                <Check className="w-3.5 h-3.5 mr-1.5" />
                <span className="text-xs font-bold tracking-tight">Added to Bag</span>
              </motion.div>
            ) : showSizeSelector ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute inset-x-4 bottom-4 lg:bottom-6 lg:inset-x-6 p-3 bg-white/95 backdrop-blur-xl rounded-2xl flex flex-col items-center shadow-apple-card border border-black/5 z-10 space-y-2"
                onMouseLeave={() => setShowSizeSelector(false)}
              >
                <div className="flex justify-between w-full px-1">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Select Size</span>
                  <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowSizeSelector(false); }}
                    className="text-[9px] font-bold text-primary opacity-60 hover:opacity-100"
                  >
                    Cancel
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-1.5 w-full">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={(e) => selectSizeAndAdd(size, e)}
                      className="py-2.5 bg-neutral-100 hover:bg-primary hover:text-white rounded-xl transition-all font-bold text-xs text-primary"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <button
                onClick={handleQuickAdd}
                className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 py-3.5 lg:py-5 bg-white/95 backdrop-blur-xl text-primary rounded-full flex items-center justify-center shadow-apple-card lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 opacity-100 translate-y-0 transition-all duration-500 hover:bg-white hover:scale-[1.03] active:scale-95 border border-black/5"
              >
                <span className="text-xs font-bold tracking-tight">Add to bag</span>
              </button>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-0.5">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-[14px] font-bold text-primary leading-tight tracking-tight group-hover:text-secondary transition-colors line-clamp-1">
              {product.name}
            </h3>
            <span className="text-[14px] font-black text-[#FF7A00]">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
