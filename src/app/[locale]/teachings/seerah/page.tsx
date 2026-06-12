'use client';

import React from 'react';
import AnimateIn from '@/components/ui/AnimateIn';

export default function SeerahPage() {
  const events = [
    { year: '570 CE', title: 'The Year of the Elephant', desc: 'Birth of the Prophet Muhammad ﷺ in Makkah.' },
    { year: '610 CE', title: 'The First Revelation', desc: 'Angel Gabriel visits the Prophet in Cave Hira.' },
    { year: '622 CE', title: 'The Hijrah', desc: 'Migration from Makkah to Madinah, marking the Islamic calendar.' },
    { year: '632 CE', title: 'The Farewell Pilgrimage', desc: 'The completion of the message and passing of the Prophet ﷺ.' },
  ];

  return (
    <div className="bg-background min-h-screen pt-24">
      <section className="relative py-24 px-8 bg-primary text-white text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimateIn direction="down">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">The Best of Creation</span>
            <h1 className="font-display text-5xl md:text-7xl mb-8">Seerah of the Prophet ﷺ</h1>
            <p className="font-sans text-lg text-white/70 leading-relaxed">
              Studying the life, character, and mission of the Final Messenger of Allah.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-24 px-8 max-w-5xl mx-auto">
        <div className="relative space-y-16">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent/20 -translate-x-1/2 hidden md:block"></div>
          
          {events.map((event, index) => (
            <AnimateIn key={event.title} delay={0.1 * index}>
              <div className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 text-center md:text-right">
                   <div className="font-display text-accent text-lg mb-2">{event.year}</div>
                   <h3 className="font-display text-2xl text-primary mb-4">{event.title}</h3>
                   <p className="font-sans text-sm text-primary/60 leading-relaxed">{event.desc}</p>
                </div>
                <div className="w-4 h-4 bg-accent rounded-full z-10 hidden md:block"></div>
                <div className="flex-1"></div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>
    </div>
  );
}
