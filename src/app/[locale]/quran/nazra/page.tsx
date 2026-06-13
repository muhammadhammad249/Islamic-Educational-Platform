'use client';

import React from 'react';
import { Link } from '@/navigation';
import AnimateIn from '@/components/ui/AnimateIn';

export default function NazraPage() {
  const goals = [
    'Proper Pacing',
    'Emotional Connection',
    'Correct Stops',
    'Tajweed Flow',
  ];

  return (
    <div className="bg-primary min-h-screen text-white pt-16">
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-primary via-dark-section to-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-dark-section/95" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="down">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold block mb-4">
              Intermediate Level
            </span>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl mb-6">
              Nazra Quran
            </h1>

            <p className="text-white/75 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Develop fluency, confidence, and accuracy in reciting the Quran
              with guided Tajweed practice.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/teachers"
                className="px-8 py-4 rounded-full bg-accent text-primary font-bold text-xs uppercase tracking-widest hover:opacity-90 transition"
              >
                Book Quran Teacher
              </Link>

              <Link
                href="/quran/hifz"
                className="px-8 py-4 rounded-full border border-accent text-accent font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-primary transition"
              >
                Continue To Hifz
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <AnimateIn direction="left">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold">
                Fluent Recitation
              </span>

              <h2 className="font-display text-3xl sm:text-5xl">
                Read Quran With Confidence
              </h2>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                Nazra is the practice of reading the Quran by sight. This course
                helps students build smooth recitation, correct pronunciation,
                and natural application of Tajweed rules.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {goals.map((goal) => (
                  <div
                    key={goal}
                    className="rounded-2xl border border-accent/15 bg-white/[0.03] p-5 flex items-center gap-3"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-white/75 text-sm">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn direction="right" delay={0.2}>
            <div className="lg:col-span-5 rounded-3xl border border-accent/20 bg-gradient-to-br from-white/[0.06] to-black/30 p-8 sm:p-10 relative overflow-hidden">
              <div className="font-arabic-display text-7xl text-accent/10 absolute -bottom-5 -right-4 rotate-12">
                القرآن
              </div>

              <span className="material-symbols-outlined text-accent text-5xl mb-6 block">
                record_voice_over
              </span>

              <h3 className="font-display text-3xl mb-5 text-accent">
                Course Goal
              </h3>

              <p className="text-white/65 leading-relaxed mb-8 relative z-10">
                Complete the recitation of the Quran while maintaining accuracy,
                reverence, correct stops, and beautiful flow.
              </p>

              <Link
                href="/contact"
                className="inline-flex px-6 py-3 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-widest relative z-10"
              >
                Start Nazra Course
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}