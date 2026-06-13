'use client';

import React, { useState } from 'react';
import { Link } from '@/navigation';
import AnimateIn from '@/components/ui/AnimateIn';

export default function QuranIntroPage() {
  const topics = [
    {
      title: 'The Word of Allah',
      icon: 'auto_stories',
      desc: 'The Quran is the literal speech of Allah revealed to Prophet Muhammad ﷺ as final guidance.',
    },
    {
      title: 'Structure',
      icon: 'format_list_numbered',
      desc: 'It contains 114 Surahs and is divided into 30 Juz for easy recitation and study.',
    },
    {
      title: 'Themes',
      icon: 'hub',
      desc: 'Core themes include Tawhid, Prophethood, Afterlife, morality, law, and stories of nations.',
    },
    {
      title: 'Preservation',
      icon: 'verified_user',
      desc: 'The Quran has been preserved in its original Arabic through memorization and written transmission.',
    },
  ];

  const [active, setActive] = useState(topics[0]);

  return (
    <div className="bg-primary min-h-screen text-white pt-24">
      <section className="py-20 px-4 text-center bg-gradient-to-b from-accent/10 to-transparent">
        <AnimateIn direction="down">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">
            The Final Revelation
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl mb-6">
            Introduction to the Quran
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto">
            Understanding the miraculous nature, history, and message of the Word of Allah.
          </p>
        </AnimateIn>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/teachings" className="px-5 py-3 rounded-full border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition">
            Back to Teachings
          </Link>
          <Link href="/teachings/tajweed" className="px-5 py-3 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-widest">
            Learn Tajweed
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {topics.map((topic) => (
            <button
              key={topic.title}
              type="button"
              onClick={() => setActive(topic)}
              className={`p-6 rounded-2xl border text-left transition ${
                active.title === topic.title
                  ? 'bg-accent text-primary border-accent'
                  : 'bg-white/[0.03] border-accent/15 hover:border-accent/50'
              }`}
            >
              <span className="material-symbols-outlined text-3xl mb-4 block">
                {topic.icon}
              </span>
              <h3 className="font-display text-xl">{topic.title}</h3>
            </button>
          ))}
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-accent/20 bg-white/[0.04] p-8 sm:p-12 sticky top-28">
            <span className="material-symbols-outlined text-6xl text-accent mb-6 block">
              {active.icon}
            </span>
            <h2 className="font-display text-4xl mb-6">{active.title}</h2>
            <p className="text-white/70 leading-relaxed">{active.desc}</p>
          </div>
        </div>
      </section>
    </div>
  );
}