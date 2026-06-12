'use client';

import React from 'react';
import AnimateIn from '@/components/ui/AnimateIn';

export default function HifzPage() {
  return (
    <div className="bg-background min-h-screen pt-24">
      <section className="relative py-24 px-8 bg-primary text-white text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimateIn direction="down">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">Advanced Level</span>
            <h1 className="font-display text-5xl md:text-7xl mb-8">Hifz-ul-Quran</h1>
            <p className="font-sans text-lg text-white/70 leading-relaxed">
              Preserving the Word of Allah in the heart through guided memorization.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-24 px-8 max-w-5xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-primary mb-6">A Lifelong Commitment</h2>
            <p className="font-sans text-lg text-primary/70 max-w-3xl mx-auto leading-relaxed">
              Memorizing the Quran is a sacred journey that requires dedication, discipline, and sincere intention. Our Hifz program provides the structure and support needed to succeed.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: 'New Lesson', desc: 'Memorizing new verses daily with teacher supervision.' },
             { title: 'Revision (Recent)', desc: 'Reviewing the lessons from the past 7-10 days.' },
             { title: 'Revision (Old)', desc: 'Consolidating previously memorized chapters to ensure permanence.' }
           ].map((step, i) => (
             <AnimateIn key={step.title} delay={0.1 * i}>
               <div className="p-8 bg-white border border-accent/10 hover:border-accent transition-colors text-center h-full">
                 <h3 className="font-display text-xl text-primary mb-4">{step.title}</h3>
                 <p className="font-sans text-sm text-primary/60">{step.desc}</p>
               </div>
             </AnimateIn>
           ))}
        </div>

        <AnimateIn delay={0.4}>
          <div className="mt-24 p-12 bg-background-warm border border-accent/20 text-center">
            <h3 className="font-display text-2xl text-primary mb-4">One-on-One Support</h3>
            <p className="font-sans text-primary/60 max-w-2xl mx-auto">
              Each Hifz student is assigned a dedicated Hafiz teacher who provides personalized guidance, corrections, and encouragement throughout the memorization process.
            </p>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
