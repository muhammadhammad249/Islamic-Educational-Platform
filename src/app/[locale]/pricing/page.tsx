'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import AnimateIn from '@/components/ui/AnimateIn';
import ArchContainer from '@/components/ui/ArchContainer';

const IslamicPattern = ({ className = '' }: { className?: string }) => (
  <svg
    className={`absolute pointer-events-none select-none text-accent/5 ${className}`}
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.3"
  >
    <defs>
      <pattern id="islamicGrid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 20 10 L 10 20 L 0 10 Z" />
        <path d="M 0 0 L 20 20 M 20 0 L 0 20" strokeWidth="0.15" strokeDasharray="1,1" />
        <circle cx="10" cy="10" r="3.5" strokeWidth="0.2" />
        <circle cx="10" cy="10" r="1.5" strokeWidth="0.2" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#islamicGrid)" />
  </svg>
);

const IslamicStar = ({ className = '' }: { className?: string }) => (
  <svg
    className={`pointer-events-none select-none text-accent/15 ${className}`}
    viewBox="0 0 200 200"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.75"
  >
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      style={{ transformOrigin: '100px 100px' }}
    >
      <circle cx="100" cy="100" r="95" strokeDasharray="3,3" />
      <circle cx="100" cy="100" r="75" />
      <circle cx="100" cy="100" r="50" strokeDasharray="5,5" />
      <circle cx="100" cy="100" r="25" />
      <rect x="50" y="50" width="100" height="100" rx="1" />
      <rect x="50" y="50" width="100" height="100" rx="1" transform="rotate(45 100 100)" />
      <line x1="100" y1="5" x2="100" y2="195" />
      <line x1="5" y1="100" x2="195" y2="100" />
      <line x1="33" y1="33" x2="167" y2="167" />
      <line x1="33" y1="167" x2="167" y2="33" />
    </motion.g>
  </svg>
);

