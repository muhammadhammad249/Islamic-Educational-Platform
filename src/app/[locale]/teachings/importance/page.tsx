'use client';

import React from 'react';
import AnimateIn from '@/components/ui/AnimateIn';

export default function ImportancePage() {
  return (
    <div className="bg-background min-h-screen pt-24">
      <section className="relative py-24 px-8 bg-primary text-white text-center">
        <div className="absolute inset-0 opacity-5 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3tqy-IXpQ8X6scUotLtAcauxsQSUBybWyW2tVAFn31Zy1fCY0j0g3PfDGnGoS3ez8WBs-SySV4IsdSEI-It_viB6dl3fYDK91FHq88TfTs1qLJ2rQhPSBmMlBrNwNiiinGnYobE1yOeLbgUH1dnFnDvpecnUAPqKbaMogb6l0gcUikjMku93lWbChgehXf6g9rpAs56960iAwY7zfMn1Wugu6VbzPXZFH1yIo3oCwQia6IuNkG8sRCNp8ON_38Yg8hSrSOQKMA-z5')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimateIn direction="down">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">Seeking Knowledge</span>
            <h1 className="font-display text-5xl md:text-7xl mb-8">Importance of Islamic Education</h1>
            <p className="font-sans text-lg text-white/70 leading-relaxed">
              Why learning the Deen is an obligation and a source of light for the believer.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-24 px-8 max-w-5xl mx-auto text-center">
        <AnimateIn>
          <div className="bg-white border-2 border-accent/20 p-16 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-background px-6">
              <span className="material-symbols-outlined text-4xl text-accent">menu_book</span>
            </div>
            <h2 className="font-display text-3xl text-primary mb-8 italic">"Seeking knowledge is a duty upon every Muslim."</h2>
            <p className="font-sans text-primary/60 leading-relaxed">
              Knowledge (Ilm) is the foundation of faith and action. In Islam, the pursuit of knowledge is not just a personal benefit but a form of worship that leads to the pleasure of Allah and the betterment of the Ummah.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 text-left">
              <div className="space-y-4">
                <h3 className="font-display text-xl text-accent">Spiritual Growth</h3>
                <p className="font-sans text-sm text-primary/50">Knowledge removes the darkness of ignorance and replaces it with the light of certainty (Yaqeen).</p>
              </div>
              <div className="space-y-4">
                <h3 className="font-display text-xl text-accent">Societal Impact</h3>
                <p className="font-sans text-sm text-primary/50">An educated Muslim is better equipped to serve their family, community, and humanity at large.</p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
