import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/shop/ProductCard';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                           p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="bg-white min-h-screen pb-16 pt-28 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Sleek Minimalist Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight text-primary">
              Curated <span className="opacity-30">Drops.</span>
            </h1>
          </motion.div>
        </div>

        {/* Global Filter Bar */}
        <div className="sticky top-24 z-30 mb-12 space-y-3">
          <div className="bg-white/95 backdrop-blur-2xl px-5 py-3 lg:px-6 rounded-full border border-black/5 shadow-[0_15px_35px_rgba(0,0,0,0.04)] flex items-center">
            <div className="flex-grow w-full relative">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-primary opacity-50" />
              <input
                type="text"
                placeholder="Search archive..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent border-none pl-7 py-1 text-[11px] font-bold tracking-tight focus:ring-0 outline-none placeholder:text-black/20 text-primary"
              />
            </div>
          </div>

          {/* Horizontal Category Pill Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 pt-1 scrollbar-hide max-w-full px-2">
            {['all', 'clothes', 'shoes', 'caps'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSearchParams(cat === 'all' ? {} : { category: cat })}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-bold tracking-tight transition-all whitespace-nowrap border",
                  activeCategory === cat 
                    ? "bg-primary text-white border-primary shadow-sm z-10" 
                    : "bg-white text-text-secondary border-black/5 hover:bg-black/[0.02]"
                )}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results Screen */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-32 space-y-6">
            <h3 className="text-2xl font-black tracking-tight text-primary opacity-30">Nothing matches the vibe.</h3>
            <button 
              onClick={() => { setSearch(''); setSearchParams({}); }}
              className="px-6 py-3 bg-primary text-white rounded-full font-bold text-xs hover:bg-secondary active:scale-95 transition-all tracking-tight"
            >
              Reset archive
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
