import React from 'react';
import { motion } from 'motion/react';
import { SITE_ASSETS } from '../constants';
import { MapPin, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-16 pt-28 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        {/* Sleek Minimalist Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight text-primary">
              The Soul <span className="opacity-30">of Meech.</span>
            </h1>
          </motion.div>
        </div>

        {/* Split Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Sidebar Grid */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-sm aspect-[4/5] bg-neutral-50 border border-black/5"
            >
              <img 
                src={SITE_ASSETS.about.founder} 
                alt="Founder Meech" 
                className="w-full h-full object-cover grayscale-[10%] brightness-[0.98]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="space-y-0.5 text-white">
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#FF7A00]">The Creative Lead</p>
                  <p className="text-base font-black tracking-tight">Meech</p>
                </div>
                <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest">
                  Est. 2024
                </span>
              </div>
            </motion.div>

            {/* Micro-Metrics Widget */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-50/50 p-4 rounded-2xl border border-black/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[8px] font-bold text-text-secondary uppercase">Origins</span>
                  <p className="text-xs font-black text-primary">Chinhoyi</p>
                </div>
              </div>

              <div className="bg-neutral-50/50 p-4 rounded-2xl border border-black/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4 text-secondary" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[8px] font-bold text-text-secondary uppercase">The Hub</span>
                  <p className="text-xs font-black text-primary">CUT Campus</p>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-3xl border border-black/5 space-y-6 shadow-sm"
            >
              <h3 className="text-[10px] font-black tracking-widest text-primary uppercase border-b border-black/5 pb-3">
                The Narrative
              </h3>

              <div className="space-y-4 text-xs font-medium text-text-secondary leading-relaxed">
                <p className="text-sm font-bold text-primary leading-snug">
                  The Meech Experience is more than just a brand name. It represents a bold cultural statement born out of university dormitories and high-energy urban hubs in Zimbabwe.
                </p>
                <p>
                  We saw that local students were looking for authentic apparel that resonated with their unique style, yet many were forced to rely on generic imports. Meech was started to fill that precise void—delivering bespoke garments designed locally with zero design compromises.
                </p>
                <p>
                  Every collection drop is restricted, curated, and optimized. From clean fleece hoodies and active lifestyle coordinate sets to limited-run footwear and headwear, each piece undergoes extensive wear trials right here on campus before release.
                </p>
              </div>

              <div className="pt-4 border-t border-black/5">
                <div className="space-y-2">
                  <h4 className="text-xs font-black text-primary">Uncompromising Fit</h4>
                  <p className="text-[11px] text-text-secondary font-medium leading-relaxed">
                    Designed to maintain clean silhouettes and premium weight over multiple campus semesters.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Brand Credit */}
        <div className="mt-16 pt-8 border-t border-black/5 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <p className="text-[8px] font-bold tracking-[0.4em] text-text-secondary uppercase opacity-50 font-inter mb-1 text-center">
              Infrastructure by
            </p>
            <span className="text-xs font-black tracking-widest text-primary font-inter">
              EXXCONTRA
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
