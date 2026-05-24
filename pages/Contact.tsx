import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Mail, MapPin } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_NUMBER_ALT, CONTACT_EMAIL, INSTAGRAM_HANDLE } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-16 pt-28 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        {/* Sleek Minimalist Header */}
        <div className="mb-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-primary">
              Get in <span className="opacity-30">Touch.</span>
            </h1>
          </motion.div>
        </div>
        
        {/* Compact, Space Saving Directory */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Direct Lines & General Contacts */}
          <div className="bg-neutral-50/50 p-6 rounded-3xl border border-black/5 space-y-6">
            <div>
              <h3 className="text-[10px] font-black tracking-widest text-primary uppercase border-b border-black/5 pb-2.5 mb-4">
                Direct Client Lines
              </h3>
              
              <div className="space-y-4">
                {/* Primary Channel */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Primary Channel</span>
                    <div className="flex gap-1.5">
                      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="px-2.5 py-1 bg-secondary/15 hover:bg-secondary hover:text-white text-secondary rounded-full text-[9px] font-bold uppercase transition-all">
                        WhatsApp
                      </a>
                      <a href={`tel:+${WHATSAPP_NUMBER}`} className="px-2.5 py-1 bg-black/5 hover:bg-primary hover:text-white text-primary rounded-full text-[9px] font-bold uppercase transition-all">
                        Call
                      </a>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-primary tracking-tight">+263 774 020 356</p>
                </div>

                {/* Alternate Channel */}
                <div className="space-y-2 pt-2 border-t border-black/[0.03]">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Alternate Channel</span>
                    <div className="flex gap-1.5">
                      <a href={`https://wa.me/${WHATSAPP_NUMBER_ALT}`} className="px-2.5 py-1 bg-secondary/15 hover:bg-secondary hover:text-white text-secondary rounded-full text-[9px] font-bold uppercase transition-all">
                        WhatsApp
                      </a>
                      <a href={`tel:+${WHATSAPP_NUMBER_ALT}`} className="px-2.5 py-1 bg-black/5 hover:bg-primary hover:text-white text-primary rounded-full text-[9px] font-bold uppercase transition-all">
                        Call
                      </a>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-primary tracking-tight">+263 783 706 136</p>
                </div>
              </div>
            </div>
          </div>

          {/* Email & Hub Location */}
          <div className="space-y-6">
            <div className="bg-neutral-50/50 p-6 rounded-3xl border border-black/5 space-y-5">
              {/* Email Card */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white rounded-xl border border-black/5 text-secondary flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-black text-primary tracking-tight">Email Support</h4>
                  <p className="text-[11px] text-text-secondary leading-tight">For customization inquiries or orders.</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="inline-block text-xs font-bold text-primary hover:text-secondary border-b border-black/10 transition-colors pt-0.5">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              {/* Chinhoyi Hub Card */}
              <div className="flex items-start gap-3 pt-3 border-t border-black/5">
                <div className="p-2 bg-white rounded-xl border border-black/5 text-secondary flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-black text-primary tracking-tight">Chinhoyi Hub</h4>
                  <p className="text-[11px] text-text-secondary leading-tight">Pickups at Chinhoyi CBD or CUT campus by appointment.</p>
                  <p className="text-[10px] font-bold text-secondary bg-secondary/10 inline-block px-2.5 py-0.5 rounded-full mt-1">
                    Mon-Sat: 9am — 5pm
                  </p>
                </div>
              </div>
            </div>

            {/* Compact Instagram Widget */}
            <div className="bg-primary text-white p-5 rounded-3xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none transition-transform group-hover:scale-110 duration-500">
                  <MessageCircle className="w-20 h-20" />
               </div>
               <div className="space-y-3.5 relative z-10">
                  <div className="space-y-0.5">
                     <span className="text-[8px] font-bold tracking-widest text-[#FF7A00] uppercase">The Grid</span>
                     <p className="text-sm font-black tracking-tight">{INSTAGRAM_HANDLE}</p>
                     <p className="text-[10px] text-white/70 leading-normal font-medium max-w-xs">Follow us on Instagram to view the latest fashion drops and catalog previews.</p>
                  </div>
                  <a 
                    href={`https://instagram.com/${INSTAGRAM_HANDLE.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full py-2 bg-white text-primary text-center justify-center items-center rounded-full font-bold text-[10px] tracking-tight hover:bg-neutral-50 active:scale-95 transition-all shadow-md"
                  >
                     Follow the drop
                  </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
