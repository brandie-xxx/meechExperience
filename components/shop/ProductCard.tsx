import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  hideBestSellerBadge?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, hideBestSellerBadge }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, product.sizes[0]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/shop/${product.slug}`} className="block space-y-4">
        <div className="aspect-[4/5] rounded-[40px] overflow-hidden relative bg-secondary-bg">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          
          {/* Quick Action Overlays */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-secondary text-white px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase">
                New
              </span>
            )}
            {product.isBestSeller && !hideBestSellerBadge && (
              <span className="bg-primary text-white px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase">
                Bestseller
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="absolute bottom-6 left-6 right-6 py-5 bg-white/90 backdrop-blur-xl text-primary rounded-full flex items-center justify-center shadow-apple-card opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-white hover:scale-[1.05] active:scale-95 space-x-2 border border-black/5"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-[11px] font-bold tracking-tight">Add to bag</span>
          </button>
        </div>

        <div className="space-y-0.5">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-[14px] font-bold text-primary leading-tight tracking-tight group-hover:text-secondary transition-colors line-clamp-1">
              {product.name}
            </h3>
            <span className="text-[14px] font-black text-primary">
              ${product.price}
            </span>
          </div>
          <p className="text-[11px] text-text-secondary font-bold tracking-tight opacity-60">
            {product.category}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
