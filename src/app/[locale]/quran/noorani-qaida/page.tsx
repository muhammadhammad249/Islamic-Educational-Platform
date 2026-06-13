'use client';

import React from 'react';
import { Link } from '@/navigation';
import AnimateIn from '@/components/ui/AnimateIn';

export default function NooraniQaidaPage() {
  const lessons = [
    {
      title: 'Makharij',
      desc: 'Learn correct Arabic letter pronunciation from proper articulation points.',
      icon: 'record_voice_over',
    },
    {
      title: 'Short Vowels',
      desc: 'Understand Fatha, Kasra, Dammah, and basic Quranic reading signs.',
      icon: 'text_fields',
    },
    {
      title: 'Tanween',
      desc: 'Practice double vowel sounds and improve reading accuracy step by step.',
      icon: 'format_color_text',
    },
  ];

  return (
    <div className="bg-primary min-h-screen text-white pt-16">
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-primary via-dark-section to-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-dark-section/95" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="down">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold block mb-4">
              Foundation Level
            </span>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl mb-6">
              Noorani Qaida
            </h1>

            <p className="text-white/75 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              The essential first step for beginners to master Arabic
              pronunciation, letters, vowels, and Quran reading.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/teachers"
                className="px-8 py-4 rounded-full bg-accent text-primary font-bold text-xs uppercase tracking-widest hover:opacity-90 transition"
              >
                Find Quran Teacher
              </Link>

              <Link
                href="/quran/nazra"
                className="px-8 py-4 rounded-full border border-accent text-accent font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-primary transition"
              >
                Next Level Nazra
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-white/[0.06] to-black/30 p-8 sm:p-12 mb-12">
              <span className="material-symbols-outlined text-accent text-6xl mb-6 block">
                menu_book
              </span>

              <h2 className="font-display text-3xl sm:text-5xl mb-6">
                Course Overview
              </h2>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-4xl">
                Noorani Qaida is a beginner-friendly curriculum designed to
                teach Arabic letters, pronunciation, joining letters, vowels,
                and early Quran reading skills. It is ideal for children and
                adults starting their Quran journey.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lessons.map((lesson, index) => (
              <AnimateIn key={lesson.title} delay={index * 0.1}>
                <div className="h-full rounded-3xl border border-accent/20 bg-white/[0.03] p-8 hover:border-accent/50 hover:-translate-y-2 transition-all duration-300">
                  <div className="text-accent font-display text-4xl mb-5">
                    0{index + 1}
                  </div>

                  <span className="material-symbols-outlined text-accent text-5xl mb-5 block">
                    {lesson.icon}
                  </span>

                  <h3 className="font-display text-2xl mb-4">
                    {lesson.title}
                  </h3>

                  <p className="text-white/65 text-sm leading-relaxed">
                    {lesson.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.35}>
            <div className="mt-16 rounded-3xl border border-accent/20 bg-accent/10 p-8 sm:p-12 text-center">
              <h2 className="font-display text-3xl sm:text-4xl mb-5">
                Start From the Basics
              </h2>

              <p className="text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
                Build a strong Quran reading foundation before moving to Nazra
                and Hifz. Our teachers guide every student patiently from the
                first Arabic letter.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-accent text-primary font-bold text-xs uppercase tracking-widest"
                >
                  Start Learning
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