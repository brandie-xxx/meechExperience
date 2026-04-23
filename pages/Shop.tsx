import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PRODUCTS } from "../constants";
import ProductCard from "../components/shop/ProductCard";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const activeCategory = searchParams.get("category") || "all";

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "all" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="bg-white min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-[8vw] font-extrabold tracking-[-0.06em] leading-[0.9] text-primary">
              Curated <br />
              <span className="opacity-30">Drops.</span>
            </h1>
          </motion.div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-base md:text-lg text-text-secondary font-medium md:text-right max-w-[280px] leading-tight">
              Selected essentials from the heart of Zimbabwean urban culture.
            </p>
          </div>
        </div>

        {/* Global Filter Bar */}
        <div className="sticky top-24 z-30 mb-12 md:mb-20 px-2 lg:px-0">
          <div className="bg-white/90 backdrop-blur-2xl px-4 py-4 md:px-6 md:py-6 lg:py-3 lg:px-8 rounded-[24px] lg:rounded-pill border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
            <div className="flex-grow w-full relative">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-primary opacity-50" />
              <input
                type="text"
                placeholder="Search Archive..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent border-none pl-7 py-1 text-[11px] font-bold tracking-tight focus:ring-0 outline-none placeholder:text-black/20"
              />
            </div>
            <div className="w-px h-6 bg-black/5 hidden lg:block" />
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide max-w-full">
              {["all", "clothes", "shoes", "caps"].map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    setSearchParams(cat === "all" ? {} : { category: cat })
                  }
                  className={cn(
                    "px-6 py-2 rounded-pill text-[10px] font-black tracking-widest uppercase transition-all whitespace-nowrap",
                    activeCategory === cat
                      ? "bg-primary text-white shadow-lg scale-105"
                      : "bg-black/5 text-text-secondary hover:bg-black/10",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 md:gap-y-20">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-60 space-y-12">
            <h3 className="text-4xl font-extrabold tracking-tighter opacity-20">
              Nothing matches the vibe.
            </h3>
            <button
              onClick={() => {
                setSearch("");
                setSearchParams({});
              }}
              className="px-12 py-5 bg-primary text-white rounded-pill font-bold text-sm hover:scale-105 active:scale-95 transition-all tracking-widest"
            >
              Reset Archive
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
