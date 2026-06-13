'use client';

import React, { useState } from 'react';
import { Link } from '@/navigation';
import AnimateIn from '@/components/ui/AnimateIn';

export default function MannersPage() {
  const traits = [
    {
      title: 'Honesty (Sidq)',
      desc: 'Speaking the truth and being truthful in actions, intentions, and promises.',
      icon: 'verified',
    },
    {
      title: 'Patience (Sabr)',
      desc: 'Endurance and perseverance during trials, worship, and avoiding sins.',
      icon: 'hourglass_top',
    },
    {
      title: 'Humility (Tawadhu)',
      desc: 'Rejecting arrogance and recognizing that all honor comes from Allah.',
      icon: 'spa',
    },
    {
      title: 'Generosity (Karam)',
      desc: 'Giving freely from what Allah has provided and helping others sincerely.',
      icon: 'volunteer_activism',
    },
  ];

  const [active, setActive] = useState(traits[0]);

  return (
    <div className="bg-primary min-h-screen text-white pt-24">
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-accent/10 to-transparent">
        <AnimateIn direction="down">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">
            Noble Character
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl mb-6">
            Islamic Manners & Adab
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-sm sm:text-lg">
            Refining the soul and interactions with others through prophetic character.
          </p>
        </AnimateIn>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/teachings" className="px-5 py-3 rounded-full border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition">
            Back to Teachings
          </Link>
          <Link href="/teachers" className="px-5 py-3 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-widest">
            Learn with Teacher
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {traits.map((trait) => (
            <button
              key={trait.title}
              onClick={() => setActive(trait)}
              className={`p-6 rounded-2xl border text-left transition ${
                active.title === trait.title
                  ? 'bg-accent text-primary border-accent'
                  : 'bg-white/[0.03] border-accent/15 hover:border-accent/50'
              }`}
            >
              <span className="material-symbols-outlined text-3xl mb-4 block">{trait.icon}</span>
              <h3 className="font-display text-xl">{trait.title}</h3>
            </button>
          ))}
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-white/[0.06] to-black/30 p-8 sm:p-12 sticky top-28">
            <span className="material-symbols-outlined text-5xl text-accent mb-6 block">
              {active.icon}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl mb-5">{active.title}</h2>
            <p className="text-white/70 text-sm sm:text-lg leading-relaxed">{active.desc}</p>
          </div>
        </div>
      </section>
    </div>
  );
}