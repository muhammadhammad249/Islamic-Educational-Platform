'use client';

import React from 'react';
import AnimateIn from '@/components/ui/AnimateIn';

export default function NooraniQaidaPage() {
  return (
    <div className="bg-background min-h-screen pt-24">
      <section className="relative py-24 px-8 bg-primary text-white text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimateIn direction="down">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">Foundation Level</span>
            <h1 className="font-display text-5xl md:text-7xl mb-8">Noorani Qaida</h1>
            <p className="font-sans text-lg text-white/70 leading-relaxed">
              The essential first step for beginners to master Arabic pronunciation and reading.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-24 px-8 max-w-5xl mx-auto space-y-16">
        <AnimateIn>
           <div className="bg-white border border-accent/10 p-12 space-y-8">
              <h2 className="font-display text-3xl text-primary">Course Overview</h2>
              <p className="font-sans text-primary/70 leading-relaxed">
                Noorani Qaida is a world-renowned curriculum designed to teach the Arabic alphabet and basic pronunciation (Makharij). It is the perfect starting point for children and adults who are beginning their journey with the Quran.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="p-6 bg-background-warm border-l-4 border-accent">
                  <h4 className="font-display text-lg mb-2">Alphabet Mastery</h4>
                  <p className="font-sans text-xs text-primary/50">Learning to recognize and pronounce every Arabic letter correctly.</p>
                </div>
                <div className="p-6 bg-background-warm border-l-4 border-accent">
                  <h4 className="font-display text-lg mb-2">Joining Letters</h4>
                  <p className="font-sans text-xs text-primary/50">Understanding how letters change shape when connected in words.</p>
                </div>
              </div>
           </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="text-center">
            <h2 className="font-display text-3xl text-primary mb-12">What You Will Learn</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {['Makharij', 'Short Vowels', 'Tanween'].map((step, i) => (
                <div key={step} className="p-8 border border-accent/5 hover:border-accent transition-all">
                  <div className="text-accent font-display text-4xl mb-4">0{i+1}</div>
                  <h3 className="font-display text-xl text-primary">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
