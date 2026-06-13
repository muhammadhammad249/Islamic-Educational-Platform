'use client';

import React, { useState } from 'react';
import { Link } from '@/navigation';
import AnimateIn from '@/components/ui/AnimateIn';

export default function SeerahPage() {
  const events = [
    { year: '570 CE', title: 'The Year of the Elephant', desc: 'Birth of the Prophet Muhammad ﷺ in Makkah.' },
    { year: '610 CE', title: 'The First Revelation', desc: 'Angel Jibril visits the Prophet ﷺ in Cave Hira.' },
    { year: '622 CE', title: 'The Hijrah', desc: 'Migration from Makkah to Madinah, marking the Islamic calendar.' },
    { year: '632 CE', title: 'The Farewell Pilgrimage', desc: 'Completion of the message and passing of the Prophet ﷺ.' },
  ];

  const [active, setActive] = useState(events[0]);

  return (
    <div className="bg-primary min-h-screen text-white pt-24">
      <section className="py-20 px-4 text-center bg-gradient-to-b from-accent/10 to-transparent">
        <AnimateIn direction="down">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">
            The Best of Creation
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl mb-6">
            Seerah of the Prophet ﷺ
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto">
            Studying the life, character, and mission of the Final Messenger of Allah.
          </p>
        </AnimateIn>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/teachings" className="px-5 py-3 rounded-full border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition">
            Back to Teachings
          </Link>
          <Link href="/teachings/manners" className="px-5 py-3 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-widest">
            Prophetic Manners
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-4">
          {events.map((event) => (
            <button
              key={event.title}
              type="button"
              onClick={() => setActive(event)}
              className={`w-full p-5 rounded-2xl border text-left transition ${
                active.title === event.title
                  ? 'bg-accent text-primary border-accent'
                  : 'bg-white/[0.03] border-accent/15 hover:border-accent/50'
              }`}
            >
              <p className="text-xs uppercase tracking-widest opacity-70 mb-1">{event.year}</p>
              <h3 className="font-display text-xl">{event.title}</h3>
            </button>
          ))}
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-white/[0.06] to-black/30 p-8 sm:p-12 sticky top-28">
            <p className="text-accent text-sm uppercase tracking-widest font-bold mb-4">{active.year}</p>
            <h2 className="font-display text-4xl mb-6">{active.title}</h2>
            <p className="text-white/70 leading-relaxed">{active.desc}</p>
          </div>
        </div>
      </section>
    </div>
  );
}