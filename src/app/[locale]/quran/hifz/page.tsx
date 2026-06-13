'use client';

import React from 'react';
import { Link } from '@/navigation';
import AnimateIn from '@/components/ui/AnimateIn';

export default function HifzPage() {
  const stages = [
    {
      title: 'New Lesson',
      desc: 'Memorizing new verses daily with teacher supervision.',
      icon: 'menu_book',
    },
    {
      title: 'Recent Revision',
      desc: 'Reviewing lessons from the previous 7-10 days.',
      icon: 'refresh',
    },
    {
      title: 'Old Revision',
      desc: 'Strengthening previously memorized portions for long-term retention.',
      icon: 'history',
    },
  ];

  return (
    <div className="bg-primary min-h-screen text-white pt-16">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-primary via-dark-section to-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-dark-section/95" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="down">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold block mb-4">
              Advanced Level
            </span>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl mb-6">
              Hifz-ul-Quran
            </h1>

            <p className="text-white/75 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Preserving the Word of Allah in the heart through structured
              memorization, revision, and one-to-one teacher support.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/teachers"
                className="px-8 py-4 rounded-full bg-accent text-primary font-bold text-xs uppercase tracking-widest hover:opacity-90 transition"
              >
                Meet Hafiz Teachers
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-full border border-accent text-accent font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-primary transition"
              >
                Enroll Now
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-5xl mb-6">
                A Lifelong Commitment
              </h2>

              <p className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                Memorizing the Quran is a sacred journey requiring consistency,
                sincerity, discipline, and expert guidance.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <AnimateIn key={stage.title} delay={index * 0.1}>
                <div className="h-full rounded-3xl border border-accent/20 bg-white/[0.03] p-8 text-center hover:border-accent/50 hover:-translate-y-2 transition-all duration-300">
                  <span className="material-symbols-outlined text-accent text-5xl mb-5 block">
                    {stage.icon}
                  </span>

                  <h3 className="font-display text-2xl mb-4">
                    {stage.title}
                  </h3>

                  <p className="text-white/65 text-sm leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Support */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn delay={0.3}>
            <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-white/[0.06] to-black/30 p-8 sm:p-12 text-center">
              <span className="material-symbols-outlined text-accent text-6xl mb-6 block">
                school
              </span>

              <h3 className="font-display text-3xl sm:text-4xl mb-5">
                One-to-One Teacher Support
              </h3>

              <p className="text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Every student is paired with a dedicated Hafiz teacher for
                lesson planning, daily listening sessions, corrections, and
                revision management.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/teachers"
                  className="px-8 py-4 rounded-full bg-accent text-primary font-bold text-xs uppercase tracking-widest"
                >
                  View Teachers
                </Link>

                <Link
                  href="/pricing"
                  className="px-8 py-4 rounded-full border border-accent text-accent font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-primary transition"
                >
                  View Packages
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}