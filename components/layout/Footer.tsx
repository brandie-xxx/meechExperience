import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white/80 backdrop-blur-xl border-t border-black/5 py-8 px-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between text-[11px] font-bold text-text-secondary tracking-tight">
          <div className="space-y-1 text-center md:text-left">
            <p>
              © 2026{' '}
              <Link to="/admin" className="hover:opacity-80 transition-opacity cursor-pointer text-text-secondary select-none">
                The Meech Experience
              </Link>
              . All rights reserved.
            </p>
            <p className="font-inter tracking-widest text-[9px]">
               infrastructure by <span className="text-secondary font-black font-inter">EXXCONTRA</span>
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
