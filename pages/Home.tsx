import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, REVIEWS, SITE_ASSETS } from '../constants';
import ProductCard from '../components/shop/ProductCard';

const Home: React.FC = () => {
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <div className="pb-24">
      {/* Editorial Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Full Screen High-Fashion Image */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={SITE_ASSETS.hero} 
            alt="The Meech Experience" 
            className="w-full h-full object-cover grayscale-[20%] brightness-[0.8]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </motion.div>

        {/* Layered Text Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2 flex flex-col items-center"
            >
              <span className="text-secondary font-black text-2xl md:text-3xl mb-2">
                Catch up with
              </span>
              <h1 className="text-[14vw] md:text-[10vw] font-black tracking-[-0.06em] leading-[0.8] text-white drop-shadow-2xl">
                Meech
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-base md:text-xl text-white/90 font-medium max-w-xl leading-relaxed tracking-tight mt-12"
            >
              Zimbabwean Streetwear. Authentic Culture. Uncompromising Style.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap justify-center gap-6 mt-16 md:mt-24"
            >
              <Link to="/shop" className="group bg-white text-black px-12 py-4 rounded-pill font-black text-sm hover:bg-secondary hover:text-white transition-all scale-hover shadow-2xl flex items-center space-x-3">
                <span>Enter the Drop</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center space-y-4"
        >
          <span className="text-[11px] font-bold tracking-widest flex flex-col items-center gap-2">
            <ChevronDown className="w-4 h-4 animate-bounce" />
            Scroll
          </span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-white/60"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Collection Grid */}
      <section className="container mx-auto px-6 py-24 max-w-6xl">
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <motion.span 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-secondary font-bold text-[11px] tracking-widest"
          >
            Curated Selection
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight text-primary">
            Signature Pieces
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
          <Link to="/shop?category=clothes" className="md:col-span-12 lg:col-span-7 relative rounded-[40px] overflow-hidden group shadow-apple-card border border-white/20">
            <img src={SITE_ASSETS.categories.apparel} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Clothes" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-12 left-12 text-white space-y-3">
              <h3 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none">Essential <br/> Apparel</h3>
              <p className="text-white/60 font-medium text-sm max-w-sm">Crafted for the streets. Made for the people.</p>
              <div className="flex items-center space-x-2 text-secondary font-bold tracking-widest text-[10px] pt-4 group-hover:translate-x-2 transition-transform">
                <span>Explore department</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
          <div className="md:col-span-12 lg:col-span-5 grid grid-rows-2 gap-6">
            <Link to="/shop?category=shoes" className="relative rounded-[40px] overflow-hidden group shadow-apple-card border border-white/20">
              <img src={SITE_ASSETS.categories.footwear} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Shoes" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white space-y-1">
                <h3 className="text-3xl font-bold tracking-tighter">Footwear</h3>
                <div className="w-10 h-px bg-white/20 group-hover:w-20 transition-all duration-500" />
              </div>
            </Link>
            <Link to="/shop?category=caps" className="relative rounded-[40px] overflow-hidden group shadow-apple-card border border-white/20">
              <img src={SITE_ASSETS.categories.accessories} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Caps" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white space-y-1">
                <h3 className="text-3xl font-bold tracking-tighter">Caps & Brims</h3>
                <div className="w-10 h-px bg-white/20 group-hover:w-20 transition-all duration-500" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Bestsellers Grid */}
      <section className="container mx-auto px-6 py-24 bg-white/50 backdrop-blur-2xl rounded-[64px] border border-white/20 shadow-apple-hover max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 px-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <span className="text-secondary font-bold text-[11px] tracking-widest uppercase">Our</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary">Best Sellers</h2>
          </motion.div>
          <Link to="/shop" className="text-[11px] font-bold tracking-widest text-primary border-b-2 border-secondary pb-1 hover:text-secondary transition-colors">
            Full Collection
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} hideBestSellerBadge />
          ))}
        </div>
      </section>

      {/* Social Trust Feed */}
      <section className="bg-secondary-bg py-32">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Vibes on Instagram</h2>
            <a 
              href="https://instagram.com/e_meech24" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary/70 font-bold text-lg hover:text-secondary transition-colors inline-block pb-1 border-b-2 border-secondary/20"
            >
              Join the community @e_meech24
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-10 rounded-[32px] border border-border shadow-apple-card space-y-6">
              <div className="flex text-secondary space-x-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-text-primary font-medium leading-relaxed">
                "{review.comment}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary-bg rounded-pill flex items-center justify-center font-bold text-sm text-text-secondary">
                  {review.user[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">{review.user}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6 mb-32">
        <div className="bg-primary px-8 md:px-32 py-24 rounded-[48px] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary opacity-20 blur-[150px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-2xl relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">Get drops first.</h2>
            <p className="text-xl text-white/70 font-medium leading-relaxed">
              Sign up for notifications on new releases, restocks, and exclusive in-person pop-ups at Chinhoyi campus.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-pill px-8 py-5 flex-grow outline-none focus:bg-white/20 transition-all font-medium"
              />
              <button className="bg-white text-primary px-10 py-5 rounded-pill font-bold hover:bg-secondary-bg transition-all whitespace-nowrap shadow-xl">
                Notify Me
              </button>
            </form>
            <div className="flex items-center space-x-3 text-sm font-medium opacity-60">
              <input type="checkbox" id="whatsapp-opt" className="rounded-sm bg-white/10 border-white/20" />
              <label htmlFor="whatsapp-opt">Also send me alerts via WhatsApp</label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
