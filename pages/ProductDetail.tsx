import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants';
import { Product } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, MessageCircle, ShoppingBag, Plus, Minus, Info, Ruler, Globe2, ArrowLeft } from 'lucide-react';
import { cn } from '../lib/utils';
import ProductCard from '../components/shop/ProductCard';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const foundProduct = PRODUCTS.find(p => p.slug === slug);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.sizes[0]);
      window.scrollTo(0, 0);
    } else {
      navigate('/shop');
    }
  }, [slug, navigate]);

  if (!product) return null;

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    if (product && selectedSize) {
      for(let i = 0; i < quantity; i++) {
        addToCart(product, selectedSize);
      }
    }
  };

  const handleWhatsAppBuy = () => {
    const message = encodeURIComponent(
      `Hello Meech, I want to buy:\n${product.name} - Size ${selectedSize} - Quantity ${quantity}\nDelivery to: [Chinhoyi / Other]`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen pt-40 pb-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <Link to="/shop" className="inline-flex items-center space-x-3 text-text-secondary hover:text-primary transition-all mb-16 font-bold text-xs group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to catalogue</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-40">
          {/* Immersive Gallery */}
          <div className="lg:col-span-7 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="md:col-span-2 aspect-square md:aspect-[16/10] rounded-[64px] overflow-hidden bg-black/5 shadow-2xl relative"
               >
                  <img 
                    src={product.images[activeImage]} 
                    alt={product.name}
                    className="w-full h-full object-cover grayscale-[10%] brightness-[0.95]"
                    referrerPolicy="no-referrer"
                  />
                  {product.isNew && (
                    <div className="absolute top-12 left-12 bg-white text-black px-6 py-3 rounded-pill text-[11px] font-bold flex items-center gap-2 shadow-2xl">
                      <span>Limited Drop</span>
                    </div>
                  )}
               </motion.div>
               {product.images.map((img, i) => (
                 <motion.button
                   key={i}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 + i * 0.1 }}
                   onClick={() => setActiveImage(i)}
                   className={cn(
                     "aspect-square rounded-[48px] overflow-hidden border-2 transition-all duration-500 hover:scale-[1.02]",
                     activeImage === i 
                       ? "border-secondary shadow-2xl opacity-100" 
                       : "border-transparent opacity-40 hover:opacity-100 grayscale hover:grayscale-0"
                   )}
                 >
                   <img src={img} alt={`${product.name} ${i}`} className="w-full h-full object-cover" />
                 </motion.button>
               ))}
            </div>
          </div>

          {/* Editorial Specs Column */}
          <div className="lg:col-span-5 sticky top-40 space-y-20">
            <div className="space-y-8">
              <div className="space-y-4">
                 <div className="flex items-center gap-4 text-secondary font-bold text-[12px] tracking-tight">
                    <Globe2 className="w-4 h-4 opacity-50" />
                    <span>{product.category}</span>
                    <span className="w-1 h-1 bg-black/10 rounded-full" />
                    <span>Zimbabwean original</span>
                 </div>
                 <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-[0.85] text-primary">
                    {product.name}
                 </h1>
              </div>
              
              <div className="flex items-center gap-8">
                 <span className="text-6xl font-black text-primary tracking-tighter">${product.price}</span>
                 <div className="h-12 w-px bg-black/5" />
                 <div className="space-y-1">
                    <p className="text-[11px] font-bold text-text-secondary opacity-40">ZWG equivalent</p>
                    <p className="text-lg font-bold text-primary">{product.priceZwg} ZWG</p>
                 </div>
              </div>

              <p className="text-xl text-text-secondary font-medium leading-relaxed max-w-md">
                {product.description}
              </p>
            </div>

            <div className="space-y-16">
              {/* Sizing Interface */}
              <div className="space-y-8">
                <div className="flex justify-between items-center border-b border-black/5 pb-4">
                  <h3 className="text-xs font-bold text-text-secondary">Signature Fit</h3>
                  <button className="text-xs font-bold text-secondary flex items-center space-x-2 hover:opacity-80 transition-opacity">
                    <Ruler className="w-4 h-4" />
                    <span>Size guide</span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-4">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "w-20 h-20 rounded-[32px] font-black text-xs transition-all duration-300 border flex items-center justify-center",
                        selectedSize === size 
                          ? "bg-primary text-white border-primary shadow-2xl scale-110 z-10" 
                          : "bg-white text-text-secondary border-black/5 hover:border-black/20"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Suite */}
              <div className="pt-8 space-y-6">
                <button
                  onClick={handleAddToCart}
                  className="w-full py-8 bg-primary text-white rounded-[32px] font-bold text-base flex items-center justify-center space-x-4 shadow-2xl hover:bg-black/90 active:scale-95 transition-all"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Secure this piece</span>
                </button>
                <div className="grid grid-cols-2 gap-6">
                   <button
                     onClick={handleWhatsAppBuy}
                     className="py-6 bg-white text-primary border border-black/5 rounded-[32px] font-bold text-xs flex items-center justify-center space-x-3 shadow-xl hover:bg-black/5 active:scale-95 transition-all"
                   >
                     <MessageCircle className="w-5 h-5 text-success" />
                     <span>WhatsApp</span>
                   </button>
                   <div className="flex items-center space-x-4 bg-black/5 px-6 py-6 rounded-[32px] justify-between">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 opacity-40 hover:opacity-100 transition-opacity">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-lg font-black">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="p-2 opacity-40 hover:opacity-100 transition-opacity">
                        <Plus className="w-4 h-4" />
                      </button>
                   </div>
                </div>
              </div>

              {/* Narrative micro-copy */}
              <div className="pt-20 space-y-6 border-t border-black/5">
                <div className="flex items-start gap-6 opacity-40">
                  <Info className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-xs font-semibold leading-relaxed">
                    This drop is part of our <strong className="font-black underline text-secondary decoration-2 underline-offset-4">Chinhoyi Urban Collection</strong>. Hand-finished with premium Zimbabwe-grown cotton. Built to last.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cinematic Related Grid */}
        {relatedProducts.length > 0 && (
          <div className="pt-40 border-t border-black/5">
            <div className="flex items-end justify-between mb-20">
               <div className="space-y-4">
                  <span className="text-secondary font-bold text-xs flex items-center gap-2 uppercase tracking-widest">
                    Our Selects
                  </span>
                  <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">Related entry</h2>
               </div>
               <Link to="/shop" className="text-xs font-bold text-primary border-b-2 border-secondary pb-1 hover:text-secondary transition-colors">View full drop</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {relatedProducts.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
