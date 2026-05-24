import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, FileText, Scale } from 'lucide-react';

interface LegalProps {
  title: string;
}

const Legal: React.FC<LegalProps> = ({ title }) => {
  const isPrivacy = title.toLowerCase().includes('privacy');

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
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-primary">
              {isPrivacy ? (
                <>
                  Privacy <br />
                  <span className="opacity-30">Policy.</span>
                </>
              ) : (
                <>
                  Terms of <br />
                  <span className="opacity-30">Service.</span>
                </>
              )}
            </h1>
          </motion.div>
          <div className="max-w-xs">
            <p className="text-sm text-text-secondary font-medium leading-relaxed">
              We stand by transparent interactions, protecting visitor info, and ensuring clean transactions.
            </p>
          </div>
        </div>

        {/* Dynamic Legal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Quick Info Sidebar Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-neutral-50/50 p-6 rounded-3xl border border-black/5 space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                <h3 className="text-[10px] font-black tracking-widest text-primary uppercase">
                  Compliance Summary
                </h3>
              </div>
              <p className="text-[11px] text-text-secondary leading-relaxed font-semibold">
                {isPrivacy 
                  ? "We only store standard purchase identities (Names, WhatsApp connections) to process drops correctly. No spam, no external broker leaks."
                  : "By accessing Meech, you acknowledge our drops are produced in highly limited collections on a first-come, first-served basis."
                }
              </p>
              <div className="w-full h-px bg-black/5" />
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-text-secondary opacity-40 uppercase tracking-wider">Revision Date</p>
                <p className="text-xs font-black text-primary font-mono">April 21, 2026</p>
              </div>
            </div>
          </div>

          {/* Core Content */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-black/5 space-y-8">
              {isPrivacy ? (
                <>
                  <section className="space-y-2">
                    <h2 className="text-sm font-black text-primary tracking-tight">1. Data Privacy Commitment</h2>
                    <p className="text-xs text-text-secondary font-medium leading-relaxed">
                      Welcome to The Meech Experience. We value your trust and are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you visit our site or place an order via WhatsApp.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h2 className="text-sm font-black text-primary tracking-tight">2. Information We Collect</h2>
                    <p className="text-xs text-text-secondary font-medium leading-relaxed">
                      For processing orders, we collect your name, WhatsApp number, and delivery address. We may also collect technical data such as IP addresses for security and site optimization.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h2 className="text-sm font-black text-primary tracking-tight">3. How We Use Data</h2>
                    <p className="text-xs text-text-secondary font-medium leading-relaxed">
                      Your details are used exclusively for order fulfillment, delivery logistics (Chinhoyi/Harare), and occasional drop updates via WhatsApp. We do not sell your personal data to third parties.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h2 className="text-sm font-black text-primary tracking-tight">4. Security</h2>
                    <p className="text-xs text-text-secondary font-medium leading-relaxed">
                      We implement strict measures to protect your information. WhatsApp encryption ensures that your order conversations remain private between you and the Meech Team.
                    </p>
                  </section>
                </>
              ) : (
                <>
                  <section className="space-y-2">
                    <h2 className="text-sm font-black text-primary tracking-tight">1. Terms of Engagement</h2>
                    <p className="text-xs text-text-secondary font-medium leading-relaxed">
                      By accessing the The Meech Experience platform, you agree to abide by these terms. Our service facilitates the viewing and ordering of Zimbabwean streetwear clothing and accessories.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h2 className="text-sm font-black text-primary tracking-tight">2. Product Availability</h2>
                    <p className="text-xs text-text-secondary font-medium leading-relaxed">
                      All items listed are subject to availability. As many drops are limited editions, we operate on a first-come, first-served basis. Orders are finalized only after WhatsApp confirmation.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h2 className="text-sm font-black text-primary tracking-tight">3. Payments & Logistics</h2>
                    <p className="text-xs text-text-secondary font-medium leading-relaxed">
                      Payments are currently accepted via EcoCash, InnBucks, or Cash on Delivery. Delivery terms vary: Chinhoyi campus deliveries are generally free, while surrounding areas may incur a logistics fee.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h2 className="text-sm font-black text-primary tracking-tight">4. Returns & Authenticity</h2>
                    <p className="text-xs text-text-secondary font-medium leading-relaxed">
                      We guarantee 100% authenticity for all original Meech designs. If a product does not meet the specified vibe or quality, returns must be initiated within 72 hours of delivery.
                    </p>
                  </section>
                </>
              )}

              <section className="space-y-2 pt-4 border-t border-black/5">
                <h2 className="text-sm font-black text-primary tracking-tight">
                  {isPrivacy ? '5. Contact Privacy Officer' : '5. Legal Inquiries'}
                </h2>
                <p className="text-xs text-text-secondary font-medium leading-relaxed">
                  For any inquiries regarding these {isPrivacy ? 'privacy practices' : 'terms of service'}, please contact the Meech Team directly at our Chinhoyi headquarters or via our official WhatsApp line.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
