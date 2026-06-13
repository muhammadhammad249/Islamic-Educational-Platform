'use client';

import React from 'react';
import { Link } from '@/navigation';
import AnimateIn from '@/components/ui/AnimateIn';

export default function AboutIslamPage() {
  const values = ['Justice', 'Mercy', 'Patience', 'Honesty'];

  return (
    <div className="bg-primary min-h-screen text-white pt-16">
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-primary via-dark-section to-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-dark-section/95" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="down">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">
              The Path of Peace
            </span>

            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl mb-6">
              About Islam
            </h1>

            <p className="text-white/75 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              An introduction to the message, values, and practices of Islam.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/teachings/pillars"
                className="px-8 py-4 rounded-full bg-accent text-primary font-bold text-xs uppercase tracking-widest hover:opacity-90 transition text-center"
              >
                Five Pillars
              </Link>

              <Link
                href="/teachings/quran-intro"
                className="px-8 py-4 rounded-full border border-accent text-accent font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-primary transition text-center"
              >
                Learn Quran
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <AnimateIn>
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold">
                Foundation
              </span>

              <h2 className="font-display text-3xl sm:text-5xl text-white">
                What is Islam?
              </h2>

              <p className="text-white/70 text-sm sm:text-lg leading-relaxed">
                Islam is a monotheistic religion based on the belief in one God
                Allah and the teachings of the Prophet Muhammad ﷺ. It is a
                complete way of life that emphasizes peace, justice, worship,
                character, and service to humanity.
              </p>

              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                The word Islam comes from meanings connected to peace and
                submission. A Muslim seeks peace through sincere submission to
                the will of Allah.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="lg:col-span-5 rounded-3xl border border-accent/20 bg-white/[0.04] p-8 sm:p-10 text-center">
              <div
                className="font-arabic-display text-3xl sm:text-4xl text-accent leading-loose mb-5"
                dir="rtl"
              >
                لَا إِلٰهَ إِلَّا الله مُحَمَّدٌ رَسُولُ الله
              </div>

              <p className="text-xs text-white/50 uppercase tracking-widest leading-relaxed">
                There is no god but Allah, and Muhammad is the messenger of Allah.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gradient-to-b from-dark-section via-primary to-dark-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'The Holy Quran',
              icon: 'menu_book',
              desc: 'The Quran is the word of Allah revealed to Prophet Muhammad ﷺ through Angel Jibril. It guides humanity in faith, morality, law, and spirituality.',
              href: '/teachings/quran-intro',
            },
            {
              title: 'Prophet Muhammad ﷺ',
              icon: 'history_edu',
              desc: 'The final Messenger sent to humanity. His Sunnah and character are a perfect example for Muslims in worship, family, society, and daily life.',
              href: '/teachings/seerah',
            },
          ].map((item) => (
            <AnimateIn key={item.title}>
              <Link
                href={item.href}
                className="group rounded-3xl border border-accent/20 bg-white/[0.03] p-8 sm:p-10 hover:border-accent/50 hover:-translate-y-2 transition-all duration-300 block"
              >
                <span className="material-symbols-outlined text-5xl text-accent mb-6 block">
                  {item.icon}
                </span>

                <h2 className="font-display text-3xl text-white mb-5 group-hover:text-accent transition">
                  {item.title}
                </h2>

                <p className="text-white/65 leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between border-t border-accent/10 pt-5">
                  <span className="text-xs uppercase tracking-widest text-accent font-bold">
                    Open Detail
                  </span>
                  <span className="material-symbols-outlined text-accent group-hover:translate-x-1 transition">
                    arrow_forward
                  </span>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-3xl border border-accent/20 bg-gradient-to-br from-white/[0.06] to-black/30 p-8 sm:p-12 text-center">
          <AnimateIn>
            <h2 className="font-display text-3xl sm:text-5xl mb-6">
              Universal Values
            </h2>

            <p className="text-white/65 leading-relaxed max-w-3xl mx-auto mb-10">
              Islam teaches compassion, honesty, generosity, respect for life,
              pursuit of knowledge, and service to others as forms of worship.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {values.map((value) => (
                <Link
                  key={value}
                  href="/teachings/manners"
                  className="rounded-2xl border border-accent/15 bg-accent/10 p-5 text-accent font-display text-base sm:text-lg uppercase tracking-widest hover:bg-accent hover:text-primary transition"
                >
                  {value}
                </Link>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-dark-section via-primary to-dark-section">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimateIn>
            <h2 className="font-display text-3xl sm:text-4xl text-white mb-5">
              Continue Your Learning Journey
            </h2>

            <p className="text-white/70 mb-8">
              Explore structured Islamic teachings and connect with qualified teachers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/teachings"
                className="px-8 py-4 rounded-full bg-accent text-primary font-bold text-xs uppercase tracking-widest hover:opacity-90 transition text-center"
              >
                Browse Teachings
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-full border border-accent text-accent font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-primary transition text-center"
              >
                Contact Us
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}