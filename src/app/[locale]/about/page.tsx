'use client';

import React from 'react';
import { Link } from '@/navigation';
import AnimateIn from '@/components/ui/AnimateIn';

export default function AboutPage() {
  return (
    <div className="bg-primary min-h-screen text-white pt-16">
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-primary via-dark-section to-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-dark-section/95" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="down">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-accent block mb-4">
              Our Legacy & Mission
            </span>

            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-white mb-6 leading-tight">
              About Al-Madrasa
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Bridging traditional Islamic scholarship with modern educational technology.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gradient-to-b from-primary via-dark-section to-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Our Mission',
              label: '01. Our Approach',
              desc: 'To provide accessible, high-quality Islamic and Quranic education to students worldwide with excellence, authenticity, and compassion.',
            },
            {
              title: 'Our Vision',
              label: '02. Our Goal',
              desc: 'To become a leading global platform for Islamic education, rooted in faith and supported by modern learning technology.',
            },
          ].map((item) => (
            <AnimateIn key={item.title}>
              <div className="h-full rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5 p-8 sm:p-10 hover:border-accent/50 hover:-translate-y-2 transition-all duration-300">
                <span className="text-xs uppercase tracking-widest text-accent block mb-5">
                  {item.label}
                </span>

                <h2 className="font-display text-3xl sm:text-4xl text-white mb-5">
                  {item.title}
                </h2>

                <div className="w-16 h-1 bg-accent rounded-full mb-6" />

                <p className="text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gradient-to-b from-dark-section via-primary to-dark-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl sm:text-5xl text-white mb-5">
                Our Core Principles
              </h2>

              <p className="text-white/70 max-w-3xl mx-auto">
                We combine authentic Islamic knowledge with premium learning experience.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Authenticity',
              'Excellence',
              'Community',
              'Accessibility',
              'Innovation',
              'Impact',
            ].map((title, index) => (
              <AnimateIn key={title} delay={index * 0.08}>
                <div className="rounded-2xl border border-accent/20 bg-white/[0.03] p-7 hover:border-accent/50 hover:-translate-y-2 transition-all duration-300">
                  <span className="font-display text-4xl text-accent/40 block mb-5">
                    0{index + 1}
                  </span>

                  <h3 className="font-display text-2xl text-white mb-4">
                    {title}
                  </h3>

                  <p className="text-white/65 text-sm leading-relaxed">
                    Premium Islamic education designed with trust, clarity, and practical learning.
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-dark-section via-primary to-dark-section">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimateIn>
            <h2 className="font-display text-3xl sm:text-4xl text-white mb-5">
              Ready to Begin Your Journey?
            </h2>

            <p className="text-white/75 mb-8">
              Join our global community of Islamic learners today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/teachings"
                className="px-8 py-4 bg-accent text-primary font-bold rounded-full hover:opacity-90 transition text-center"
              >
                Explore Courses
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 border border-accent text-accent font-bold rounded-full hover:bg-accent hover:text-primary transition text-center"
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