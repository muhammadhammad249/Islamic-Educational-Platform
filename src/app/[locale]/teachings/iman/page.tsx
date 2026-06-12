'use client';

import React from 'react';
import AnimateIn from '@/components/ui/AnimateIn';

export default function ImanPage() {
  const pillars = [
    { title: 'Belief in Allah', ar: 'الإيمان بالله' },
    { title: 'Belief in Angels', ar: 'الإيمان بالملائكة' },
    { title: 'Belief in Divine Books', ar: 'الإيمان بالكتب' },
    { title: 'Belief in Prophets', ar: 'الإيمان بالرسل' },
    { title: 'Belief in Day of Judgment', ar: 'الإيمان باليوم الآخر' },
    { title: 'Belief in Divine Decree', ar: 'الإيمان بالقدر' },
  ];

  return (
    <div className="bg-background min-h-screen pt-24">
      <section className="relative py-24 px-8 bg-primary text-white text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimateIn direction="down">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">Core Foundation</span>
            <h1 className="font-display text-5xl md:text-7xl mb-8">Six Pillars of Iman</h1>
            <p className="font-sans text-lg text-white/70 leading-relaxed">
              The internal articles of faith that form the spiritual heart of a Muslim.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <AnimateIn key={pillar.title} delay={0.1 * index}>
              <div className="p-10 bg-white border border-accent/10 hover:border-accent transition-all group h-full flex flex-col justify-between">
                <div>
                  <div className="font-arabic-display text-3xl text-accent mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                    {pillar.ar}
                  </div>
                  <h3 className="font-display text-2xl text-primary mb-4">{pillar.title}</h3>
                </div>
                <div className="w-12 h-0.5 bg-accent/20 group-hover:w-full transition-all duration-500"></div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>
    </div>
  );
}
