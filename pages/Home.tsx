import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { REVIEWS, SITE_ASSETS } from '../constants';
import { useProducts } from '../context/ProductsContext';
import ProductCard from '../components/shop/ProductCard';

const Home: React.FC = () => {
  const { products } = useProducts();
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <div className="pb-16 bg-white overflow-hidden">
      {/* Editorial Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Full Screen High-Fashion Image */}
        <motion.div 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={SITE_ASSETS.hero} 
            alt="The Meech Experience" 
            className="w-full h-full object-cover grayscale-[15%] brightness-[0.75]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        </motion.div>

        {/* Layered Text Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1 flex flex-col items-center"
            >
              <h1 className="text-[10vw] md:text-[7vw] font-black tracking-tighter leading-[0.95] text-white">
                Drip with <br />
                <span className="text-secondary">Meech</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center mt-10 md:mt-12"
            >
              <Link to="/shop" className="group bg-white text-primary px-8 py-3.5 rounded-full font-bold text-sm hover:bg-secondary hover:text-white transition-all shadow-xl flex items-center space-x-2.5">
                <span>Start Shopping</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center space-y-3"
        >
          <span className="text-[10px] font-bold tracking-tight flex flex-col items-center gap-1.5">
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            Scroll
          </span>
          <div className="w-px h-8 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-white/50"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Collection Grid */}
      <section className="container mx-auto px-4 sm:px-6 py-16 max-w-6xl">
        <div className="flex flex-col items-center mb-10 space-y-2 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary">
            Signature Pieces
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Link to="/shop?category=clothes" className="lg:col-span-7 relative h-[400px] lg:h-[480px] rounded-3xl overflow-hidden group border border-black/5 shadow-sm">
            <img src={SITE_ASSETS.categories.apparel} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Clothes" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white space-y-2">
              <h3 className="text-3xl md:text-4xl font-black tracking-tighter leading-none">Essential <br/> Apparel</h3>
              <div className="flex items-center space-x-1 text-secondary font-bold tracking-tight text-xs pt-3 group-hover:translate-x-1 transition-transform">
                <span>Explore Department</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <Link to="/shop?category=shoes" className="relative h-[190px] lg:h-[228px] rounded-3xl overflow-hidden group border border-black/5 shadow-sm">
              <img src={SITE_ASSETS.categories.footwear} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Shoes" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <h3 className="text-xl font-black tracking-tighter">Footwear Drop</h3>
                <div className="w-6 h-px bg-white/20 group-hover:w-12 transition-all duration-300" />
              </div>
            </Link>
            <Link to="/shop?category=caps" className="relative h-[190px] lg:h-[228px] rounded-3xl overflow-hidden group border border-black/5 shadow-sm">
              <img src={SITE_ASSETS.categories.accessories} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Caps" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <h3 className="text-xl font-black tracking-tighter">Caps & Accessories</h3>
                <div className="w-6 h-px bg-white/20 group-hover:w-12 transition-all duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Bestsellers Grid */}
      <section className="container mx-auto px-4 sm:px-6 py-12 bg-neutral-50/50 rounded-3xl border border-black/5 max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 px-2">
          <div className="space-y-1">
            <h2 className="text-2xl md:text-3.5xl font-black tracking-tighter text-primary">Best Sellers</h2>
          </div>
          <Link to="/shop" className="text-xs font-bold text-primary border-b-2 border-secondary pb-0.5 hover:text-secondary transition-colors tracking-tight">
            Full Collection
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} hideBestSellerBadge />
          ))}
        </div>
      </section>

      {/* Custom Contact Alignment: Streamlined Vibe and Testimonial Hub */}
      <section className="container mx-auto px-4 sm:px-6 py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Social Instagram Box */}
          <div className="lg:col-span-4 bg-primary text-white p-6 rounded-3xl relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 p-4 opacity-5 pointer-events-none transition-transform group-hover:scale-110 duration-500">
              <span className="text-7xl font-mono">@</span>
            </div>
            <div className="space-y-4 relative z-10">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#FF7A00] tracking-tight">The Interaction</span>
                <p className="text-xl font-black tracking-tight">Instagram Feed</p>
                <p className="text-[11px] text-white/70 leading-relaxed font-semibold">Join our digital streetwear fraternity. Direct drops verified daily.</p>
              </div>
              <a 
                href="https://instagram.com/e_meech24" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex w-full py-2.5 bg-white text-primary text-center justify-center items-center rounded-full font-bold text-xs tracking-tight hover:bg-neutral-50 active:scale-95 transition-all shadow-md"
              >
                Join @e_meech24
              </a>
            </div>
          </div>

          {/* Core Reviews Area */}
          <div className="lg:col-span-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {REVIEWS.map((review) => (
                <div key={review.id} className="bg-white p-5 rounded-2xl border border-black/5 space-y-4 shadow-sm">
                  <p className="text-[11px] text-text-primary font-medium leading-relaxed">
                    "{review.comment}"
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-black/[0.04] rounded-full flex items-center justify-center font-bold text-[9px] text-text-secondary">
                      {review.user[0]}
                    </div>
                    <p className="text-[10px] font-bold text-primary">{review.user}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Structured Compact Newsletter */}
      <section className="container mx-auto px-4 sm:px-6 mb-8 max-w-6xl">
        <div className="bg-primary px-6 py-12 md:py-16 rounded-3xl text-white overflow-hidden relative border border-black/5">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary opacity-15 blur-[120px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-xl relative z-10 space-y-6">
            <div className="space-y-1.5">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.95]">Get Drops First.</h2>
            </div>
            
            <p className="text-xs text-white/70 font-semibold leading-relaxed max-w-md">
              Receive instanter notifications on newest releases, inventory restocks, and exclusive in-person pop-ups at CUT campus.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter email..." 
                className="bg-white/10 border border-white/20 rounded-full px-5 py-3 flex-grow outline-none focus:bg-white/20 transition-all font-semibold text-xs text-white placeholder-white/30"
              />
              <button className="bg-white text-primary px-6 py-3 rounded-full font-bold text-xs hover:bg-neutral-50 transition-all tracking-tight whitespace-nowrap shadow-md">
                Notify me
              </button>
            </form>
            
            <div className="flex items-center space-x-2 text-[10px] font-bold opacity-75">
              <input type="checkbox" id="whatsapp-opt" className="rounded bg-white/10 border-white/20 text-secondary focus:ring-0" />
              <label htmlFor="whatsapp-opt">Also send me alerts via WhatsApp</label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
