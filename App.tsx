import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { CartProvider } from './context/CartContext';
import CartSidebar from './components/shop/CartSidebar';
import ScrollToTop from './components/layout/ScrollToTop';
import { motion, AnimatePresence } from 'motion/react';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const About = lazy(() => import('./pages/About'));
const Shipping = lazy(() => import('./pages/Shipping'));
const Contact = lazy(() => import('./pages/Contact'));
const Legal = lazy(() => import('./pages/Legal'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white text-primary">
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="rounded-full h-12 w-12 border-t-2 border-primary"
    ></motion.div>
  </div>
);

const App: React.FC = () => {
  const location = useLocation();

  return (
    <CartProvider>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        {/* Dynamic Background System */}
        <div className="fixed inset-0 pointer-events-none z-0 bg-white">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.35, 0.5, 0.35],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 mesh-gradient" 
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply" />
        </div>

        <Navbar />
        <CartSidebar />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Suspense fallback={<LoadingFallback />}>
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shipping" element={<Shipping />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Legal title="Privacy Policy" />} />
                    <Route path="/terms" element={<Legal title="Terms of Service" />} />
                  </Routes>
                </motion.div>
              </Suspense>
            </AnimatePresence>
          </main>
          
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
