'use client';

import React, { useState } from 'react';
import { Link } from '@/navigation';
import AnimateIn from '@/components/ui/AnimateIn';

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'overview', icon: 'grid_view', label: 'Overview' },
    { id: 'students', icon: 'groups', label: 'My Students' },
    { id: 'schedule', icon: 'event', label: 'Schedule' },
    { id: 'assignments', icon: 'assignment', label: 'Assignments' },
    { id: 'earnings', icon: 'account_balance_wallet', label: 'Earnings' },
  ];

  const stats = [
    { label: 'Total Students', value: '48', icon: 'groups' },
    { label: 'Hours Taught', value: '124', icon: 'schedule' },
    { label: 'Avg Rating', value: '4.9', icon: 'star' },
    { label: 'New Requests', value: '3', icon: 'notification_add' },
  ];

  const students = [
    { name: 'Abdullah Ali', course: 'Fiqh Seminar', joined: '2 weeks ago' },
    { name: 'Sarah Ahmed', course: 'Arabic Grammar', joined: '1 month ago' },
    { name: 'Omar Farooq', course: 'Tajweed Level 1', joined: '3 days ago' },
  ];

  const schedule = [
    { day: 'Today', time: '10:00 AM', title: 'Tajweed Review' },
    { day: 'Tomorrow', time: '2:00 PM', title: 'Arabic Grammar' },
    { day: 'Friday', time: '9:00 AM', title: 'Aqidah Class' },
  ];

  return (
    <div className="bg-primary min-h-screen flex text-white pt-20">
      <aside className="w-64 border-r border-accent/10 bg-[#0A0A0A] hidden lg:flex flex-col">
        <div className="p-7 border-b border-accent/15 text-center">
          <span className="font-display text-xl text-accent">AL-MADRASA</span>
          <p className="text-[8px] uppercase tracking-widest text-white/30 mt-1">Faculty Access</p>
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
          <header className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <h1 className="font-display text-3xl sm:text-4xl text-white mb-2">Teacher Dashboard</h1>
              <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">
                Shaykh Tariq Al-Hashimi
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-[10px] uppercase text-white/40">Status</p>
                <p className="text-xs font-bold text-green-400 uppercase tracking-widest">Online</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center font-bold">
                T
              </div>
            </div>
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
                  </div>
                </AnimateIn>
              ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
              <section className="xl:col-span-8 rounded-2xl border border-accent/15 bg-white/[0.03] p-6">
                <h2 className="text-xs uppercase font-bold tracking-widest text-accent mb-6">Recent Students</h2>
                <div className="space-y-4">
                  {students.map((student) => (
                    <div key={student.name} className="p-4 rounded-xl border border-accent/10 bg-black/20 flex justify-between gap-4">
                      <div>
                        <h3 className="font-display text-xl">{student.name}</h3>
                        <p className="text-white/50 text-sm">{student.course}</p>
                      </div>
                      <span className="text-xs text-white/35">{student.joined}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="xl:col-span-4 rounded-2xl border border-accent/15 bg-white/[0.03] p-6">
                <h2 className="text-xs uppercase font-bold tracking-widest text-accent mb-6">Impact</h2>
                <span className="material-symbols-outlined text-6xl text-accent/30 mb-4 block">insights</span>
                <h3 className="font-display text-2xl mb-3">Monthly Growth</h3>
                <p className="text-white/60 text-sm">Your scholarly impact increased by 15% this month.</p>
              </section>
            </div>
          </>
        )}

        {activeTab === 'students' && (
          <section className="rounded-2xl border border-accent/15 bg-white/[0.03] p-6">
            <h2 className="font-display text-3xl mb-6">My Students</h2>
            <div className="space-y-4">
              {students.map((student) => (
                <div key={student.name} className="p-5 rounded-xl border border-accent/10 flex justify-between">
                  <div>
                    <h3 className="font-display text-xl">{student.name}</h3>
                    <p className="text-white/50">{student.course}</p>
                  </div>
                  <Link href="/contact" className="text-accent text-xs uppercase tracking-widest font-bold">
                    Message
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'schedule' && (
          <section className="rounded-2xl border border-accent/15 bg-white/[0.03] p-6">
            <h2 className="font-display text-3xl mb-6">Manage Schedule</h2>
            <div className="space-y-4">
              {schedule.map((item) => (
                <div key={item.title} className="p-5 rounded-xl border border-accent/10 flex justify-between">
                  <div>
                    <h3 className="font-display text-xl">{item.title}</h3>
                    <p className="text-white/50">{item.day}</p>
                  </div>
                  <span className="text-accent font-bold">{item.time}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'assignments' && (
          <section className="rounded-2xl border border-accent/15 bg-white/[0.03] p-6">
            <h2 className="font-display text-3xl mb-4">Assignments</h2>
            <p className="text-white/60 mb-6">Create assignments and review student submissions.</p>
            <button className="px-6 py-3 rounded-full bg-accent text-primary text-xs uppercase tracking-widest font-bold">
              Create Assignment
            </button>
          </section>
        )}

        {activeTab === 'earnings' && (
          <section className="rounded-2xl border border-accent/15 bg-white/[0.03] p-6">
            <h2 className="font-display text-3xl mb-4">Earnings</h2>
            <p className="text-white/60 mb-6">Track your teaching income and monthly performance.</p>
            <div className="text-accent font-display text-5xl">$1,240</div>
          </section>
        )}
      </main>
    </div>
  );
}