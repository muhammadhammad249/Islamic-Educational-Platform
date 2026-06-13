'use client';

import React, { useState } from 'react';
import { Link } from '@/navigation';
import AnimateIn from '@/components/ui/AnimateIn';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'overview', icon: 'dashboard', label: 'Overview' },
    { id: 'courses', icon: 'auto_stories', label: 'My Courses' },
    { id: 'schedule', icon: 'calendar_month', label: 'Schedule' },
    { id: 'billing', icon: 'payments', label: 'Billing' },
    { id: 'settings', icon: 'settings', label: 'Settings' },
  ];

  const stats = [
    { icon: 'school', label: 'Active Courses', value: '3', trend: '+1 this month' },
    { icon: 'event_available', label: 'Sessions', value: '24', trend: '+6 this week' },
    { icon: 'schedule', label: 'Hours Studied', value: '86', trend: '+12 hrs' },
    { icon: 'emoji_events', label: 'Completion', value: '78%', trend: 'Above average' },
  ];

  const courses = [
    { title: 'Tajweed Level 1', progress: 65, teacher: 'Ustadha Fatima', nextClass: 'Tomorrow, 10:00 AM' },
    { title: 'Classical Arabic Grammar', progress: 40, teacher: 'Shaykh Tariq', nextClass: 'Wednesday, 2:00 PM' },
    { title: 'Foundations of Aqidah', progress: 15, teacher: 'Shaykh Tariq', nextClass: 'Thursday, 9:00 AM' },
  ];

  const sessions = [
    { time: '14:00', date: 'Today', topic: 'Fiqh Seminar', type: 'Live Seminar' },
    { time: '10:00', date: 'Tomorrow', topic: '1-on-1 Recitation Review', type: 'Mentorship' },
    { time: '16:00', date: 'Thursday', topic: 'Arabic Grammar Workshop', type: 'Workshop' },
  ];

  return (
    <div className="bg-primary min-h-screen flex text-white pt-20">
      <aside className="w-64 border-r border-accent/10 bg-[#0A0A0A] hidden lg:flex flex-col">
        <div className="p-7 border-b border-accent/15">
          <span className="font-display text-xl text-accent">AL-MADRASA</span>
          <p className="text-[8px] uppercase tracking-widest text-white/30 mt-1">Student Portal</p>
        </div>

        <nav className="p-6 space-y-2 flex-grow">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left transition ${
                activeTab === item.id
                  ? 'text-accent bg-accent/10 border border-accent/20'
                  : 'text-white/40 hover:text-white hover:bg-white/[0.03] border border-transparent'
              }`}
            >
              <span className="material-symbols-outlined text-lg">{item.icon}</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-accent/10">
          <Link href="/login" className="flex items-center gap-3 text-white/35 hover:text-red-400">
            <span className="material-symbols-outlined text-lg">logout</span>
            <span className="text-[10px] uppercase font-bold tracking-widest">Sign Out</span>
          </Link>
        </div>
      </aside>

      <main className="flex-grow p-4 sm:p-6 lg:p-10 overflow-y-auto">
        <AnimateIn direction="down">
          <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl sm:text-4xl text-white mb-2">Welcome Back</h1>
              <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">
                Student learning dashboard
              </p>
            </div>

            <Link
              href="/teachers"
              className="px-6 py-3 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-widest text-center"
            >
              Book Teacher
            </Link>
          </header>
        </AnimateIn>

        <div className="lg:hidden flex gap-2 overflow-x-auto mb-8 pb-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-widest whitespace-nowrap border ${
                activeTab === item.id
                  ? 'bg-accent text-primary border-accent'
                  : 'border-accent/20 text-white/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
              {stats.map((stat, idx) => (
                <AnimateIn key={stat.label} delay={idx * 0.08}>
                  <div className="rounded-2xl border border-accent/15 bg-white/[0.03] p-5 hover:border-accent/40 transition">
                    <span className="material-symbols-outlined text-accent text-2xl mb-3 block">{stat.icon}</span>
                    <p className="font-display text-3xl">{stat.value}</p>
                    <p className="text-[10px] uppercase text-white/40 tracking-widest">{stat.label}</p>
                    <p className="text-[10px] text-accent/80 mt-2">{stat.trend}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
              <section className="xl:col-span-8 rounded-2xl border border-accent/15 bg-white/[0.03] p-6">
                <h2 className="text-xs uppercase font-bold tracking-widest text-accent mb-6">Course Progress</h2>

                <div className="space-y-6">
                  {courses.map((course) => (
                    <div key={course.title}>
                      <div className="flex justify-between mb-2">
                        <h3 className="font-display text-lg">{course.title}</h3>
                        <span className="text-accent text-sm font-bold">{course.progress}%</span>
                      </div>

                      <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>

                      <p className="text-xs text-white/45 mt-2">
                        {course.teacher} • Next: {course.nextClass}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="xl:col-span-4 rounded-2xl border border-accent/15 bg-white/[0.03] p-6">
                <h2 className="text-xs uppercase font-bold tracking-widest text-accent mb-6">Upcoming Sessions</h2>

                <div className="space-y-5">
                  {sessions.map((session) => (
                    <div key={session.topic} className="border-b border-accent/10 pb-4 last:border-0">
                      <p className="text-accent text-xs font-bold">{session.date} • {session.time}</p>
                      <h3 className="font-display text-lg mt-1">{session.topic}</h3>
                      <p className="text-xs text-white/45">{session.type}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </>
        )}

        {activeTab === 'courses' && (
          <section className="rounded-2xl border border-accent/15 bg-white/[0.03] p-6">
            <h2 className="font-display text-3xl mb-6">My Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {courses.map((course) => (
                <div key={course.title} className="rounded-2xl border border-accent/15 p-5">
                  <h3 className="font-display text-xl mb-2">{course.title}</h3>
                  <p className="text-sm text-white/60 mb-4">{course.teacher}</p>
                  <Link href="/resources" className="text-accent text-xs uppercase font-bold tracking-widest">
                    Open Resources
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'schedule' && (
          <section className="rounded-2xl border border-accent/15 bg-white/[0.03] p-6">
            <h2 className="font-display text-3xl mb-6">Schedule</h2>
            <div className="space-y-4">
              {sessions.map((session) => (
                <div key={session.topic} className="p-5 rounded-xl bg-black/20 border border-accent/10 flex justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl">{session.topic}</h3>
                    <p className="text-white/50 text-sm">{session.type}</p>
                  </div>
                  <p className="text-accent text-sm font-bold">{session.date} {session.time}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'billing' && (
          <section className="rounded-2xl border border-accent/15 bg-white/[0.03] p-6">
            <h2 className="font-display text-3xl mb-4">Billing</h2>
            <p className="text-white/60 mb-6">Manage your subscription and learning package.</p>
            <Link href="/pricing" className="inline-block px-6 py-3 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-widest">
              View Packages
            </Link>
          </section>
        )}

        {activeTab === 'settings' && (
          <section className="rounded-2xl border border-accent/15 bg-white/[0.03] p-6">
            <h2 className="font-display text-3xl mb-4">Settings</h2>
            <p className="text-white/60">Profile settings will be available here.</p>
          </section>
        )}
      </main>
    </div>
  );
}