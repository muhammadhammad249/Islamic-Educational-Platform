'use client';

import React from 'react';
import AnimateIn from '@/components/ui/AnimateIn';

export default function TajweedTeacingPage() {
  return (
    <div className="bg-background min-h-screen pt-24">
      <section className="relative py-24 px-8 bg-primary text-white text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimateIn direction="down">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">Art of Recitation</span>
            <h1 className="font-display text-5xl md:text-7xl mb-8">Basic Tajweed Rules</h1>
            <p className="font-sans text-lg text-white/70 leading-relaxed">
              Preserving the beauty and correctness of the Quranic text through proper pronunciation.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-24 px-8 max-w-5xl mx-auto">
        <AnimateIn>
          <div className="bg-white border border-accent/10 p-12 space-y-8">
            <h2 className="font-display text-3xl text-primary text-center">What is Tajweed?</h2>
            <p className="font-sans text-primary/70 text-center max-w-3xl mx-auto leading-relaxed">
              Tajweed literally means "to beautify" or "to excel." In the context of the Quran, it refers to the set of rules governing how the words of Allah should be pronounced, giving every letter its right (Haqq) and its due (Mustahaqq).
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-accent/5">
              {[
                { title: 'Makharij', desc: 'The points of exit for letters in the mouth and throat.' },
                { title: 'Sifat', desc: 'The unique characteristics and qualities of each letter.' },
                { title: 'Ahkam', desc: 'The rules governing letter interactions (Noon, Meem, etc.).' }
              ].map(rule => (
                <div key={rule.title} className="text-center">
                  <h4 className="font-display text-accent text-lg mb-2">{rule.title}</h4>
                  <p className="font-sans text-xs text-primary/50">{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
