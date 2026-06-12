'use client';

import React from 'react';
import AnimateIn from '@/components/ui/AnimateIn';

export default function MannersPage() {
  const traits = [
    { title: 'Honesty (Sidq)', desc: 'Speaking the truth and being truthful in actions.' },
    { title: 'Patience (Sabr)', desc: 'Endurance and perseverance during trials.' },
    { title: 'Humility (Tawadhu)', desc: 'Rejecting arrogance and recognizing the Creator.' },
    { title: 'Generosity (Karam)', desc: 'Giving freely from what Allah has provided.' },
  ];

  return (
    <div className="bg-background min-h-screen pt-24">
      <section className="relative py-24 px-8 bg-primary text-white text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimateIn direction="down">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">Noble Character</span>
            <h1 className="font-display text-5xl md:text-7xl mb-8">Islamic Manners & Adab</h1>
            <p className="font-sans text-lg text-white/70 leading-relaxed">
              Refining the soul and interactions with others through prophetic character.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {traits.map((trait, index) => (
            <AnimateIn key={trait.title} delay={0.1 * index} direction="up">
              <div className="p-12 bg-white border border-accent/10 hover:shadow-2xl transition-all duration-500">
                <h3 className="font-display text-2xl text-primary mb-4">{trait.title}</h3>
                <p className="font-sans text-primary/60 leading-relaxed">{trait.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>
    </div>
  );
}
