'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import AnimateIn from '@/components/ui/AnimateIn';

export default function StudentDashboard() {
  const t = useTranslations('Teachings.dashboard.student');

  const sidebarItems = [
    { icon: 'dashboard', label: 'Overview', active: true },
    { icon: 'auto_stories', label: 'My Courses', active: false },
    { icon: 'calendar_month', label: 'Schedule', active: false },
    { icon: 'payments', label: 'Billing', active: false },
    { icon: 'settings', label: 'Settings', active: false },
  ];

  const stats = [
    { icon: 'school', label: 'Active Courses', value: '3', trend: '+1 this month' },
    { icon: 'event_available', label: 'Sessions Attended', value: '24', trend: '+6 this week' },
    { icon: 'schedule', label: 'Hours Studied', value: '86', trend: '+12 hrs this month' },
    { icon: 'emoji_events', label: 'Completion Rate', value: '78%', trend: 'Above average' },
  ];

  const courses = [
    { title: 'Tajweed Level 1', progress: 65, teacher: 'Ustadha Fatima Az-Zahra', nextClass: 'Tomorrow, 10:00 AM' },
    { title: 'Classical Arabic Grammar', progress: 40, teacher: 'Shaykh Tariq Al-Hashimi', nextClass: 'Wednesday, 2:00 PM' },
    { title: 'Foundations of Aqidah', progress: 15, teacher: 'Shaykh Tariq Al-Hashimi', nextClass: 'Thursday, 9:00 AM' },
  ];

  const upcomingSessions = [
    { time: '14:00', date: 'Today', topic: 'Fiqh Seminar', type: 'Live Seminar' },
    { time: '10:00', date: 'Tomorrow', topic: '1-on-1 Recitation Review', type: 'Mentorship' },
    { time: '16:00', date: 'Thursday', topic: 'Arabic Grammar Workshop', type: 'Workshop' },
  ];

  const recentActivity = [
    { icon: 'download', text: 'Downloaded "Matn al-Ajurrumiyya" manuscript', time: '2 hours ago' },
    { icon: 'quiz', text: 'Completed Tajweed Assessment — Score: 92%', time: 'Yesterday' },
    { icon: 'forum', text: 'Posted in the Fiqh Discussion Forum', time: '2 days ago' },
    { icon: 'video_library', text: 'Watched "Introduction to Usul al-Fiqh" lecture', time: '3 days ago' },
  ];

  return (
    <div className="bg-primary min-h-screen flex text-white">

      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-accent/10 bg-[#0A0A0A] hidden md:flex flex-col flex-shrink-0">
        <div className="p-7 border-b border-accent/15">
          <span className="font-display text-xl text-accent tracking-wider">AL-MADRASA</span>
          <p className="font-sans text-[8px] uppercase tracking-widest text-white/30 mt-1">Student Portal</p>
        </div>
        <nav className="p-6 space-y-2 flex-grow">
          {sidebarItems.map((item) => (
            <button 
              key={item.label} 
              className={`flex items-center gap-3.5 w-full px-4 py-3 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                item.active 
                  ? 'text-accent bg-accent/10 border border-accent/20' 
                  : 'text-white/40 hover:text-white/70 hover:bg-white/[0.02] border border-transparent'
              }`}
            >
              <span className={`material-symbols-outlined text-lg select-none ${item.active ? 'fill-1' : ''}`}>
                {item.icon}
              </span>
              <span className="font-sans text-[10px] uppercase font-bold tracking-widest">
                {item.label}
              </span>
              {item.active && (
                <div className="ml-auto w-1.5 h-1.5 bg-accent rounded-full" />
              )}
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-accent/10">
          <button className="flex items-center gap-3.5 text-white/30 hover:text-red-400 transition-colors px-4 py-2 cursor-pointer w-full">
            <span className="material-symbols-outlined text-lg select-none">logout</span>
            <span className="font-sans text-[10px] uppercase font-bold tracking-widest">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 sm:p-8 lg:p-12 overflow-y-auto relative">
        {/* Background lighting */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full filter blur-[150px] pointer-events-none" />

        {/* Header */}
        <header className="mb-10 sm:mb-14 relative z-10">
          <AnimateIn direction="down">
            <h1 className="font-display text-3xl sm:text-4xl text-white mb-2">{t('welcome')}</h1>
            <p className="font-sans text-xs font-bold text-white/40 uppercase tracking-[0.2em]">
              Ramazan 14, 1445 AH
            </p>
          </AnimateIn>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-14 relative z-10">
          {stats.map((stat, idx) => (
            <AnimateIn key={stat.label} delay={idx * 0.08}>
              <div className="group bg-gradient-to-br from-[#1C1C1C]/50 to-[#0F0F0F]/80 border border-accent/15 rounded-2xl p-5 sm:p-6 hover:border-accent/35 hover:shadow-[0_0_20px_rgba(212,175,55,0.06)] transition-all duration-300">
                <span className="material-symbols-outlined text-accent text-xl mb-3 block select-none group-hover:scale-110 transition-transform">{stat.icon}</span>
                <p className="font-display text-2xl sm:text-3xl text-white mb-1">{stat.value}</p>
                <p className="font-sans text-[9px] sm:text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2">{stat.label}</p>
                <p className="font-sans text-[9px] text-accent/70">{stat.trend}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 sm:gap-10 relative z-10">
          
          {/* Left Column: Progress & Resources */}
          <div className="xl:col-span-8 space-y-8 sm:space-y-10">
            
            {/* Course Progress */}
            <AnimateIn>
              <section className="bg-gradient-to-br from-[#1C1C1C]/40 to-[#0F0F0F]/65 border border-accent/15 rounded-2xl p-6 sm:p-8">
                <h2 className="font-sans text-[10px] uppercase font-bold text-accent tracking-widest mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {t('progress')}
                </h2>
                <div className="space-y-6">
                  {courses.map((course) => (
                    <div key={course.title} className="space-y-3 group">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                        <h3 className="font-display text-base sm:text-lg text-white group-hover:text-accent transition-colors">{course.title}</h3>
                        <span className="font-sans text-xs font-bold text-accent">{course.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-[#0D0D0D]/60 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${course.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-accent to-[#B8922E] rounded-full"
                        />
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-white/40 font-sans">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs select-none">person</span>
                          {course.teacher}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs select-none">event</span>
                          Next: {course.nextClass}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </AnimateIn>

            {/* Enrolled Resources */}
            <AnimateIn delay={0.1}>
              <section className="bg-gradient-to-br from-[#1C1C1C]/40 to-[#0F0F0F]/65 border border-accent/15 rounded-2xl p-6 sm:p-8">
                <h2 className="font-sans text-[10px] uppercase font-bold text-accent tracking-widest mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {t('resources')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Matn al-Ajurrumiyya', type: 'Manuscript' },
                    { title: 'Tafsir Ibn Kathir (Vol 1)', type: 'PDF' },
                  ].map((res) => (
                    <div key={res.title} className="group p-5 rounded-xl border border-accent/10 bg-[#0D0D0D]/30 hover:border-accent/30 transition-all duration-300 cursor-pointer">
                      <span className="material-symbols-outlined text-accent mb-3 block select-none group-hover:scale-110 transition-transform">description</span>
                      <h4 className="font-display text-sm sm:text-base text-white mb-1.5 group-hover:text-accent transition-colors">{res.title}</h4>
                      <span className="font-sans text-[9px] uppercase text-white/40 tracking-widest">{res.type}</span>
                    </div>
                  ))}
                </div>
              </section>
            </AnimateIn>

            {/* Quick Actions */}
            <AnimateIn delay={0.15}>
              <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: 'video_call', title: 'Book 1-on-1 Class', desc: 'Schedule a private session' },
                  { icon: 'forum', title: 'Ask a Scholar', desc: 'Post in the Q&A forum' },
                  { icon: 'live_tv', title: 'Join Live Seminar', desc: 'Next: Today at 2 PM' },
                ].map((action) => (
                  <div 
                    key={action.title}
                    className="group flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-accent/10 bg-[#121212]/50 hover:border-accent/35 hover:bg-accent/5 transition-all duration-300 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-accent text-2xl select-none group-hover:scale-110 transition-transform">{action.icon}</span>
                    <h4 className="font-display text-sm text-white group-hover:text-accent transition-colors">{action.title}</h4>
                    <p className="font-sans text-[10px] text-white/40">{action.desc}</p>
                  </div>
                ))}
              </section>
            </AnimateIn>
          </div>

          {/* Right Column: Sessions, Activity, Teacher Card */}
          <div className="xl:col-span-4 space-y-8 sm:space-y-10">
            
            {/* Upcoming Sessions */}
            <AnimateIn direction="right" delay={0.1}>
              <section className="bg-gradient-to-b from-[#1C1C1C]/60 to-[#0D0D0D]/85 border border-accent/15 rounded-2xl p-6 sm:p-8">
                <h2 className="font-sans text-[10px] uppercase font-bold text-accent tracking-widest mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {t('sessions')}
                </h2>
                <div className="space-y-5">
                  {upcomingSessions.map((session, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <span className="font-sans text-xs font-bold text-accent">{session.time}</span>
                        {i < upcomingSessions.length - 1 && (
                          <div className="w-px h-full bg-accent/15 my-1.5" />
                        )}
                      </div>
                      <div className="pb-4">
                        <h4 className="font-display text-sm sm:text-base text-white mb-1 group-hover:text-accent transition-colors">{session.topic}</h4>
                        <p className="font-sans text-[10px] text-white/40">{session.date}</p>
                        <span className="inline-block mt-1.5 font-sans text-[8px] uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-md">
                          {session.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </AnimateIn>

            {/* Recent Activity */}
            <AnimateIn direction="right" delay={0.18}>
              <section className="bg-gradient-to-b from-[#1C1C1C]/40 to-[#0F0F0F]/65 border border-accent/15 rounded-2xl p-6 sm:p-8">
                <h2 className="font-sans text-[10px] uppercase font-bold text-accent tracking-widest mb-5">
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  {recentActivity.map((activity, i) => (
                    <div key={i} className="flex gap-3 group">
                      <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-accent text-xs select-none">{activity.icon}</span>
                      </div>
                      <div>
                        <p className="font-sans text-xs text-white/80 leading-relaxed">{activity.text}</p>
                        <p className="font-sans text-[9px] text-white/30 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </AnimateIn>
          </div>
        </div>
      </main>
    </div>
  );
}
