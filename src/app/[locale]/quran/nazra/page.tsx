'use client';

import React from 'react';
import AnimateIn from '@/components/ui/AnimateIn';

export default function NazraPage() {
  return (
    <div className="bg-background min-h-screen pt-24">
      <section className="relative py-24 px-8 bg-primary text-white text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimateIn direction="down">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">Intermediate Level</span>
            <h1 className="font-display text-5xl md:text-7xl mb-8">Nazra Quran</h1>
            <p className="font-sans text-lg text-white/70 leading-relaxed">
              Developing fluency and confidence in reciting the Holy Quran with Tajweed.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-24 px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <AnimateIn direction="left">
             <div className="space-y-6">
               <h2 className="font-display text-4xl text-primary">Fluent Recitation</h2>
               <p className="font-sans text-lg text-primary/70 leading-relaxed">
                 Nazra is the practice of reading the Quran by sight. Our course focuses on helping students achieve a smooth, rhythmic flow while applying the fundamental rules of Tajweed naturally.
               </p>
               <ul className="space-y-4">
                 {['Proper Pacing', 'Emotional Connection', 'Correct Stops (Waqf)'].map(item => (
                   <li key={item} className="flex items-center gap-3">
                     <span className="w-2 h-2 bg-accent rounded-full"></span>
                     <span className="font-sans text-primary/60">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>
           </AnimateIn>
           <AnimateIn direction="right" delay={0.2}>
             <div className="bg-primary p-12 text-white relative overflow-hidden">
                <div className="font-arabic-display text-5xl text-accent/20 absolute -bottom-4 -right-4 rotate-12">القرآن</div>
                <h3 className="font-display text-2xl mb-6 text-accent">Goals</h3>
                <p className="font-sans text-sm text-white/60 leading-relaxed">
                  To complete the recitation of the entire Quran (Khatm) while maintaining a high standard of accuracy and reverence.
                </p>
             </div>
           </AnimateIn>
        </div>
      </section>
    </div>
  );
}
