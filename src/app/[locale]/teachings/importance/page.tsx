'use client';

import React, { useState } from 'react';
import { Link } from '@/navigation';
import AnimateIn from '@/components/ui/AnimateIn';

export default function ImportancePage() {
  const topics = [
    {
      title: 'Spiritual Growth',
      icon: 'auto_stories',
      desc: 'Knowledge removes ignorance and gives the believer certainty, humility, and direction.',
    },
    {
      title: 'Correct Worship',
      icon: 'mosque',
      desc: 'Islamic education helps Muslims worship Allah correctly according to Quran and Sunnah.',
    },
    {
      title: 'Better Character',
      icon: 'favorite',
      desc: 'Knowledge builds patience, honesty, mercy, discipline, and responsibility.',
    },
    {
      title: 'Community Benefit',
      icon: 'groups',
      desc: 'An educated Muslim can guide family, support society, and serve the Ummah.',
    },
  ];

  const [active, setActive] = useState(topics[0]);

  return (
    <div className="bg-primary min-h-screen text-white pt-24">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimateIn direction="down">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">
              Seeking Knowledge
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl mb-6">
              Importance of Islamic Education
            </h1>
            <p className="text-white/70 text-sm sm:text-lg leading-relaxed">
              Why learning the Deen is an obligation and a source of light for the believer.
            </p>
          </AnimateIn>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/teachings" className="px-5 py-3 rounded-full border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition">
              Back to Teachings
            </Link>
            <Link href="/teachings/quran-intro" className="px-5 py-3 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-widest">
              Study Quran
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimateIn>
          <div className="rounded-3xl border border-accent/20 bg-white/[0.04] p-8 sm:p-12 text-center mb-12">
            <span className="material-symbols-outlined text-5xl text-accent mb-6 block">menu_book</span>
            <h2 className="font-display text-2xl sm:text-4xl mb-6 italic">
              "Seeking knowledge is a duty upon every Muslim."
            </h2>
            <p className="text-white/65 leading-relaxed max-w-3xl mx-auto">
              Knowledge is the foundation of faith and action. It leads to better worship,
              stronger character, and service to humanity.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topics.map((topic) => (
              <button
                key={topic.title}
                onClick={() => setActive(topic)}
                className={`p-6 rounded-2xl border text-left transition ${
                  active.title === topic.title
                    ? 'bg-accent text-primary border-accent'
                    : 'bg-white/[0.03] border-accent/15 hover:border-accent/50'
                }`}
              >
                <span className="material-symbols-outlined text-3xl mb-4 block">{topic.icon}</span>
                <h3 className="font-display text-xl">{topic.title}</h3>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 rounded-3xl border border-accent/20 bg-gradient-to-br from-white/[0.06] to-black/30 p-8 sm:p-12">
            <span className="material-symbols-outlined text-5xl text-accent mb-6 block">
              {active.icon}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl mb-5">{active.title}</h2>
            <p className="text-white/70 leading-relaxed text-sm sm:text-lg">{active.desc}</p>
          </div>
        </div>
      </section>
    </div>
  );
}