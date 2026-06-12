'use client';

import React from 'react';
import AnimateIn from '@/components/ui/AnimateIn';

export default function AboutIslamPage() {
  return (
    <div className="bg-background min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-24 px-8 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3tqy-IXpQ8X6scUotLtAcauxsQSUBybWyW2tVAFn31Zy1fCY0j0g3PfDGnGoS3ez8WBs-SySV4IsdSEI-It_viB6dl3fYDK91FHq88TfTs1qLJ2rQhPSBmMlBrNwNiiinGnYobE1yOeLbgUH1dnFnDvpecnUAPqKbaMogb6l0gcUikjMku93lWbChgehXf6g9rpAs56960iAwY7zfMn1Wugu6VbzPXZFH1yIo3oCwQia6IuNkG8sRCNp8ON_38Yg8hSrSOQKMA-z5')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimateIn direction="down">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">The Path of Peace</span>
            <h1 className="font-display text-5xl md:text-7xl mb-8">About Islam</h1>
            <p className="font-sans text-lg md:text-xl text-white/70 leading-relaxed">
              An introduction to the message, values, and practices of Islam.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-8 max-w-5xl mx-auto">
        <div className="space-y-24">
          
          {/* What is Islam */}
          <AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6">
                <h2 className="font-display text-4xl text-primary">What is Islam?</h2>
                <p className="font-sans text-lg text-primary/70 leading-relaxed">
                  Islam is a monotheistic religion based on the belief in one God (Allah) and the teachings of the Prophet Muhammad ﷺ. It is a way of life that emphasizes peace, justice, and the worship of the Creator.
                </p>
                <p className="font-sans text-primary/60">
                  The word "Islam" itself comes from the root word "Salm," which means peace and submission. A Muslim is one who seeks peace through submission to the will of Allah.
                </p>
              </div>
              <div className="md:col-span-5 bg-background-warm p-8 border border-accent/10">
                <div className="font-arabic-display text-4xl text-accent text-center mb-4 leading-loose">
                  لَا إِلٰهَ إِلَّا الله مُحَمَّدٌ رَسُولُ الله
                </div>
                <p className="font-sans text-xs text-center text-primary/40 uppercase tracking-widest leading-relaxed">
                  "There is no god but Allah, and Muhammad is the messenger of Allah."
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* The Quran */}
          <AnimateIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               <div className="space-y-6">
                 <h2 className="font-display text-4xl text-primary">The Holy Quran</h2>
                 <p className="font-sans text-primary/70 leading-relaxed">
                   The Quran is the literal word of Allah revealed to the Prophet Muhammad ﷺ through the Angel Gabriel. It serves as a guide for humanity, covering aspects of faith, law, morality, and spirituality.
                 </p>
               </div>
               <div className="space-y-6">
                 <h2 className="font-display text-4xl text-primary">Prophet Muhammad ﷺ</h2>
                 <p className="font-sans text-primary/70 leading-relaxed">
                   The final messenger sent to humanity, whose life (Sunnah) and character serve as the perfect example for Muslims to follow in their daily lives.
                 </p>
               </div>
            </div>
          </AnimateIn>

          {/* Values Section */}
          <section className="bg-primary text-white p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
              <h2 className="font-display text-3xl md:text-5xl">Universal Values</h2>
              <p className="font-sans text-white/60 leading-relaxed">
                Islam teaches compassion, honesty, generosity, and respect for all life. It encourages the pursuit of knowledge and the service of others as forms of worship.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
                {['Justice', 'Mercy', 'Patience', 'Honesty'].map(val => (
                  <div key={val} className="text-accent font-display text-lg uppercase tracking-widest">{val}</div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </section>
    </div>
  );
}