export default function PricingPage() {
  const t = useTranslations('Teachings.pricing');
  const router = useRouter();

  const [isAnnual, setIsAnnual] = useState(true);
  const [intensity, setIntensity] = useState<'seeker' | 'dedicated' | 'scholarly'>('seeker');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const planDetails = {
    seeker: {
      initiate: { price: 24, label: '2 Hours / Week', sessions: 'Self-paced study material' },
      scholar: { price: 64, label: '2 Hours / Week', sessions: 'Monthly 1-on-1 session' },
      master: { price: 159, label: '2 Hours / Week', sessions: 'Weekly 1-on-1 mentorship' },
    },
    dedicated: {
      initiate: { price: 39, label: '4 Hours / Week', sessions: 'Self-paced study material' },
      scholar: { price: 99, label: '4 Hours / Week', sessions: 'Weekly 1-on-1 review' },
      master: { price: 249, label: '4 Hours / Week', sessions: '2x Weekly 1-on-1 mentorship' },
    },
    scholarly: {
      initiate: { price: 69, label: '8 Hours / Week', sessions: 'Self-paced study material' },
      scholar: { price: 189, label: '8 Hours / Week', sessions: '2x Weekly 1-on-1 review' },
      master: { price: 459, label: '8 Hours / Week', sessions: 'Daily scholarly guidance access' },
    },
  };

  const getPrice = (tierId: 'initiate' | 'scholar' | 'master') => {
    if (isAnnual) return planDetails[intensity][tierId].price;

    if (tierId === 'initiate') {
      return intensity === 'seeker' ? 29 : intensity === 'dedicated' ? 49 : 89;
    }

    if (tierId === 'scholar') {
      return intensity === 'seeker' ? 79 : intensity === 'dedicated' ? 124 : 239;
    }

    return intensity === 'seeker' ? 199 : intensity === 'dedicated' ? 299 : 549;
  };

  const tiers = [
    {
      id: 'initiate' as const,
      features: ['library', 'forums', 'qa'],
      isFeatured: false,
    },
    {
      id: 'scholar' as const,
      features: ['library', 'forums', 'qa', 'seminars', 'mentorship', 'manuscripts'],
      isFeatured: true,
    },
    {
      id: 'master' as const,
      features: ['library', 'forums', 'qa', 'seminars', 'mentorship', 'manuscripts', 'archive', 'publishing'],
      isFeatured: false,
    },
  ];

  const faqs = [
    {
      q: 'Can I switch between plans or intensities anytime?',
      a: 'Absolutely. You can upgrade, downgrade, or adjust your weekly learning intensity from your student dashboard.',
    },
    {
      q: 'What does the 1-on-1 mentorship entail?',
      a: 'Mentorship sessions are scheduled with certified scholars for Tajweed corrections, fiqh concepts, progress checking, and guidance.',
    },
    {
      q: 'Is there a free trial for packages?',
      a: 'Yes, we provide a 7-day free trial on all learning packages.',
    },
    {
      q: 'Are certificates or Ijazah awarded?',
      a: 'Yes, students who complete study modules and pass assessments can receive certificates and Ijazah.',
    },
  ];

  const comparisonRows = [
    { name: 'library', access: ['Limited Access', 'Full Access', 'Full Access + Priority Updates'] },
    { name: 'seminars', access: ['No Access', 'Attend All Seminars', 'Attend All + Exclusive Q&A'] },
    { name: 'mentorship', access: ['No Mentorship', '1-on-1 Review Sessions', 'Direct Master Scholar Mentorship'] },
    { name: 'manuscripts', access: ['No Access', 'View Digital Archive', 'Digital Archive + Print Request'] },
    { name: 'archive', access: ['No Access', 'No Access', 'Full Research Access'] },
    { name: 'publishing', access: ['No Access', 'No Access', 'Academic Guidance & Review'] },
  ];

  const goToCheckout = (tierId: 'initiate' | 'scholar' | 'master') => {
    router.push(
      `/checkout?tier=${tierId}&billing=${isAnnual ? 'annual' : 'monthly'}&intensity=${intensity}&price=${getPrice(tierId)}`
    );
  };

  return (
    <div className="bg-primary min-h-screen pt-12 relative overflow-hidden selection:bg-accent/30 selection:text-white">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[180px] pointer-events-none" />

      <IslamicPattern className="inset-0 w-full h-full opacity-[0.03]" />

      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 md:pt-28 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn direction="down" duration={0.8}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-accent/20 to-accent/5 border border-accent/30 backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-accent">
                Sacred Knowledge & Learning Plans
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              {t('hero.title')}
            </h1>

            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-accent to-accent" />
              <span className="material-symbols-outlined text-accent text-sm">star</span>
              <div className="w-16 h-[1px] bg-gradient-to-r from-accent via-accent to-transparent" />
            </div>

            <p className="font-sans text-base sm:text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl mx-auto px-4">
              {t('hero.subtitle')}
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="relative py-8 z-20">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <AnimateIn duration={0.6}>
            <div className="bg-[#151515]/60 backdrop-blur-xl border border-accent/10 rounded-2xl p-6 shadow-xl w-full max-w-2xl flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-white/40">
                  Select Billing Interval
                </span>

                <div className="flex items-center gap-4 p-1.5 bg-[#0D0D0D]/90 rounded-full border border-accent/15">
                  <button
                    type="button"
                    onClick={() => setIsAnnual(false)}
                    className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition ${
                      !isAnnual
                        ? 'bg-gradient-to-r from-accent to-accent-hover text-white shadow-md'
                        : 'text-white/50 hover:text-white'
                    }`}
                  >
                    {t('toggle.monthly')}
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsAnnual(true)}
                    className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition ${
                      isAnnual
                        ? 'bg-gradient-to-r from-accent to-accent-hover text-white shadow-md'
                        : 'text-white/50 hover:text-white'
                    }`}
                  >
                    {t('toggle.annual')} <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded">-20%</span>
                  </button>
                </div>
              </div>

              <div className="w-full flex flex-col items-center gap-3 border-t border-accent/10 pt-5">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-white/40">
                  Select Weekly Intensity
                </span>

                <div className="grid grid-cols-3 gap-2 w-full bg-[#0D0D0D]/80 p-1 rounded-xl border border-accent/10">
                  {(['seeker', 'dedicated', 'scholarly'] as const).map((mode) => {
                    const label =
                      mode === 'seeker'
                        ? 'Seeker 2h'
                        : mode === 'dedicated'
                          ? 'Dedicated 4h'
                          : 'Scholarly 8h';

                    return (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setIntensity(mode)}
                        className={`py-2 px-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-lg transition ${
                          intensity === mode
                            ? 'bg-accent/15 border border-accent/40 text-accent'
                            : 'text-white/40 border border-transparent hover:text-white/70'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 md:py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] opacity-[0.03] z-0 pointer-events-none">
            <IslamicStar className="w-full h-full text-accent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative z-10 max-w-5xl lg:max-w-none mx-auto">
            {tiers.map((tier, idx) => {
              const price = getPrice(tier.id);
              const details = planDetails[intensity][tier.id];
              const isPopular = tier.isFeatured;

              return (
                <AnimateIn key={tier.id} delay={idx * 0.15}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`flex flex-col h-full rounded-3xl relative overflow-hidden transition-all duration-500 ${
                      isPopular
                        ? 'border border-accent/50 shadow-[0_0_35px_rgba(212,175,55,0.15)] bg-gradient-to-b from-[#181818]/90 via-[#1C1C1C]/70 to-[#0F0F0F]/90'
                        : 'border border-accent/15 shadow-lg bg-gradient-to-b from-[#121212]/85 to-[#0A0A0A]/95 hover:border-accent/35'
                    }`}
                  >
                    {isPopular && (
                      <>
                        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-accent via-accent-hover to-accent" />
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                          <div className="bg-gradient-to-r from-accent via-[#B8922E] to-accent text-primary px-5 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full">
                            🌟 {t('tiers.scholar.popular')}
                          </div>
                        </div>
                      </>
                    )}

                    <div className="p-8 sm:p-10 flex flex-col flex-grow relative z-10">
                      <div className="mb-6 pb-6 border-b border-accent/10">
                        <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-accent block mb-2">
                          {tier.id === 'initiate'
                            ? 'Foundational Track'
                            : tier.id === 'scholar'
                              ? 'Scholarly Track'
                              : 'Mastery Track'}
                        </span>

                        <h2 className="font-display text-2xl sm:text-3xl text-white mb-4">
                          {t(`tiers.${tier.id}.name`)}
                        </h2>

                        <div className="flex items-baseline gap-1 mb-3">
                          <span className="text-xl text-accent/80 font-bold">$</span>
                          <span className="font-display text-5xl sm:text-6xl text-accent font-bold">{price}</span>
                          <span className="text-xs text-white/50 ml-1">{isAnnual ? '/ yr' : '/ mo'}</span>
                        </div>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/5 mb-4 text-white/70 text-xs">
                          <span className="material-symbols-outlined text-accent text-xs">schedule</span>
                          <span>{details.label}</span>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <span className="text-white/50 text-[10px]">{details.sessions}</span>
                        </div>

                        <p className="font-sans text-sm text-white/60 leading-relaxed min-h-[48px]">
                          {t(`tiers.${tier.id}.desc`)}
                        </p>
                      </div>

                      <div className="flex-grow mb-8">
                        <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-white/40 mb-4">
                          Included Features
                        </p>

                        <ul className="space-y-3.5">
                          {tier.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3 text-white/80">
                              <span className="material-symbols-outlined text-accent text-base mt-0.5">
                                check_circle
                              </span>
                              <span className="font-sans text-xs sm:text-sm text-white/75">
                                {t(`features.${feature}`)}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        type="button"
                        onClick={() => goToCheckout(tier.id)}
                        className={`w-full py-4 px-6 font-sans text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer shadow-md hover:-translate-y-0.5 ${
                          isPopular
                            ? 'bg-gradient-to-r from-accent to-[#B8922E] text-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] border border-accent/20'
                            : 'border border-accent/30 text-accent bg-transparent hover:bg-accent hover:text-primary hover:border-transparent'
                        }`}
                      >
                        {t(`tiers.${tier.id}.cta`)}
                      </button>
                    </div>
                  </motion.div>
                </AnimateIn>
              );
            })}
          </div>

          <div className="text-center mt-8 text-xs text-white/45 font-sans">
            * Registration fees support classical teachers and system maintenance.
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#0D0D0D]/60 via-[#121212]/90 to-[#0D0D0D]/60 z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <AnimateIn>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                {t('comparison.title')}
              </h2>
              <p className="font-sans text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
                {t('comparison.subtitle')}
              </p>
            </AnimateIn>
          </div>

          <div className="hidden md:block overflow-hidden rounded-3xl border border-accent/15 bg-[#151515]/40 backdrop-blur-xl shadow-2xl">
            <table className="min-w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-accent/15 bg-gradient-to-r from-accent/10 to-accent/2">
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-accent-hover">
                    {t('comparison.feature')}
                  </th>
                  {tiers.map((tier) => (
                    <th key={tier.id} className="p-6 text-center">
                      <span className="font-display text-sm uppercase tracking-wider text-white block">
                        {t(`tiers.${tier.id}.name`)}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.name} className="border-b border-accent/5 hover:bg-accent/5 transition">
                    <td className="p-6 text-sm font-semibold text-white/80">
                      {t(`features.${row.name}`)}
                    </td>

                    {row.access.map((val, colIdx) => (
                      <td key={colIdx} className="p-6 text-center">
                        {val.includes('No') ? (
                          <span className="material-symbols-outlined text-white/10 text-lg">circle</span>
                        ) : (
                          <div className="flex flex-col items-center justify-center">
                            <span className="material-symbols-outlined text-accent text-lg mb-0.5">
                              check_circle
                            </span>
                            <span className="text-[10px] sm:text-xs text-white/60 max-w-[150px] leading-tight">
                              {val}
                            </span>
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 gap-6 md:hidden">
            {comparisonRows.map((row) => (
              <div key={row.name} className="rounded-2xl border border-accent/10 bg-[#121212]/80 p-5">
                <h3 className="text-sm font-bold text-accent mb-4 border-b border-accent/10 pb-2">
                  {t(`features.${row.name}`)}
                </h3>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  {tiers.map((tier, colIdx) => {
                    const status = row.access[colIdx];
                    const isNo = status.includes('No');

                    return (
                      <div key={tier.id} className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-white/[0.02] border border-white/5">
                        <span className="font-display text-[9px] uppercase tracking-wider text-white/40">
                          {t(`tiers.${tier.id}.name`)}
                        </span>

                        {isNo ? (
                          <span className="material-symbols-outlined text-white/10 text-sm">cancel</span>
                        ) : (
                          <>
                            <span className="material-symbols-outlined text-accent text-sm">
                              check_circle
                            </span>
                            <span className="text-[9px] text-white/70 leading-tight">{status}</span>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 md:py-24 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16">
            <AnimateIn>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 text-accent mb-4">
                <span className="material-symbols-outlined text-2xl">help_outline</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                Frequently Asked Questions
              </h2>
            </AnimateIn>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;

              return (
                <AnimateIn key={idx} delay={idx * 0.1}>
                  <div
                    className={`rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? 'border-accent/40 bg-[#161616]/80'
                        : 'border-accent/15 bg-[#121212]/60 hover:border-accent/30'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      className="w-full p-6 sm:p-7 flex items-center justify-between text-left cursor-pointer group"
                    >
                      <h3 className="font-display text-base sm:text-lg text-white group-hover:text-accent">
                        {faq.q}
                      </h3>

                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="material-symbols-outlined text-accent text-xl ml-4"
                      >
                        expand_more
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-accent/5 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#0D0D0D]/60 via-[#101010]/85 to-[#0D0D0D]/60 z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: 'verified_user',
                title: 'Authentic Lineage',
                desc: 'Verified teachings from classical Islamic tradition.',
              },
              {
                icon: 'swap_horiz',
                title: 'Flexible Transfers',
                desc: 'Change hours, freeze packages, or adjust timings.',
              },
              {
                icon: 'support_agent',
                title: 'Advisor Help',
                desc: 'Get help with curriculum and scheduling.',
              },
              {
                icon: 'paid',
                title: '30-Day Refund',
                desc: 'Refund available on unused class sessions.',
              },
            ].map((benefit, idx) => (
              <AnimateIn key={idx} delay={idx * 0.12}>
                <div className="group flex gap-5 p-7 rounded-2xl border border-accent/15 bg-gradient-to-br from-[#151515]/75 to-[#0F0F0F]/85 hover:border-accent/40 transition">
                  <div className="w-11 h-11 bg-accent/10 border border-accent/25 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-accent text-lg">
                      {benefit.icon}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-base text-white mb-1.5 group-hover:text-accent">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 md:py-24 z-20">
        <div className="max-w-4xl mx-auto px-4 relative">
          <AnimateIn>
            <ArchContainer
              variant="top-only"
              className="bg-gradient-to-b from-[#181818]/90 via-[#1C1C1C]/75 to-[#0E0E0E]/95 border-t border-x border-accent/25 shadow-2xl relative overflow-hidden"
            >
              <div className="py-16 px-8 sm:px-12 md:px-16 text-center relative z-10 flex flex-col items-center">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-snug">
                  Ready to Begin Your Islamic Learning?
                </h2>

                <p className="font-sans text-white/70 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
                  Join thousands of dedicated students studying Quran, Fiqh, Aqidah, and Arabic online.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => router.push(`/register?intensity=${intensity}`)}
                    className="w-full sm:w-auto shadow-xl cursor-pointer hover:shadow-accent/40"
                  >
                    Start 7-Day Free Trial
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => router.push('/contact')}
                    className="w-full sm:w-auto cursor-pointer"
                  >
                    Schedule Advisor Call
                  </Button>
                </div>

                <span className="font-sans text-[10px] text-white/40 uppercase tracking-widest mt-6 block">
                  No Credit Card Required • Cancel Anytime
                </span>
              </div>
            </ArchContainer>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}