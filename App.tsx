import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext';
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
const Admin = lazy(() => import('./pages/Admin'));

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

  useEffect(() => {
    // Dynamic Canonical Link URL
    const canonicalUrl = `${window.location.origin}${location.pathname}`;
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (link) {
      link.setAttribute('href', canonicalUrl);
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', canonicalUrl);
      document.head.appendChild(link);
    }

    // Dynamic Title & Meta Description based on current path
    let titleText = 'The Meech Experience | Authentic Zimbabwean Streetwear';
    let metaText = 'Premium Zimbabwean streetwear brand by Meech. Dedicated curation of handcrafted clothes, shoes, and caps.';

    switch (location.pathname) {
      case '/':
        titleText = 'The Meech Experience | Authentic Zimbabwean Streetwear';
        metaText = 'Exclusive Zimbabwean streetwear drops from Meech. Premium handcrafted clothes, shoes, and lifestyle caps configured for the elite.';
        break;
      case '/shop':
        titleText = 'Shop Custom Drops | The Meech Experience';
        metaText = 'Explore the curated archive of custom streetwear. Browse exclusive hoodies, sneakers, matching activewear, and urban caps.';
        break;
      case '/about':
        titleText = 'The Creative Vision | The Meech Experience';
        metaText = 'An insight into the creative identity, Zimbabwean roots, and artisanal integrity driving The Meech Experience streetwear collection.';
        break;
      case '/shipping':
        titleText = 'Priority Harare Dispatch & Shipping | The Meech Experience';
        metaText = 'Secure your streetwear drops with verified same-day in-stock Harare dispatch and nationwide logistics support.';
        break;
      case '/contact':
        titleText = 'Direct Communication & Custom Orders | The Meech Experience';
        metaText = 'Connect directly with the Meech design team for customer support, custom sizing pipelines, and streetwear product inquiries.';
        break;
      case '/admin':
        titleText = 'Secure Portal Control | Admin Workspace';
        metaText = 'Secure session-authorized administration system for product drops and interactive inventory control.';
        break;
      case '/privacy':
        titleText = 'Privacy Guidelines | The Meech Experience';
        metaText = 'Our commitment to secure transaction compliance, local delivery confidentiality, and buyer protection policies.';
        break;
      case '/terms':
        titleText = 'Terms of Use & Delivery Agreement | The Meech Experience';
        metaText = 'Review our active buyer terms, delivery policies, and customer order agreements for high-concept collection drops.';
        break;
      default:
        break;
    }

    document.title = titleText;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metaText);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', metaText);
      document.head.appendChild(metaDescription);
    }
  }, [location]);

  return (
    <ProductsProvider>
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
                    <Route path="/admin" element={<Admin />} />
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
    </ProductsProvider>
  );
};

export default App;
