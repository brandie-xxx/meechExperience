import React from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';
import { SITE_ASSETS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-32 pt-40 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Header Section */}
          <div className="lg:col-span-12 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <span className="text-secondary font-bold text-[11px] tracking-widest">The Soul of Meech</span>
              <h1 className="text-[10vw] md:text-[8vw] font-extrabold tracking-[-0.06em] leading-[0.75] text-primary">
                Authenticity <br />
                <span className="text-secondary opacity-40">is our</span> <br />
                Currency.
              </h1>
            </motion.div>
          </div>

          {/* Image & Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] rounded-[48px] overflow-hidden shadow-2xl relative">
              <img 
                src={SITE_ASSETS.about.founder} 
                alt="Founder Meech" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-white/80 backdrop-blur-2xl p-8 rounded-[32px] shadow-2xl border border-black/5 flex flex-col items-center space-y-3 max-w-[170px] text-center">
              <div className="space-y-0.5">
                <p className="text-[9px] font-bold text-text-secondary">Verified</p>
                <p className="text-xs font-bold text-primary"> Zimbabwean Roots</p>
              </div>
            </div>
          </motion.div>

          {/* Narrative Section */}
          <div className="lg:col-span-7 pt-12 lg:pt-24 space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10 max-w-2xl"
            >
              <div className="space-y-6 text-xl md:text-2xl text-primary font-bold leading-[1.3] tracking-tight">
                <p>
                  Founded in Chinhoyi by Meech, <span className="text-secondary px-2 bg-secondary/5 rounded-pill">The Meech Experience</span> is more than just a clothing label. It is a reflection of the urban spirit that thrives in Zimbabwean universities. 
                </p>
                <p className="text-text-secondary">
                  Local students deserve high-quality, authentic streetwear that actually fit their lifestyle. Every piece is curated with a focus on fit, fabric, and the "drops" that keep the streets talking.
                </p>
                <p className="opacity-40">
                  Our mission is simple: to bring authentic urban gear to the hands of every student who dares to express themselves.
                </p>
              </div>

              <div className="pt-16 grid grid-cols-2 gap-10 border-t border-black/5">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-secondary">
                    <p className="text-[10px] text-text-secondary font-bold tracking-widest">Roots & HQ</p>
                  </div>
                  <p className="text-3xl md:text-5xl font-black text-primary tracking-tighter">Chinhoyi</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-secondary">
                    <p className="text-[10px] text-text-secondary font-bold tracking-widest">The Core</p>
                  </div>
                  <p className="text-3xl md:text-5xl font-black text-primary tracking-tighter">CUT</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Credit Section */}
        <div className="mt-80 pt-20 border-t border-black/5 flex flex-col items-center pb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-8"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-px bg-black/10" />
              <Zap className="w-5 h-5 text-secondary animate-pulse" />
              <div className="w-8 h-px bg-black/10" />
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-[10px] font-bold tracking-[0.4em] text-text-secondary uppercase opacity-40 font-inter text-center">
                Engineered for the lifestyle by
              </p>
              <h3 className="text-3xl font-black tracking-[-0.05em] text-primary font-inter">
                STATIQUEX
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
