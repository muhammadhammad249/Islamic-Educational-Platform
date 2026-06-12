'use client';

import React, { Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import AnimateIn from '@/components/ui/AnimateIn';

// Rotating geometric star SVG
const IslamicStar = ({ className = "" }: { className?: string }) => (
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

// Inner content component reading search parameters
function CheckoutContent() {
  const t = useTranslations('Teachings.checkout');
  const searchParams = useSearchParams();

  // Retrieve parameters passed from the Pricing card click
  const tier = searchParams.get('tier') || 'scholar';
  const billing = searchParams.get('billing') || 'annual';
  const intensity = searchParams.get('intensity') || 'seeker';

  const isAnnual = billing === 'annual';

  // Cohesive pricing structure
  const basePrices = {
    seeker: { initiate: 24, scholar: 64, master: 159 },
    dedicated: { initiate: 39, scholar: 99, master: 249 },
    scholarly: { initiate: 69, scholar: 189, master: 459 }
  };

  const getCalculatedPrice = () => {
    const intensityKey = (intensity === 'dedicated' || intensity === 'scholarly') ? intensity : 'seeker';
    const tierKey = (tier === 'initiate' || tier === 'master') ? tier : 'scholar';
    
    const annualPrice = basePrices[intensityKey][tierKey];
    if (isAnnual) return annualPrice;

    // Monthly pricing (~25% increment formatted cleanly)
    if (tierKey === 'initiate') {
      return intensityKey === 'seeker' ? 29 : (intensityKey === 'dedicated' ? 49 : 89);
    }
    if (tierKey === 'scholar') {
      return intensityKey === 'seeker' ? 79 : (intensityKey === 'dedicated' ? 124 : 239);
    }
    return intensityKey === 'seeker' ? 199 : (intensityKey === 'dedicated' ? 299 : 549);
  };

  const price = getCalculatedPrice();

  const getTierDisplayName = () => {
    if (tier === 'initiate') return 'Initiate Tier';
    if (tier === 'master') return 'Master Tier';
    return 'Scholar Tier';
  };

  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-8 py-20 relative z-10">
      
      {/* Decorative Rotating Star */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-80 h-80 opacity-[0.02] pointer-events-none">
        <IslamicStar className="w-full h-full text-accent" />
      </div>

      <AnimateIn direction="down">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-10 leading-tight drop-shadow-md">
          {t('title')}
        </h1>
      </AnimateIn>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start relative z-10">
        
        {/* Billing & Payment Form */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* Details Section */}
          <AnimateIn direction="left" delay={0.1}>
            <section className="space-y-6 bg-gradient-to-br from-[#1C1C1C]/40 to-[#0F0F0F]/65 border border-accent/15 p-6 sm:p-8 rounded-2xl shadow-xl">
              <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2 border-b border-accent/10 pb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {t('billing')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label className="font-sans text-[10px] uppercase font-bold text-white/40 group-focus-within:text-accent transition-colors block">
                    {t('fullName')}
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-[#0D0D0D]/40 border-b border-accent/25 focus:border-accent text-white px-4 py-3 focus:bg-[#0D0D0D]/60 outline-none font-sans transition-all duration-300 rounded-t-lg text-sm" 
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="font-sans text-[10px] uppercase font-bold text-white/40 group-focus-within:text-accent transition-colors block">
                    {t('email')}
                  </label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-[#0D0D0D]/40 border-b border-accent/25 focus:border-accent text-white px-4 py-3 focus:bg-[#0D0D0D]/60 outline-none font-sans transition-all duration-300 rounded-t-lg text-sm" 
                  />
                </div>
              </div>
            </section>
          </AnimateIn>

          {/* Payment Section */}
          <AnimateIn direction="left" delay={0.18}>
            <section className="space-y-6 bg-gradient-to-br from-[#1C1C1C]/40 to-[#0F0F0F]/65 border border-accent/15 p-6 sm:p-8 rounded-2xl shadow-xl">
              <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2 border-b border-accent/10 pb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {t('payment')}
              </h2>
              <div className="space-y-6">
                <div className="space-y-2 group">
                  <label className="font-sans text-[10px] uppercase font-bold text-white/40 group-focus-within:text-accent transition-colors block">
                    {t('cardNumber')}
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      required
                      className="w-full bg-[#0D0D0D]/40 border-b border-accent/25 focus:border-accent text-white pl-4 pr-12 py-3 focus:bg-[#0D0D0D]/60 outline-none font-sans transition-all duration-300 rounded-t-lg text-sm" 
                      placeholder="0000 0000 0000 0000" 
                    />
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-white/30 select-none">
                      credit_card
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label className="font-sans text-[10px] uppercase font-bold text-white/40 group-focus-within:text-accent transition-colors block">
                      {t('expiry')}
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-[#0D0D0D]/40 border-b border-accent/25 focus:border-accent text-white px-4 py-3 focus:bg-[#0D0D0D]/60 outline-none font-sans transition-all duration-300 rounded-t-lg text-sm" 
                      placeholder="MM/YY" 
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="font-sans text-[10px] uppercase font-bold text-white/40 group-focus-within:text-accent transition-colors block">
                      {t('cvv')}
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-[#0D0D0D]/40 border-b border-accent/25 focus:border-accent text-white px-4 py-3 focus:bg-[#0D0D0D]/60 outline-none font-sans transition-all duration-300 rounded-t-lg text-sm" 
                      placeholder="000" 
                    />
                  </div>
                </div>
              </div>
            </section>
          </AnimateIn>

          {/* Trust Banner */}
          <AnimateIn direction="up" delay={0.25}>
            <div className="flex items-center gap-3 text-white/50 px-4">
              <span className="material-symbols-outlined text-accent text-lg select-none">lock</span>
              <span className="font-sans text-[10px] uppercase tracking-widest font-bold">
                {t('secure')}
              </span>
            </div>
          </AnimateIn>
        </div>

        {/* Order Summary Card */}
        <div className="lg:col-span-5 w-full">
          <AnimateIn direction="right" delay={0.12}>
            <div className="bg-gradient-to-b from-[#1C1C1C]/75 to-[#0A0A0A]/90 border border-accent/25 p-8 rounded-3xl sticky top-28 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
              
              <h2 className="font-display text-2xl text-white mb-8 pb-4 border-b border-accent/15">
                {t('summary')}
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="font-sans text-white/60">{t('tier')}</span>
                  <span className="font-display text-white text-base sm:text-lg font-bold">
                    {getTierDisplayName()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-sans text-white/60">{t('billingCycle')}</span>
                  <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                    {isAnnual ? t('annual') : t('monthly')}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-sans text-white/60">Study Commitment</span>
                  <span className="font-sans text-white/80 font-medium">
                    {intensity === 'seeker' ? '2 Hours / Week' : intensity === 'dedicated' ? '4 Hours / Week' : '8 Hours / Week'}
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-accent/15 mb-8">
                <div className="flex justify-between items-baseline">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-white/85">
                    {t('total')}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl text-accent font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                      ${price}.00
                    </span>
                    <span className="font-sans text-xs text-white/50">
                      {isAnnual ? '/ yr' : '/ mo'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <Button 
                variant="primary" 
                onClick={() => {
                  alert('Thank you for your inquiry. An admissions advisor will contact you within 24 hours to coordinate scheduling.');
                }}
                className="w-full py-4.5 text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-accent to-[#B8922E] text-primary hover:shadow-accent/25 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:-translate-y-0.5 cursor-pointer shadow-lg transition-all"
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
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-accent/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Suspense wrapper boundary for Next.js build validation */}
      <Suspense fallback={
        <div className="min-h-screen bg-primary flex items-center justify-center text-white/70 font-sans text-sm tracking-wider">
          Loading billing portal...
        </div>
      }>
        <CheckoutContent />
      </Suspense>
    </div>
  );
}
