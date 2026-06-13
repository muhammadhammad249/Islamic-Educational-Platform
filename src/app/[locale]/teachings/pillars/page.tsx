'use client';

import React, { useState } from 'react';
import { Link } from '@/navigation';
import AnimateIn from '@/components/ui/AnimateIn';

export default function PillarsPage() {
  const pillars = [
    {
      title: 'Shahada',
      label: 'Faith',
      icon: 'fingerprint',
      desc: 'The testimony that there is no deity worthy of worship except Allah and Muhammad ﷺ is His Messenger.',
    },
    {
      title: 'Salah',
      label: 'Prayer',
      icon: 'mosque',
      desc: 'The five daily prayers connect the believer with Allah throughout the day.',
      href: '/teachings/salah',
    },
    {
      title: 'Zakat',
      label: 'Charity',
      icon: 'volunteer_activism',
      desc: 'Purifying wealth by giving to those in need according to Islamic guidance.',
    },
    {
      title: 'Sawm',
      label: 'Fasting',
      icon: 'wb_twilight',
      desc: 'Fasting in Ramadan teaches discipline, sincerity, patience, and taqwa.',
    },
    {
      title: 'Hajj',
      label: 'Pilgrimage',
      icon: 'explore',
      desc: 'The pilgrimage to Makkah for those who are able physically and financially.',
    },
  ];

  const [active, setActive] = useState(pillars[0]);

  return (
    <div className="bg-primary min-h-screen text-white pt-24">
      <section className="py-20 px-4 text-center bg-gradient-to-b from-accent/10 to-transparent">
        <AnimateIn direction="down">
          <span className="font-arabic-display text-3xl text-accent block mb-4" dir="rtl">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl mb-6">
            Five Pillars of Islam
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto">
            The foundation of Muslim worship, identity, and practice.
          </p>
        </AnimateIn>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/teachings" className="px-5 py-3 rounded-full border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition">
            Back to Teachings
          </Link>
          <Link href="/teachings/iman" className="px-5 py-3 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-widest">
            Six Pillars of Iman
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((pillar) => (
            <button
              key={pillar.title}
              type="button"
              onClick={() => setActive(pillar)}
              className={`p-6 rounded-2xl border text-left transition ${
                active.title === pillar.title
                  ? 'bg-accent text-primary border-accent'
                  : 'bg-white/[0.03] border-accent/15 hover:border-accent/50'
              }`}
            >
              <span className="material-symbols-outlined text-3xl mb-4 block">
                {pillar.icon}
              </span>
              <h3 className="font-display text-2xl">{pillar.title}</h3>
              <p className="text-xs uppercase tracking-widest opacity-70 mt-1">{pillar.label}</p>
            </button>
          ))}
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-white/[0.06] to-black/30 p-8 sm:p-12 sticky top-28">
            <span className="material-symbols-outlined text-6xl text-accent mb-6 block">
              {active.icon}
            </span>
            <p className="text-accent text-xs uppercase tracking-widest font-bold mb-3">
              {active.label}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl mb-6">{active.title}</h2>
            <p className="text-white/70 leading-relaxed mb-8">{active.desc}</p>

            {active.href ? (
              <Link href={active.href} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-widest">
                Open Detail
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            ) : (
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition">
                Ask Teacher
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}