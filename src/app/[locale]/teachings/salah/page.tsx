'use client';

import React, { useState } from 'react';
import { Link } from '@/navigation';
import AnimateIn from '@/components/ui/AnimateIn';

export default function SalahPage() {
  const steps = [
    { title: 'Takbir', desc: 'Starting the prayer with Allahu Akbar.', icon: 'front_hand' },
    { title: 'Qiyam', desc: 'Standing and reciting the Quran.', icon: 'menu_book' },
    { title: 'Ruku', desc: 'Bowing with humility before Allah.', icon: 'keyboard_arrow_down' },
    { title: 'Sujud', desc: 'Prostration, the closest a servant is to Allah.', icon: 'self_improvement' },
  ];

  const [active, setActive] = useState(steps[0]);

  return (
    <div className="bg-primary min-h-screen text-white pt-24">
      <section className="py-20 px-4 text-center bg-gradient-to-b from-accent/10 to-transparent">
        <AnimateIn direction="down">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">
            The Pillar of Worship
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl mb-6">
            Salah Guide
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto">
            A practical guide to understanding the structure of prayer.
          </p>
        </AnimateIn>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/teachings/pillars" className="px-5 py-3 rounded-full border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition">
            Back to Pillars
          </Link>
          <Link href="/contact" className="px-5 py-3 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-widest">
            Ask About Prayer
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">
          {steps.map((step, index) => (
            <button
              key={step.title}
              type="button"
              onClick={() => setActive(step)}
              className={`p-6 rounded-2xl border text-center transition ${
                active.title === step.title
                  ? 'bg-accent text-primary border-accent'
                  : 'bg-white/[0.03] border-accent/15 hover:border-accent/50'
              }`}
            >
              <div className="text-4xl font-display opacity-40 mb-3">0{index + 1}</div>
              <span className="material-symbols-outlined text-3xl mb-3 block">{step.icon}</span>
              <h3 className="font-display text-xl">{step.title}</h3>
            </button>
          ))}
        </div>

        <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-white/[0.06] to-black/30 p-8 sm:p-12 text-center">
          <span className="material-symbols-outlined text-6xl text-accent mb-6 block">
            {active.icon}
          </span>
          <h2 className="font-display text-4xl mb-5">{active.title}</h2>
          <p className="text-white/70 text-sm sm:text-lg">{active.desc}</p>
        </div>
      </section>
    </div>
  );
}