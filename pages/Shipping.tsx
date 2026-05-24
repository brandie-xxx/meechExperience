import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Truck, RefreshCw, HelpCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Shipping: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-16 pt-28 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        {/* Sleek Minimalist Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight text-primary">
              Shipping <span className="opacity-30">& Returns.</span>
            </h1>
          </motion.div>
          <div className="max-w-xs">
            <p className="text-sm text-text-secondary font-medium leading-relaxed">
              Transparent transit procedures and flexible exchange windows tailored for CUT students and clients nationwide.
            </p>
          </div>
        </div>

        {/* Polished Grid Setup */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Shipping Care */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-50/50 p-6 md:p-8 rounded-3xl border border-black/5 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                <Truck className="w-4 h-4 text-secondary" />
              </div>
              <h2 className="text-base font-black text-primary tracking-tight">Rapid Local Dispatch</h2>
            </div>
            
            <p className="text-xs text-text-secondary leading-relaxed font-medium">
              We coordinate instant physical delivery across the greater Chinhoyi region. For regional transfers, we partner with reliable transit runners.
            </p>

            <div className="bg-white p-4 rounded-2xl border border-black/[0.03] space-y-2.5">
              <div className="flex justify-between items-center text-[10px] font-bold">
                <span className="text-text-secondary uppercase tracking-wider">Chinhoyi CBD / CUT Campus</span>
                <span className="text-success uppercase tracking-wider">Free (Within 12h)</span>
              </div>
              <div className="w-full h-px bg-black/[0.03]" />
              <div className="flex justify-between items-center text-[10px] font-bold">
                <span className="text-text-secondary uppercase tracking-wider">Other Cities (Zimbabwe)</span>
                <span className="text-primary font-mono">$3 — $5 Standard</span>
              </div>
            </div>
          </motion.div>

          {/* Return Policies */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-neutral-50/50 p-6 md:p-8 rounded-3xl border border-black/5 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                <RefreshCw className="w-4 h-4 text-secondary" />
              </div>
              <h2 className="text-base font-black text-primary tracking-tight">Agile Exchange Policy</h2>
            </div>
            
            <p className="text-xs text-text-secondary leading-relaxed font-medium">
              Vibes need to be correct. If the sizing is off or the design doesn't hit as expected, we are here to correct it with minimal friction.
            </p>

            <div className="bg-white p-4 rounded-2xl border border-black/[0.03] space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Exchange Window</span>
                <span className="text-xs font-black text-primary">3 Days Active</span>
              </div>
              <p className="text-[10px] text-text-secondary leading-relaxed font-semibold">
                Items must remain strictly unworn, unwashed, and still possess the original product presentation packaging.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Help Center Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-primary text-white p-6 md:p-8 rounded-3xl relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div className="space-y-2 max-w-md">
            <span className="text-[9px] font-bold tracking-widest text-[#FF7A00] uppercase">Direct Assistance</span>
            <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight">Need help with an order?</h3>
            <p className="text-[11px] text-white/70 leading-relaxed font-semibold">
              Get speedier assistance for transit scheduling, status trackers, or returns. Our dispatch leads coordinate directly with you.
            </p>
          </div>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex py-3 px-6 bg-white text-primary rounded-full font-bold text-[10px] tracking-wider uppercase hover:bg-neutral-50 active:scale-95 transition-all shadow-md gap-2 items-center"
          >
            <MessageCircle className="w-4 h-4 text-secondary shrink-0" />
            <span>Chat Dispatch</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Shipping;
