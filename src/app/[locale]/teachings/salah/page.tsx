'use client';

import React from 'react';
import AnimateIn from '@/components/ui/AnimateIn';

export default function SalahPage() {
  const steps = [
    { title: 'Takbir', desc: 'Starting the prayer with Allahu Akbar.' },
    { title: 'Qiyam', desc: 'Standing and reciting the Quran.' },
    { title: 'Ruku', desc: 'Bowing with humility before Allah.' },
    { title: 'Sujud', desc: 'Prostration, the closest a servant is to Allah.' },
  ];

  return (
    <div className="bg-background min-h-screen pt-24">
      <section className="relative py-24 px-8 bg-primary text-white text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimateIn direction="down">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">The Pillar of Worship</span>
            <h1 className="font-display text-5xl md:text-7xl mb-8">Salah Guide</h1>
            <p className="font-sans text-lg text-white/70 leading-relaxed">
              A comprehensive guide to performing the five daily prayers.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimateIn key={step.title} delay={0.1 * index}>
              <div className="text-center p-8 bg-background-warm border border-accent/5 hover:border-accent/30 transition-all group">
                <div className="text-6xl font-display text-accent/10 group-hover:text-accent/30 transition-colors mb-4">
                  0{index + 1}
                </div>
                <h3 className="font-display text-2xl text-primary mb-4">{step.title}</h3>
                <p className="font-sans text-sm text-primary/60 leading-relaxed">{step.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>
    </div>
  );
}
