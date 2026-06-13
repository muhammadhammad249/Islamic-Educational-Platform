'use client';

import React, { useState } from 'react';
import { Link } from '@/navigation';
import AnimateIn from '@/components/ui/AnimateIn';

export default function TajweedTeachingPage() {
  const rules = [
    {
      title: 'Makharij',
      desc: 'The points of exit for letters from the mouth, throat, lips, and tongue.',
      icon: 'record_voice_over',
    },
    {
      title: 'Sifat',
      desc: 'The unique characteristics and qualities of each Arabic letter.',
      icon: 'graphic_eq',
    },
    {
      title: 'Ahkam',
      desc: 'Rules governing letter interactions such as Noon Sakinah, Meem Sakinah, and Madd.',
      icon: 'rule',
    },
  ];

  const [active, setActive] = useState(rules[0]);

  return (
    <div className="bg-primary min-h-screen text-white pt-24">
      <section className="py-20 px-4 text-center bg-gradient-to-b from-accent/10 to-transparent">
        <AnimateIn direction="down">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">
            Art of Recitation
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl mb-6">
            Basic Tajweed Rules
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto">
            Preserving the beauty and correctness of Quranic recitation.
          </p>
        </AnimateIn>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/teachings/quran-intro" className="px-5 py-3 rounded-full border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition">
            Quran Intro
          </Link>
          <Link href="/teachers" className="px-5 py-3 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-widest">
            Find Quran Teacher
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimateIn>
          <div className="rounded-3xl border border-accent/20 bg-white/[0.04] p-8 sm:p-12 text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl mb-5">
              What is Tajweed?
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">
              Tajweed means to beautify or perfect. In Quran recitation, it means
              giving every letter its proper right and pronunciation.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {rules.map((rule) => (
              <button
                key={rule.title}
                type="button"
                onClick={() => setActive(rule)}
                className={`p-6 rounded-2xl border text-left transition ${
                  active.title === rule.title
                    ? 'bg-accent text-primary border-accent'
                    : 'bg-white/[0.03] border-accent/15 hover:border-accent/50'
                }`}
              >
                <span className="material-symbols-outlined text-3xl mb-4 block">{rule.icon}</span>
                <h3 className="font-display text-2xl">{rule.title}</h3>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-white/[0.06] to-black/30 p-8 sm:p-12 sticky top-28">
              <span className="material-symbols-outlined text-6xl text-accent mb-6 block">
                {active.icon}
              </span>
              <h2 className="font-display text-4xl mb-6">{active.title}</h2>
              <p className="text-white/70 leading-relaxed">{active.desc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}