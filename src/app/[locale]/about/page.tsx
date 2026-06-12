'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import AnimateIn from '@/components/ui/AnimateIn';

export default function AboutPage() {
  const t = useTranslations('Common');

  return (
    <div className="bg-primary min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-gradient-to-br from-primary via-dark-section to-primary">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3tqy-IXpQ8X6scUotLtAcauxsQSUBybWyW2tVAFn31Zy1fCY0j0g3PfDGnGoS3ez8WBs-SySV4IsdSEI-It_viB6dl3fYDK91FHq88TfTs1qLJ2rQhPSBmMlBrNwNiiinGnYobE1yOeLbgUH1dnFnDvpecnUAPqKbaMogb6l0gcUikjMku93lWbChgehXf6g9rpAs56960iAwY7zfMn1Wugu6VbzPXZFH1yIo3oCwQia6IuNkG8sRCNp8ON_38Yg8hSrSOQKMA-z5" 
            alt="Islamic Architecture" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-dark-section/95"></div>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-5" 
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
          <div className="absolute top-1/3 -left-32 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="down">
            <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-accent block mb-4 drop-shadow-lg">
              Our Legacy & Mission
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg">
              About Al-Madrasa
            </h1>
            <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-accent via-accent to-transparent rounded-full"></div>
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-transparent via-accent to-accent rounded-full"></div>
            </div>
            <p className="font-sans text-base sm:text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              Bridging traditional Islamic scholarship with modern educational technology to nurture the next generation of Muslims worldwide.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-20 sm:py-28 md:py-32 bg-gradient-to-b from-primary via-dark-section to-primary overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37, #D4AF37 2px, transparent 2px, transparent 10px)',
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Mission */}
            <AnimateIn direction="left">
              <div className="group relative h-full">
                {/* Card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-accent/5 rounded-3xl border border-accent/20 transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-2"></div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full -mr-12 -mt-12 group-hover:scale-125 transition-transform duration-500"></div>
                
                {/* Content */}
                <div className="relative p-8 sm:p-10 md:p-12 h-full flex flex-col">
                  <div className="mb-6 sm:mb-8">
                    <span className="font-sans text-xs uppercase tracking-widest text-accent/80 group-hover:text-accent transition-colors">
                      01. Our Approach
                    </span>
                  </div>
                  
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-6 drop-shadow-lg group-hover:text-accent transition-colors duration-300">
                    Our Mission
                  </h2>
                  
                  <div className="w-16 h-1.5 bg-gradient-to-r from-accent to-accent/40 rounded-full mb-8 group-hover:w-24 transition-all duration-500"></div>
                  
                  <p className="font-sans text-white/75 text-base sm:text-lg leading-relaxed flex-grow group-hover:text-white/90 transition-colors duration-300">
                    To provide accessible, high-quality Islamic and Quranic education to students worldwide. We strive to create an environment where the sacred sciences are taught with excellence, authenticity, and compassion, bridging the gap between tradition and modernity.
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* Vision */}
            <AnimateIn direction="right" delay={0.2}>
              <div className="group relative h-full">
                {/* Card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-accent/5 rounded-3xl border border-accent/20 transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-2"></div>
                
                {/* Decorative corner */}
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full -ml-12 -mb-12 group-hover:scale-125 transition-transform duration-500"></div>
                
                {/* Content */}
                <div className="relative p-8 sm:p-10 md:p-12 h-full flex flex-col">
                  <div className="mb-6 sm:mb-8">
                    <span className="font-sans text-xs uppercase tracking-widest text-accent/80 group-hover:text-accent transition-colors">
                      02. Our Goal
                    </span>
                  </div>
                  
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-6 drop-shadow-lg group-hover:text-accent transition-colors duration-300">
                    Our Vision
                  </h2>
                  
                  <div className="w-16 h-1.5 bg-gradient-to-r from-accent to-accent/40 rounded-full mb-8 group-hover:w-24 transition-all duration-500"></div>
                  
                  <p className="font-sans text-white/75 text-base sm:text-lg leading-relaxed flex-grow group-hover:text-white/90 transition-colors duration-300">
                    To become the leading global platform for Islamic education, fostering a vibrant community of learners deeply rooted in their faith. We envision students equipped with sacred knowledge and practical wisdom to contribute positively to their families and societies.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-20 sm:py-28 md:py-32 bg-gradient-to-b from-dark-section via-primary to-dark-section overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #D4AF37 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <AnimateIn>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-4 drop-shadow-lg">
                Our Core Principles
              </h2>
              <p className="font-sans text-white/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                We believe that Islamic education should be as beautiful and profound as the knowledge itself. Our platform combines aesthetic excellence with academic rigor, creating transformative learning experiences.
              </p>
              <div className="flex justify-center gap-3 mt-8">
                <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-accent to-transparent rounded-full"></div>
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-accent to-transparent rounded-full"></div>
              </div>
            </AnimateIn>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                icon: '✓',
                number: '01',
                title: 'Authenticity', 
                desc: 'All knowledge sourced from qualified Islamic scholars and authentic traditional texts, ensuring purity and correctness of teachings.' 
              },
              { 
                icon: '✓',
                number: '02',
                title: 'Excellence', 
                desc: 'Unwavering commitment to highest standards in content quality, instructor expertise, and platform design.' 
              },
              { 
                icon: '✓',
                number: '03',
                title: 'Community', 
                desc: 'Fostering meaningful connections and supportive bonds between teachers and students in a thriving learning ecosystem.' 
              },
              {
                icon: '✓',
                number: '04',
                title: 'Accessibility',
                desc: 'Making premium Islamic education available and affordable to students worldwide regardless of background.'
              },
              {
                icon: '✓',
                number: '05',
                title: 'Innovation',
                desc: 'Leveraging modern technology to enhance learning while maintaining traditional Islamic values and integrity.'
              },
              {
                icon: '✓',
                number: '06',
                title: 'Impact',
                desc: 'Empowering students to become knowledgeable, virtuous individuals who positively transform their communities.'
              }
            ].map((principle, index) => (
              <AnimateIn key={principle.title} delay={index * 0.1}>
                <div className="group relative h-full">
                  {/* Card background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/12 to-accent/4 rounded-2xl border border-accent/20 transition-all duration-500 group-hover:border-accent/50 group-hover:shadow-xl group-hover:shadow-accent/30 group-hover:-translate-y-2"></div>
                  
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative p-6 sm:p-8 h-full flex flex-col">
                    {/* Number and icon */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="font-display text-3xl sm:text-4xl text-accent/30 group-hover:text-accent transition-colors duration-300 drop-shadow-lg">
                        {principle.number}
                      </span>
                      <span className="text-2xl text-accent group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">
                        {principle.icon}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-display text-xl sm:text-2xl text-white mb-4 group-hover:text-accent transition-colors duration-300 drop-shadow-md">
                      {principle.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed group-hover:text-white/85 transition-colors duration-300 flex-grow">
                      {principle.desc}
                    </p>
                    
                    {/* Bottom accent line */}
                    <div className="mt-6 w-8 h-1 bg-gradient-to-r from-accent to-accent/40 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 sm:py-28 md:py-32 bg-gradient-to-b from-primary via-dark-section to-primary overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, #D4AF37, #D4AF37 1px, transparent 1px, transparent 10px)',
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <AnimateIn>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-4 drop-shadow-lg">
                Why Choose Al-Madrasa?
              </h2>
              <p className="font-sans text-white/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                Join thousands of students and educators in a learning revolution that honors tradition while embracing innovation.
              </p>
            </AnimateIn>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: 'Expert Instructors', desc: 'Learn from highly qualified Islamic scholars with years of teaching experience.' },
              { title: 'Flexible Scheduling', desc: 'Study at your own pace with lifetime access to course materials.' },
              { title: 'Comprehensive Curriculum', desc: 'From foundational Quranic studies to advanced Islamic jurisprudence.' },
              { title: 'Supportive Community', desc: 'Connect with fellow students and educators in our thriving learning community.' },
              { title: 'Premium Technology', desc: 'Cutting-edge platform designed for smooth, engaging learning experiences.' },
              { title: 'Affordable Rates', desc: 'High-quality education at prices accessible to students worldwide.' }
            ].map((feature, idx) => (
              <AnimateIn key={feature.title} delay={idx * 0.1}>
                <div className="group relative">
                  {/* Card background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl border border-accent/20 transition-all duration-500 group-hover:border-accent/50 group-hover:shadow-2xl group-hover:shadow-accent/25 group-hover:-translate-y-2"></div>
                  
                  {/* Content */}
                  <div className="relative p-8 sm:p-10 flex gap-6">
                    {/* Icon circle */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl border border-accent/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/40 transition-all duration-300">
                      <span className="text-accent text-lg font-bold group-hover:text-white transition-colors">→</span>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="font-display text-lg sm:text-xl text-white mb-2 group-hover:text-accent transition-colors duration-300 drop-shadow-md">
                        {feature.title}
                      </h3>
                      <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed group-hover:text-white/85 transition-colors duration-300">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-r from-dark-section via-primary to-dark-section overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/2 -right-48 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:mb-6 drop-shadow-lg">
              Ready to Begin Your Journey?
            </h2>
            <p className="font-sans text-white/80 text-base sm:text-lg mb-8 sm:mb-10 drop-shadow-md">
              Join our global community of Islamic learners today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 sm:px-10 py-3 sm:py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-1 drop-shadow-lg">
                Explore Courses
              </button>
              <button className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-1">
                Contact Us
              </button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
