import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Shipping: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-24 pt-32">
      <div className="max-w-3xl mx-auto space-y-16">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">Shipping & Returns</h1>
          <p className="text-text-secondary text-lg">Clear policies for a smooth experience.</p>
        </div>

        <div className="grid gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-secondary-bg p-10 rounded-card space-y-6"
          >
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Fast Local Shipping</h2>
              <p className="text-text-secondary leading-relaxed">
                We believe in getting your gear to you as fast as possible. 
                <strong> Chinhoyi deliveries are free</strong> and usually processed within 12 hours. 
                For other areas in Zimbabwe, we charge a flat rate of <strong>$3—$5</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-secondary-bg p-10 rounded-card space-y-6"
          >
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Easy Returns</h2>
              <p className="text-text-secondary leading-relaxed">
                Not the right fit? No problem. We offer a <strong>3-day return policy</strong> for unworn, unwashed items in their original packaging. 
                Please contact Meech directly to initiate a return.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="text-center pt-8">
          <h3 className="text-xl font-bold mb-6">Need help with an order?</h3>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-primary text-white px-8 py-4 rounded-pill font-bold hover:bg-primary-dark transition-all scale-hover"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat with Meech</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
