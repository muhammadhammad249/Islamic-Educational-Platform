'use client';

import React from 'react';
import AnimateIn from '@/components/ui/AnimateIn';
import { Link } from '@/navigation';

export default function TeachingsHubPage() {
  const quranCourses = [
    { title: 'Quran Introduction', desc: 'Foundations of Quranic studies and sacred text', icon: 'menu_book' },
    { title: 'Tajweed Rules', desc: 'Master proper Quran recitation techniques', icon: 'record_voice_over' },
    { title: 'Quranic Tafsir', desc: 'Scholarly interpretation and meanings', icon: 'auto_awesome' },
  ];

  const islamicStudies = [
    { title: 'Hadith Studies', desc: 'Authentic narrations of the Prophet', icon: 'library_books', href: '/teachings/hadith' },
    { title: 'Islamic Jurisprudence', desc: 'Fiqh principles and rulings', icon: 'gavel' },
    { title: 'Aqidah', desc: 'Islamic theology and beliefs', icon: 'favorite' },
  ];

  const practicalTeachings = [
    { title: 'Five Pillars of Islam', desc: 'Foundation of Islamic practice', icon: 'mosque', href: '/teachings/pillars' },
    { title: 'Salah Guide', desc: 'Complete guide to daily prayers', icon: 'self_improvement', href: '/teachings/salah' },
    { title: 'Duas & Adhkar', desc: 'Daily prayers and remembrances', icon: 'prayer_times', href: '/teachings/duas' },
  ];

  const characterLessons = [
    { title: 'Seerah', desc: 'Life lessons from the Prophet Muhammad', icon: 'history_edu', href: '/teachings/seerah' },
    { title: 'Islamic Manners', desc: 'Etiquette and good character traits', icon: 'favorite', href: '/teachings/manners' },
    { title: 'Importance of Education', desc: 'Knowledge in Islamic tradition', icon: 'school', href: '/teachings/importance' },
  ];

  const allCategories = [
    { title: 'Five Pillars of Islam', href: '/teachings/pillars', icon: 'mosque' },
    { title: 'Quran Introduction', href: '/teachings/quran-intro', icon: 'menu_book' },
    { title: 'Tajweed Rules', href: '/teachings/tajweed', icon: 'record_voice_over' },
    { title: 'Salah Guide', href: '/teachings/salah', icon: 'self_improvement' },
    { title: 'Duas & Adhkar', href: '/teachings/duas', icon: 'prayer_times' },
    { title: 'Seerah', href: '/teachings/seerah', icon: 'history_edu' },
    { title: 'Islamic Manners', href: '/teachings/manners', icon: 'favorite' },
  ];

  return (
    <div className="bg-primary min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-gradient-to-br from-primary via-dark-section to-primary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><path d=%22M50 10 L61 40 L92 40 L67 60 L79 90 L50 70 L21 90 L33 60 L8 40 L39 40 Z%22 fill=%22%23D4AF37%22 opacity=%220.1%22/></svg>')]"></div>
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
              Sacred Knowledge
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg">
              Islamic Teachings
            </h1>
            <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-accent via-accent to-transparent rounded-full"></div>
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-transparent via-accent to-accent rounded-full"></div>
            </div>
            <p className="font-sans text-base sm:text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              Explore the foundational concepts and practices of Islam through our comprehensive, expertly-curated resources and teachings.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Quran Learning Section */}
      <section className="relative py-20 sm:py-28 md:py-32 bg-gradient-to-b from-primary via-dark-section to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37, #D4AF37 2px, transparent 2px, transparent 10px)',
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <AnimateIn>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 drop-shadow-lg">
                Quranic Studies
              </h2>
              <p className="font-sans text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
                Master the reading, recitation, and interpretation of the Noble Quran
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {quranCourses.map((course, idx) => (
              <AnimateIn key={course.title} delay={idx * 0.1}>
                <div className="group h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-accent/5 rounded-3xl border border-accent/20 transition-all duration-500 group-hover:border-accent/50 group-hover:shadow-2xl group-hover:shadow-accent/25 group-hover:-translate-y-2"></div>
                  <div className="relative p-8 sm:p-10 h-full flex flex-col">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8 flex items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                      <span className="material-symbols-outlined text-3xl sm:text-4xl">{course.icon}</span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl text-white mb-3 group-hover:text-accent transition-colors duration-300">{course.title}</h3>
                    <p className="font-sans text-sm sm:text-base text-white/70 group-hover:text-white/85 transition-colors duration-300 flex-grow">{course.desc}</p>
                    <div className="mt-6 w-8 h-1 bg-gradient-to-r from-accent to-accent/40 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Studies Section */}
      <section className="relative py-20 sm:py-28 md:py-32 bg-gradient-to-b from-dark-section via-primary to-dark-section overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #D4AF37 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <AnimateIn>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 drop-shadow-lg">
                Islamic Studies
              </h2>
              <p className="font-sans text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
                Deepen your understanding of Islamic theology, jurisprudence, and traditions
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {islamicStudies.map((study, idx) => (
              <AnimateIn key={study.title} delay={idx * 0.1}>
                <Link href={study.href || '#'}>
                  <div className="group h-full cursor-pointer relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-accent/5 rounded-3xl border border-accent/20 transition-all duration-500 group-hover:border-accent/50 group-hover:shadow-2xl group-hover:shadow-accent/25 group-hover:-translate-y-2"></div>
                    <div className="relative p-8 sm:p-10 h-full flex flex-col">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8 flex items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                        <span className="material-symbols-outlined text-3xl sm:text-4xl">{study.icon}</span>
                      </div>
                      <h3 className="font-display text-lg sm:text-xl text-white mb-3 group-hover:text-accent transition-colors duration-300">{study.title}</h3>
                      <p className="font-sans text-sm sm:text-base text-white/70 group-hover:text-white/85 transition-colors duration-300 flex-grow">{study.desc}</p>
                      <div className="mt-6 flex items-center justify-between">
                        <div className="w-8 h-1 bg-gradient-to-r from-accent to-accent/40 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        <span className="material-symbols-outlined text-accent opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Teachings Section */}
      <section className="relative py-20 sm:py-28 md:py-32 bg-gradient-to-b from-primary via-dark-section to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, #D4AF37, #D4AF37 1px, transparent 1px, transparent 10px)',
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <AnimateIn>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 drop-shadow-lg">
                Practical Teachings
              </h2>
              <p className="font-sans text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
                Learn the essential practices and rituals of Islamic life
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {practicalTeachings.map((teaching, idx) => (
              <AnimateIn key={teaching.title} delay={idx * 0.1}>
                <Link href={teaching.href || '#'}>
                  <div className="group h-full cursor-pointer relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-accent/5 rounded-3xl border border-accent/20 transition-all duration-500 group-hover:border-accent/50 group-hover:shadow-2xl group-hover:shadow-accent/25 group-hover:-translate-y-2"></div>
                    <div className="relative p-8 sm:p-10 h-full flex flex-col">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8 flex items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                        <span className="material-symbols-outlined text-3xl sm:text-4xl">{teaching.icon}</span>
                      </div>
                      <h3 className="font-display text-lg sm:text-xl text-white mb-3 group-hover:text-accent transition-colors duration-300">{teaching.title}</h3>
                      <p className="font-sans text-sm sm:text-base text-white/70 group-hover:text-white/85 transition-colors duration-300 flex-grow">{teaching.desc}</p>
                      <div className="mt-6 flex items-center justify-between">
                        <div className="w-8 h-1 bg-gradient-to-r from-accent to-accent/40 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        <span className="material-symbols-outlined text-accent opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Character & Character Section */}
      <section className="relative py-20 sm:py-28 md:py-32 bg-gradient-to-b from-dark-section via-primary to-dark-section overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <AnimateIn>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 drop-shadow-lg">
                Character & Manners
              </h2>
              <p className="font-sans text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
                Build noble character through the teachings of prophets and scholars
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {characterLessons.map((lesson, idx) => (
              <AnimateIn key={lesson.title} delay={idx * 0.1}>
                <Link href={lesson.href || '#'}>
                  <div className="group h-full cursor-pointer relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-accent/5 rounded-3xl border border-accent/20 transition-all duration-500 group-hover:border-accent/50 group-hover:shadow-2xl group-hover:shadow-accent/25 group-hover:-translate-y-2"></div>
                    <div className="relative p-8 sm:p-10 h-full flex flex-col">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8 flex items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                        <span className="material-symbols-outlined text-3xl sm:text-4xl">{lesson.icon}</span>
                      </div>
                      <h3 className="font-display text-lg sm:text-xl text-white mb-3 group-hover:text-accent transition-colors duration-300">{lesson.title}</h3>
                      <p className="font-sans text-sm sm:text-base text-white/70 group-hover:text-white/85 transition-colors duration-300 flex-grow">{lesson.desc}</p>
                      <div className="mt-6 flex items-center justify-between">
                        <div className="w-8 h-1 bg-gradient-to-r from-accent to-accent/40 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        <span className="material-symbols-outlined text-accent opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Teachings Grid */}
      <section className="relative py-20 sm:py-28 md:py-32 bg-gradient-to-b from-primary via-dark-section to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37, #D4AF37 2px, transparent 2px, transparent 10px)',
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <AnimateIn>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 drop-shadow-lg">
                All Teachings
              </h2>
              <p className="font-sans text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
                Access our complete library of Islamic knowledge and guidance
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {allCategories.map((cat, index) => (
              <AnimateIn key={cat.title} delay={0.05 * index}>
                <Link href={cat.href}>
                  <div className="group h-full cursor-pointer relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/12 to-accent/4 rounded-2xl border border-accent/20 transition-all duration-500 group-hover:border-accent/50 group-hover:shadow-xl group-hover:shadow-accent/25 group-hover:-translate-y-2"></div>
                    <div className="relative p-6 sm:p-8 h-full flex flex-col items-center text-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:shadow-md transition-all duration-300">
                        <span className="material-symbols-outlined text-2xl sm:text-3xl">{cat.icon}</span>
                      </div>
                      <h3 className="font-display text-base sm:text-lg text-white mb-2 group-hover:text-accent transition-colors duration-300">{cat.title}</h3>
                      <p className="font-sans text-xs sm:text-sm text-accent uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-opacity">Explore</p>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 sm:py-28 md:py-32 bg-gradient-to-b from-dark-section via-primary to-dark-section overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #D4AF37 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <AnimateIn>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 drop-shadow-lg">
                Why Study With Us?
              </h2>
              <p className="font-sans text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
                Premium Islamic education from authentic sources
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: 'Authentic Sources', desc: 'All teachings sourced from verified Islamic scholars and classical texts.' },
              { title: 'Expert Instructors', desc: 'Learn from highly qualified scholars with years of experience.' },
              { title: 'Comprehensive Content', desc: 'Foundational to advanced courses covering all Islamic sciences.' },
              { title: 'Lifetime Access', desc: 'Study at your own pace with full access to course materials.' },
              { title: 'Supportive Community', desc: 'Connect with fellow learners in our engaged community.' },
              { title: 'Continuous Learning', desc: 'New courses and content added regularly by expert instructors.' }
            ].map((benefit, idx) => (
              <AnimateIn key={benefit.title} delay={idx * 0.1}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl border border-accent/20 transition-all duration-500 group-hover:border-accent/50 group-hover:shadow-xl group-hover:shadow-accent/25 group-hover:-translate-y-2"></div>
                  <div className="relative p-8 sm:p-10 flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl border border-accent/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/40 transition-all duration-300">
                      <span className="text-accent text-lg font-bold group-hover:text-white transition-colors">✓</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-display text-lg sm:text-xl text-white mb-2 group-hover:text-accent transition-colors duration-300 drop-shadow-md">
                        {benefit.title}
                      </h3>
                      <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed group-hover:text-white/85 transition-colors duration-300">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-r from-dark-section via-primary to-dark-section overflow-hidden">
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
              Begin Your Learning Journey Today
            </h2>
            <p className="font-sans text-white/80 text-base sm:text-lg mb-8 sm:mb-10 drop-shadow-md max-w-2xl mx-auto">
              Access premium Islamic teachings, connect with expert instructors, and grow in your faith.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 sm:px-10 py-3 sm:py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-1 drop-shadow-lg">
                Explore All Courses
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
