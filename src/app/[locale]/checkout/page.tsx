'use client';

import React, { Suspense, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { Link } from '@/navigation';
import Button from '@/components/ui/Button';
import AnimateIn from '@/components/ui/AnimateIn';

const IslamicStar = ({ className = '' }: { className?: string }) => (
  <svg
    className={`pointer-events-none select-none text-accent/15 ${className}`}
    viewBox="0 0 200 200"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.75"
  >
    <g>
      <circle cx="100" cy="100" r="95" strokeDasharray="3,3" />
      <circle cx="100" cy="100" r="75" />
      <rect x="50" y="50" width="100" height="100" rx="1" />
      <rect x="50" y="50" width="100" height="100" rx="1" transform="rotate(45 100 100)" />
    </g>
  </svg>
);

function CheckoutContent() {
  const t = useTranslations('Teachings.checkout');
  const searchParams = useSearchParams();

  const tier = searchParams.get('tier') || 'scholar';
  const billing = searchParams.get('billing') || 'annual';
  const intensity = searchParams.get('intensity') || 'seeker';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const [message, setMessage] = useState('');

  const isAnnual = billing === 'annual';

  const basePrices = {
    seeker: { initiate: 24, scholar: 64, master: 159 },
    dedicated: { initiate: 39, scholar: 99, master: 249 },
    scholarly: { initiate: 69, scholar: 189, master: 459 },
  };

  const intensityKey =
    intensity === 'dedicated' || intensity === 'scholarly'
      ? intensity
      : 'seeker';

  const tierKey =
    tier === 'initiate' || tier === 'master' ? tier : 'scholar';

  const getCalculatedPrice = () => {
    if (isAnnual) return basePrices[intensityKey][tierKey];

    if (tierKey === 'initiate') {
      return intensityKey === 'seeker' ? 29 : intensityKey === 'dedicated' ? 49 : 89;
    }

    if (tierKey === 'scholar') {
      return intensityKey === 'seeker' ? 79 : intensityKey === 'dedicated' ? 124 : 239;
    }

    return intensityKey === 'seeker' ? 199 : intensityKey === 'dedicated' ? 299 : 549;
  };

  const price = getCalculatedPrice();

  const tierName =
    tierKey === 'initiate'
      ? 'Initiate Tier'
      : tierKey === 'master'
        ? 'Master Tier'
        : 'Scholar Tier';

  const commitment =
    intensityKey === 'seeker'
      ? '2 Hours / Week'
      : intensityKey === 'dedicated'
        ? '4 Hours / Week'
        : '8 Hours / Week';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setMessage('');
  };

  const handleSubmit = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.cardNumber ||
      !formData.expiry ||
      !formData.cvv
    ) {
      setMessage('Please fill all billing and payment fields.');
      return;
    }

    setMessage(
      'Request submitted successfully. An admissions advisor will contact you within 24 hours.'
    );
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-80 h-80 opacity-[0.02] pointer-events-none">
        <IslamicStar className="w-full h-full text-accent" />
      </div>

      <AnimateIn direction="down">
        <div className="mb-10">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-widest font-bold mb-6 hover:text-white transition"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Packages
          </Link>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            {t('title')}
          </h1>
        </div>
      </AnimateIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        <div className="lg:col-span-7 space-y-8">
          <AnimateIn direction="left" delay={0.1}>
            <section className="space-y-6 bg-gradient-to-br from-[#1C1C1C]/40 to-[#0F0F0F]/65 border border-accent/15 p-6 sm:p-8 rounded-2xl shadow-xl">
              <h2 className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2 border-b border-accent/10 pb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {t('billing')}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase font-bold text-white/40 group-focus-within:text-accent transition-colors block">
                    {t('fullName')}
                  </label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full bg-[#0D0D0D]/40 border-b border-accent/25 focus:border-accent text-white px-4 py-3 outline-none rounded-t-lg text-sm placeholder:text-white/25"
                  />
                </div>

                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase font-bold text-white/40 group-focus-within:text-accent transition-colors block">
                    {t('email')}
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-[#0D0D0D]/40 border-b border-accent/25 focus:border-accent text-white px-4 py-3 outline-none rounded-t-lg text-sm placeholder:text-white/25"
                  />
                </div>
              </div>
            </section>
          </AnimateIn>

          <AnimateIn direction="left" delay={0.18}>
            <section className="space-y-6 bg-gradient-to-br from-[#1C1C1C]/40 to-[#0F0F0F]/65 border border-accent/15 p-6 sm:p-8 rounded-2xl shadow-xl">
              <h2 className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2 border-b border-accent/10 pb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {t('payment')}
              </h2>

              <div className="space-y-6">
                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase font-bold text-white/40 group-focus-within:text-accent transition-colors block">
                    {t('cardNumber')}
                  </label>

                  <div className="relative">
                    <input
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      type="text"
                      required
                      placeholder="0000 0000 0000 0000"
                      className="w-full bg-[#0D0D0D]/40 border-b border-accent/25 focus:border-accent text-white pl-4 pr-12 py-3 outline-none rounded-t-lg text-sm placeholder:text-white/25"
                    />

                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
                      credit_card
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label className="text-[10px] uppercase font-bold text-white/40 group-focus-within:text-accent transition-colors block">
                      {t('expiry')}
                    </label>
                    <input
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleChange}
                      type="text"
                      required
                      placeholder="MM/YY"
                      className="w-full bg-[#0D0D0D]/40 border-b border-accent/25 focus:border-accent text-white px-4 py-3 outline-none rounded-t-lg text-sm placeholder:text-white/25"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-[10px] uppercase font-bold text-white/40 group-focus-within:text-accent transition-colors block">
                      {t('cvv')}
                    </label>
                    <input
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      type="text"
                      required
                      placeholder="000"
                      className="w-full bg-[#0D0D0D]/40 border-b border-accent/25 focus:border-accent text-white px-4 py-3 outline-none rounded-t-lg text-sm placeholder:text-white/25"
                    />
                  </div>
                </div>
              </div>
            </section>
          </AnimateIn>

          {message && (
            <div className="rounded-2xl border border-accent/20 bg-accent/10 px-5 py-4 text-sm text-accent text-center">
              {message}
            </div>
          )}

          <AnimateIn direction="up" delay={0.25}>
            <div className="flex items-center gap-3 text-white/50 px-2">
              <span className="material-symbols-outlined text-accent text-lg">
                lock
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold">
                {t('secure')}
              </span>
            </div>
          </AnimateIn>
        </div>

        <div className="lg:col-span-5 w-full">
          <AnimateIn direction="right" delay={0.12}>
            <div className="bg-gradient-to-b from-[#1C1C1C]/75 to-[#0A0A0A]/90 border border-accent/25 p-6 sm:p-8 rounded-3xl lg:sticky lg:top-28 shadow-2xl relative overflow-hidden">
              <h2 className="font-display text-2xl text-white mb-8 pb-4 border-b border-accent/15">
                {t('summary')}
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="text-white/60">{t('tier')}</span>
                  <span className="font-display text-white text-base sm:text-lg font-bold">
                    {tierName}
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/60">{t('billingCycle')}</span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                    {isAnnual ? t('annual') : t('monthly')}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/60">Study Commitment</span>
                  <span className="text-white/80 font-medium">{commitment}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-accent/15 mb-8">
                <div className="flex justify-between items-baseline gap-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/85">
                    {t('total')}
                  </span>

                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl text-accent font-bold">
                      ${price}.00
                    </span>
                    <span className="text-xs text-white/50">
                      {isAnnual ? '/ yr' : '/ mo'}
                    </span>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                onClick={handleSubmit}
                className="w-full py-4 text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-accent to-[#B8922E] text-primary hover:-translate-y-0.5 cursor-pointer shadow-lg transition-all"
              >
                {t('payNow')}
              </Button>
            </div>
          </AnimateIn>
        </div>
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <div className="bg-primary min-h-screen pt-12 relative overflow-hidden text-white">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <Suspense
        fallback={
          <div className="min-h-screen bg-primary flex items-center justify-center text-white/70 text-sm tracking-wider">
            Loading billing portal...
          </div>
        }
      >
        <CheckoutContent />
      </Suspense>
    </div>
  );
}