import React, { useState } from "react";
import { motion } from "motion/react";
import { MessageCircle, Mail, Phone, QrCode, MapPin } from "lucide-react";
import {
  WHATSAPP_NUMBER,
  WHATSAPP_NUMBER_ALT,
  CONTACT_EMAIL,
  INSTAGRAM_HANDLE,
  SITE_ASSETS,
} from "../constants";
import { cn } from "../lib/utils";

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-24 md:pt-32 md:pb-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <span className="text-secondary font-bold text-[11px] tracking-widest">
              Interaction Point
            </span>
            <h1 className="text-[12vw] md:text-[10vw] font-extrabold tracking-[-0.06em] leading-[0.8] text-primary">
              Get in <br />
              <span className="opacity-30">Touch.</span>
            </h1>
          </motion.div>
          <div className="max-w-xs space-y-6">
            <p className="text-xl text-text-secondary font-medium leading-relaxed">
              Have a question or want to visit our Chinhoyi pickup point? We are
              listening.
            </p>
          </div>
        </div>

        {/* QR Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 p-12 md:p-20 bg-secondary/5 rounded-[64px] border border-secondary/10 flex flex-col md:flex-row items-center gap-12 md:gap-24 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] scale-150">
            <QrCode className="w-64 h-64" />
          </div>

          <div className="flex-shrink-0 relative">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-white p-6 rounded-[40px] shadow-2xl border border-black/5 flex items-center justify-center">
              {SITE_ASSETS.qrCode ? (
                <img
                  src={SITE_ASSETS.qrCode}
                  alt="Meech WhatsApp QR"
                  className="w-full h-full object-contain rounded-[24px]"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full bg-black/5 rounded-[24px] flex flex-col items-center justify-center space-y-4">
                  <QrCode className="w-20 h-20 text-secondary" />
                  <p className="text-[10px] font-black tracking-widest text-secondary uppercase">
                    Scan to Drop
                  </p>
                </div>
              )}
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-pill text-[10px] font-black tracking-widest shadow-xl">
              MX CONNECT
            </div>
          </div>

          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-[-0.05em] leading-[0.85] text-primary">
                Instant <br />
                <span className="text-secondary">Connection.</span>
              </h2>
              <p className="text-xl text-text-secondary font-medium max-w-sm leading-relaxed">
                Scan to instantly access our WhatsApp marketplace and view the
                latest catalogue directly on your device.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-text-secondary opacity-40 tracking-widest">
                  Marketplace
                </p>
                <p className="text-sm font-bold text-primary">WhatsApp Meta</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-text-secondary opacity-40 tracking-widest">
                  Archive
                </p>
                <p className="text-sm font-bold text-primary">
                  Digital Catalogue
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Method Grid */}
          <div className="lg:col-span-4 space-y-16">
            <div className="grid grid-cols-1 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 group"
              >
                <div className="w-16 h-16 bg-black/5 rounded-[24px] flex items-center justify-center transition-all group-hover:bg-secondary group-hover:text-white group-hover:scale-110 shadow-xl">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black tracking-tight">
                    Direct lines
                  </h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-text-secondary opacity-40 tracking-widest">
                        Primary line
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}`}
                          className="inline-flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors text-sm tracking-tight border-b-2 border-secondary/20"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                        <a
                          href={`tel:+${WHATSAPP_NUMBER}`}
                          className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors text-sm tracking-tight border-b-2 border-black/5"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Voice call</span>
                        </a>
                      </div>
                      <p className="text-[11px] font-medium text-text-secondary">
                        +263 774 020 356
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-text-secondary opacity-40 tracking-widest">
                        Secondary line
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER_ALT}`}
                          className="inline-flex items-center gap-2 text-text-secondary font-bold hover:text-primary transition-colors text-sm tracking-tight border-b-2 border-black/5"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                        <a
                          href={`tel:+${WHATSAPP_NUMBER_ALT}`}
                          className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors text-sm tracking-tight border-b-2 border-black/5"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Voice call</span>
                        </a>
                      </div>
                      <p className="text-[11px] font-medium text-text-secondary">
                        +263 783 706 136
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6 group"
              >
                <div className="w-16 h-16 bg-black/5 rounded-[24px] flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110 shadow-xl">
                  <Mail className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black tracking-tight">
                    Email support
                  </h3>
                  <p className="text-text-secondary font-medium leading-relaxed">
                    Official correspondence & bulk inquiries.
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-block text-primary font-bold hover:text-secondary transition-colors text-xs tracking-tight border-b-2 border-black/5 pb-0.5"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6 group"
              >
                <div className="w-16 h-16 bg-black/5 rounded-[24px] flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110 shadow-xl">
                  <MapPin className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black tracking-tight">
                    Chinhoyi hub
                  </h3>
                  <p className="text-text-secondary font-medium leading-relaxed">
                    Pickup at Chinhoyi CBD or CUT Campus by arrangement.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold text-[10px] tracking-widest">
                    <span>Mon-Sat: 9am — 5pm</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Pulse */}
            <div className="bg-black/5 p-12 rounded-[48px] space-y-8 relative overflow-hidden">
              <div className="space-y-2 relative z-10">
                <p className="text-[10px] font-bold tracking-widest text-secondary">
                  The Feed
                </p>
                <p className="text-xl font-black tracking-tight">
                  {INSTAGRAM_HANDLE}
                </p>
              </div>
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE.replace("@", "")}`}
                className="block w-full py-4 text-center bg-white rounded-pill font-bold text-[11px] tracking-widest border border-black/5 shadow-xl hover:scale-105 transition-all"
              >
                Follow the drop
              </a>
            </div>
          </div>

          {/* Secure Form */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-12 lg:p-20 rounded-[64px] border border-black/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]"
            >
              <form className="space-y-12" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold tracking-widest text-text-secondary opacity-40 ml-4">
                      Identity
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Who are you?"
                      className="w-full px-8 py-6 bg-black/5 rounded-[24px] outline-none border border-transparent focus:border-secondary focus:bg-white transition-all font-bold text-[11px] tracking-widest"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold tracking-widest text-text-secondary opacity-40 ml-4">
                      Response Channel
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="WhatsApp / Email"
                      className="w-full px-8 py-6 bg-black/5 rounded-[24px] outline-none border border-transparent focus:border-secondary focus:bg-white transition-all font-bold text-[11px] tracking-widest"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold tracking-widest text-text-secondary opacity-40 ml-4">
                    The Narrative
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="What's on your mind?"
                    className="w-full px-8 py-8 bg-black/5 rounded-[40px] outline-none border border-transparent focus:border-secondary focus:bg-white transition-all font-bold text-[11px] tracking-widest resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={cn(
                    "w-full py-8 rounded-[32px] font-bold text-sm flex items-center justify-center space-x-4 shadow-2xl transition-all tracking-widest",
                    isSubmitted
                      ? "bg-success text-white"
                      : "bg-primary text-white hover:bg-black/90 active:scale-95",
                  )}
                >
                  {isSubmitted ? (
                    <>
                      <span>Entry recorded</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
