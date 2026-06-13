'use client';

import React from 'react';
import AnimateIn from '@/components/ui/AnimateIn';
import { Link } from '@/navigation';

type TeachingItem = {
  title: string;
  desc: string;
  icon: string;
  href: string;
};

export default function TeachingsHubPage() {
 const quranCourses: TeachingItem[] = [
 {
  title: 'Complete Quran Pak',
  desc: 'Read the complete Holy Quran with Arabic text, Urdu translation, English translation, and download options.',
  icon: 'menu_book',
  href: '/teachings/quran',
},
  {
    title: 'Tajweed Rules',
    desc: 'Master Makharij, pronunciation, and recitation rules for beautiful Quran reading.',
    icon: 'record_voice_over',
    href: '/teachings/tajweed',
  },
  {
    title: 'Duas & Adhkar',
    desc: 'Daily supplications, morning and evening adhkar, and authentic Islamic prayers.',
    icon: 'prayer_times',
    href: '/teachings/duas',
  },
];

 const islamicStudies: TeachingItem[] = [
  {
    title: 'Five Pillars of Islam',
    desc: 'Understand Shahadah, Salah, Zakat, Sawm, and Hajj with practical guidance.',
    icon: 'mosque',
    href: '/teachings/pillars',
  },
  {
    title: 'Six Pillars of Iman',
    desc: 'Study the foundations of Islamic faith and core beliefs of every Muslim.',
    icon: 'favorite',
    href: '/teachings/iman',
  },
  {
    title: 'Hadith Collections',
    desc: 'Study authentic Hadith books including Sahih al-Bukhari, Sahih Muslim, Jami at-Tirmidhi, Sunan Abu Dawood, Sunan an-Nasai, Sunan Ibn Majah, Musnad Ahmad, Mishkat al-Masabih, and other authentic collections with Arabic text, Urdu translation, and English translation.',
    icon: 'auto_stories',
    href: '/teachings/Hadith',
  },
  {
    title: 'Importance of Education',
    desc: 'Discover the value of knowledge, learning, and scholarship in Islam.',
    icon: 'school',
    href: '/teachings/importance',
  },
];

 const practicalTeachings: TeachingItem[] = [
  {
    title: 'Salah Guide',
    desc: 'Step-by-step guidance for performing daily prayers correctly and confidently.',
    icon: 'self_improvement',
    href: '/teachings/salah',
  },
  {
    title: 'Seerah',
    desc: 'Explore the life, character, leadership, and teachings of Prophet Muhammad ﷺ.',
    icon: 'history_edu',
    href: '/teachings/seerah',
  },
  {
    title: 'Islamic Manners',
    desc: 'Learn noble character, etiquette, respect, honesty, and everyday Islamic conduct.',
    icon: 'volunteer_activism',
    href: '/teachings/manners',
  },
];

  const allCategories = [
    ...quranCourses,
    ...islamicStudies,
    ...practicalTeachings,
  ];

  const SectionCards = ({
    title,
    subtitle,
    items,
  }: {
    title: string;
    subtitle: string;
    items: TeachingItem[];
  }) => (
    <section className="relative py-20 sm:py-24 bg-gradient-to-b from-primary via-dark-section to-primary overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <AnimateIn>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4 tracking-tight leading-tight">
              {title}
            </h2>

            <p className="font-sans text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
              {subtitle}
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, idx) => (
            <AnimateIn key={item.title} delay={idx * 0.1}>
              <Link
                href={item.href}
                className="group block h-full rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5 p-8 sm:p-10 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 flex items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl">
                    {item.icon}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-accent transition-colors leading-snug tracking-tight">
                  {item.title}
                </h3>

                <p className="font-sans text-sm text-white/70 leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-accent/10">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                    Open Detail
                  </span>

                  <span className="material-symbols-outlined text-accent group-hover:translate-x-1 transition">
                    arrow_forward
                  </span>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="bg-primary min-h-screen pt-16 text-white">
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-primary via-dark-section to-primary">
      
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-dark-section/95" />

        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="down">
            <span className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.28em] text-accent block mb-4">
              Sacred Knowledge
            </span>

            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white mb-6 leading-tight tracking-tight">
              Islamic Teachings
            </h1>

            <div className="flex justify-center gap-3 mb-8">
              
              <div className="w-16 h-1 bg-gradient-to-r from-accent to-transparent rounded-full" />

              <div className="w-16 h-1 bg-gradient-to-l from-accent to-transparent rounded-full" />
            </div>

            <p className="font-sans text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-normal">
              Explore Quran, Iman, Salah, Seerah, manners, duas, and essential
              Islamic knowledge through premium learning resources.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#all-teachings"
                className="font-sans px-8 py-4 rounded-full bg-accent text-primary font-bold text-xs uppercase tracking-[0.18em] hover:opacity-90 transition"
              >
                Explore All Teachings
              </a>

              <Link
                href="/teachers"
                className="font-sans px-8 py-4 rounded-full border border-accent/40 text-accent font-bold text-xs uppercase tracking-[0.18em] hover:bg-accent hover:text-primary transition"
              >
                Find a Teacher
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <SectionCards
        title="Quranic Studies"
        subtitle="Master Quranic reading, understanding, duas, and recitation."
        items={quranCourses}
      />

      <SectionCards
        title="Islamic Studies"
        subtitle="Deepen your understanding of faith, worship, and Islamic education."
        items={islamicStudies}
      />

      <SectionCards
        title="Practical Teachings"
        subtitle="Learn daily Islamic practice, prayer, character, and prophetic guidance."
        items={practicalTeachings}
      />

      <section
        id="all-teachings"
        className="relative py-20 sm:py-24 bg-gradient-to-b from-dark-section via-primary to-dark-section overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimateIn>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4 tracking-tight leading-tight">
                All Teachings
              </h2>

              <p className="font-sans text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-normal">
                Access the complete Islamic knowledge library.
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allCategories.map((cat, index) => (
              <AnimateIn key={cat.href} delay={index * 0.05}>
                <Link
                  href={cat.href}
                  className="group flex items-center gap-5 rounded-2xl border border-accent/15 bg-white/[0.03] p-5 hover:border-accent/50 hover:bg-accent/10 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition">
                    <span className="material-symbols-outlined">
                      {cat.icon}
                    </span>
                  </div>

              <div className="flex-1">
   <h3 className="font-display font-bold text-lg text-white group-hover:text-accent transition leading-snug tracking-tight mb-2">
    {cat.title}
  </h3>

  <p className="font-sans text-sm text-white/65 leading-relaxed">
    {cat.desc}
  </p>
</div>

                  <span className="material-symbols-outlined text-accent group-hover:translate-x-1 transition">
                    arrow_forward
                  </span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-r from-dark-section via-primary to-dark-section">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimateIn>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-5 tracking-tight leading-tight">
              Begin Your Learning Journey Today
            </h2>

            <p className="font-sans text-white/75 mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-normal">
              Study authentic Islamic knowledge, connect with teachers, and grow
              step by step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="font-sans px-8 py-4 bg-accent text-primary font-bold rounded-full hover:opacity-90 transition text-xs uppercase tracking-[0.18em]"
              >
                View Student Packages
              </Link>

              <Link
                href="/contact"
                className="font-sans px-8 py-4 border border-accent text-accent font-bold rounded-full hover:bg-accent hover:text-primary transition text-xs uppercase tracking-[0.18em]"
              >
                Contact Us
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}