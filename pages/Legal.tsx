import React from 'react';

interface LegalProps {
  title: string;
}

const Legal: React.FC<LegalProps> = ({ title }) => {
  const isPrivacy = title.toLowerCase().includes('privacy');

  return (
    <div className="container mx-auto px-6 py-20 min-h-[60vh]">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-5xl font-black text-text-primary tracking-tighter underline decoration-primary/20">{title}</h1>
        
        <div className="prose prose-slate max-w-none space-y-8 text-text-secondary font-medium leading-relaxed">
          {isPrivacy ? (
            <>
              <section className="space-y-4">
                <h2 className="text-2xl font-black text-text-primary tracking-tight">1. Data Privacy Commitment</h2>
                <p>Welcome to The Meech Experience. We value your trust and are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you visit our site or place an order via WhatsApp.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-text-primary tracking-tight">2. Information We Collect</h2>
                <p>For processing orders, we collect your name, WhatsApp number, and delivery address. We may also collect technical data such as IP addresses for security and site optimization.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-text-primary tracking-tight">3. How We Use Data</h2>
                <p>Your details are used exclusively for order fulfillment, delivery logistics (Chinhoyi/Harare), and occasional drop updates via WhatsApp. We do not sell your personal data to third parties.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-text-primary tracking-tight">4. Security</h2>
                <p>We implement strict measures to protect your information. WhatsApp encryption ensures that your order conversations remain private between you and the Meech Team.</p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-4">
                <h2 className="text-2xl font-black text-text-primary tracking-tight">1. Terms of Engagement</h2>
                <p>By accessing the The Meech Experience platform, you agree to abide by these terms. Our service facilitates the viewing and ordering of Zimbabwean streetwear clothing and accessories.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-text-primary tracking-tight">2. Product Availability</h2>
                <p>All items listed are subject to availability. As many drops are limited editions, we operate on a first-come, first-served basis. Orders are finalized only after WhatsApp confirmation.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-text-primary tracking-tight">3. Payments & Logistics</h2>
                <p>Payments are currently accepted via EcoCash, InnBucks, or Cash on Delivery. Delivery terms vary: Chinhoyi campus deliveries are generally free, while surrounding areas may incur a logistics fee.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-text-primary tracking-tight">4. Returns & Authenticity</h2>
                <p>We guarantee 100% authenticity for all original Meech designs. If a product does not meet the specified vibe or quality, returns must be initiated within 72 hours of delivery.</p>
              </section>
            </>
          )}

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-text-primary tracking-tight">{isPrivacy ? '5. Contact Privacy Officer' : '5. Legal Inquiries'}</h2>
            <p>For any inquiries regarding these {isPrivacy ? 'privacy practices' : 'terms of service'}, please contact the Meech Team directly at our Chinhoyi headquarters or via our official WhatsApp line.</p>
          </section>
        </div>

        <div className="pt-12 border-t border-border flex flex-col items-center">
           <p className="text-xs font-black text-text-secondary">Last Updated: April 21, 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Legal;
