'use client';

import React, { useState } from 'react';
import { Link } from '@/navigation';
import AnimateIn from '@/components/ui/AnimateIn';

export default function ImanPage() {
  const pillars = [
    { title: 'Belief in Allah', ar: 'الإيمان بالله', desc: 'Believing in the oneness, lordship, names, and attributes of Allah.' },
    { title: 'Belief in Angels', ar: 'الإيمان بالملائكة', desc: 'Believing that angels are noble servants created by Allah.' },
    { title: 'Belief in Divine Books', ar: 'الإيمان بالكتب', desc: 'Believing in the revealed books sent as guidance.' },
    { title: 'Belief in Prophets', ar: 'الإيمان بالرسل', desc: 'Believing in all prophets sent by Allah.' },
    { title: 'Belief in Day of Judgment', ar: 'الإيمان باليوم الآخر', desc: 'Believing in resurrection, accountability, Paradise, and Hellfire.' },
    { title: 'Belief in Divine Decree', ar: 'الإيمان بالقدر', desc: 'Believing that everything occurs by Allah’s knowledge and wisdom.' },
  ];

  const [active, setActive] = useState(pillars[0]);

  return (
    <div className="bg-primary min-h-screen text-white pt-24">
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-accent/10 to-transparent">
        <AnimateIn direction="down">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">
            Core Foundation
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl mb-6">
            Six Pillars of Iman
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-sm sm:text-lg">
            The internal articles of faith that form the spiritual heart of a Muslim.
          </p>
        </AnimateIn>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/teachings" className="px-5 py-3 rounded-full border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition">
            Back to Teachings
          </Link>
          <Link href="/teachings/pillars" className="px-5 py-3 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-widest">
            Five Pillars
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((pillar) => (
            <button
              key={pillar.title}
              onClick={() => setActive(pillar)}
              className={`p-6 rounded-2xl border text-left transition ${
                active.title === pillar.title
                  ? 'bg-accent text-primary border-accent'
                  : 'bg-white/[0.03] border-accent/15 hover:border-accent/50'
              }`}
            >
              <div className="font-arabic-display text-2xl mb-3 opacity-80">{pillar.ar}</div>
              <h3 className="font-display text-xl">{pillar.title}</h3>
            </button>
          ))}
        </div>

        <div className="lg:col-span-7">
          <AnimateIn>
            <div className="rounded-3xl border border-accent/20 bg-white/[0.04] p-8 sm:p-12 sticky top-28">
              <div className="font-arabic-display text-4xl text-accent mb-6">{active.ar}</div>
              <h2 className="font-display text-3xl sm:text-4xl mb-5">{active.title}</h2>
              <p className="text-white/70 text-sm sm:text-lg leading-relaxed">{active.desc}</p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}