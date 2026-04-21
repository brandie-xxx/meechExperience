import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white/80 backdrop-blur-xl border-t border-black/5 pt-24 pb-12 px-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold tracking-tighter text-secondary">Meech.</h3>
            <p className="text-text-secondary leading-relaxed text-sm">
              Zimbabwean streetwear. Authentic designs. Crafted for the urban student.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-widest text-text-secondary">Shop</h4>
            <ul className="space-y-4 text-sm font-semibold text-primary">
              <li><Link to="/shop" className="hover:text-secondary transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=clothes" className="hover:text-secondary transition-colors">Clothes</Link></li>
              <li><Link to="/shop?category=shoes" className="hover:text-secondary transition-colors">Shoes</Link></li>
              <li><Link to="/shop?category=caps" className="hover:text-secondary transition-colors">Caps</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-widest text-text-secondary">Support</h4>
            <ul className="space-y-4 text-sm font-semibold text-primary">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Meech</Link></li>
              <li><Link to="/shipping" className="hover:text-secondary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-widest text-text-secondary">Join The Drop</h4>
            <p className="text-text-secondary text-sm">Sign up for early access to new releases.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white border border-border rounded-pill py-3 px-5 outline-none focus:border-primary transition-all text-sm"
              />
              <button className="w-full bg-primary text-white py-3 rounded-pill font-bold text-sm hover:bg-primary-dark transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] font-bold text-text-secondary tracking-tight">
            <div className="space-y-1 text-center md:text-left">
              <p>© 2026 The Meech Experience. All rights reserved.</p>
              <p className="font-inter tracking-widest text-[9px]">
                 powered by <span className="text-secondary font-black font-inter">STATIQUEX</span>
              </p>
            </div>
          <div className="flex space-x-6 mt-4 md:mt-0 items-center">
            <span className="text-[9px] opacity-60">Handcrafted in Zimbabwe</span>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
