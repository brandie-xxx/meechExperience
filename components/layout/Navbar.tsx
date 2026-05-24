import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useCart } from '../../context/CartContext';

const Navbar: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
      isScrolled ? "py-3" : "py-6"
    )}>
      <div className="container mx-auto px-6 max-w-6xl">
        <nav
          className={cn(
            'flex items-center justify-between transition-all duration-700 px-8 py-3',
            isScrolled 
              ? 'bg-black/90 text-white rounded-full shadow-apple-hover backdrop-blur-xl border border-white/10' 
              : 'bg-white/30 backdrop-blur-md rounded-full border border-white/20'
          )}
        >
          <Link to="/" className="flex items-center group relative z-10 transition-all hover:opacity-80 active:scale-95">
            <span className="text-xl font-black tracking-[-0.03em] transition-all text-secondary">
              Meech.
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-[11px] font-bold tracking-tight transition-all relative group py-2 px-1',
                  location.pathname === link.href 
                    ? (isScrolled ? 'text-secondary' : 'text-primary') 
                    : (isScrolled ? 'text-white/80 hover:text-white' : 'text-primary/70 hover:text-primary')
                )}
              >
                <span>{link.name}</span>
                {location.pathname === link.href && (
                  <motion.div 
                    layoutId="nav-underline"
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-0.5 rounded-full",
                      isScrolled ? "bg-secondary" : "bg-primary"
                    )} 
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-1 relative z-10">
            <button 
              onClick={() => setIsCartOpen(true)}
              className={cn(
                "p-2.5 rounded-full transition-all relative scale-hover",
                isScrolled ? "hover:bg-white/10" : "hover:bg-black/5"
              )}
            >
              <ShoppingCart className="w-5 h-5" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span 
                    key={totalItems}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    className={cn(
                      "absolute top-0 right-0 w-4 h-4 bg-secondary text-white text-[8px] font-black flex items-center justify-center rounded-full shadow-lg border-2",
                      isScrolled ? "border-black" : "border-white"
                    )}
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <button
              className={cn(
                "lg:hidden p-2.5 rounded-full transition-all",
                isScrolled ? "hover:bg-white/10" : "hover:bg-black/5"
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 overflow-hidden lg:hidden px-6 pt-2 z-40"
            >
              <div className="bg-black/95 backdrop-blur-2xl rounded-[28px] py-6 px-8 border border-white/10">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        className={cn(
                          'block text-sm font-bold tracking-tight transition-all duration-300',
                          location.pathname === link.href ? 'text-secondary' : 'text-white/80 hover:text-white'
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
