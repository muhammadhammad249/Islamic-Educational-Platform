'use client';

import React, { useState } from 'react';
import { Link } from '@/navigation';
import AnimateIn from '@/components/ui/AnimateIn';

export default function DuasPage() {
  const duas = [
    {
      title: 'Upon Waking Up',
      ar: 'الحَمْدُ للهِ الذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا',
      meaning: 'All praise is for Allah who gave us life after causing us to die.',
    },
    {
      title: 'Before Sleeping',
      ar: 'بِاسْمِكَ اللهمَّ أَمُوتُ وَأَحْيَا',
      meaning: 'In Your name, O Allah, I die and I live.',
    },
    {
      title: 'For Knowledge',
      ar: 'رَبِّ زِدْنِي عِلْمًا',
      meaning: 'My Lord, increase me in knowledge.',
    },
    {
      title: 'Seeking Forgiveness',
      ar: 'أَسْتَغْفِرُ اللهَ وَأَتُوبُ إِلَيْهِ',
      meaning: 'I seek forgiveness from Allah and repent to Him.',
    },
  ];

  const [activeDua, setActiveDua] = useState(duas[0]);

  return (
    <div className="bg-primary min-h-screen text-white pt-24">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimateIn direction="down">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">
              Remembrance of Allah
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl mb-6">
              Duas & Adhkar
            </h1>
            <p className="text-sm sm:text-lg text-white/70 leading-relaxed">
              Essential daily supplications for a life centered around Allah.
            </p>
          </AnimateIn>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/teachings" className="px-5 py-3 rounded-full border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition">
              Back to Teachings
            </Link>
            <Link href="/contact" className="px-5 py-3 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-widest hover:opacity-90 transition">
              Ask a Teacher
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 space-y-4">
          {duas.map((dua) => (
            <button
              key={dua.title}
              onClick={() => setActiveDua(dua)}
              className={`w-full text-left p-5 rounded-2xl border transition ${
                activeDua.title === dua.title
                  ? 'bg-accent text-primary border-accent'
                  : 'bg-white/[0.03] text-white border-accent/15 hover:border-accent/50'
              }`}
            >
              <h3 className="font-display text-xl">{dua.title}</h3>
              <p className="text-xs opacity-70 mt-1">Click to view detail</p>
            </button>
          ))}
        </div>

        <div className="lg:col-span-8">
          <AnimateIn>
            <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-white/[0.06] to-black/30 p-8 sm:p-12 text-center shadow-2xl">
              <h2 className="font-display text-2xl sm:text-3xl text-accent mb-8">
                {activeDua.title}
              </h2>

              <div dir="rtl" className="font-arabic-display text-3xl sm:text-5xl leading-loose mb-8 text-white">
                {activeDua.ar}
              </div>

              <div className="h-px bg-accent/20 my-8" />

              <p className="text-white/70 text-sm sm:text-lg leading-relaxed">
                {activeDua.meaning}
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}