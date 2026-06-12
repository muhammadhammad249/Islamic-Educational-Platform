import { useTranslations } from 'next-intl';

export default function TeacherDashboard() {
  const t = useTranslations('Teachings.dashboard.teacher');

  return (
    <div className="bg-background min-h-screen flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-accent/10 bg-primary text-white hidden md:flex flex-col">
        <div className="p-8 border-b border-white/10 text-center">
          <span className="font-display text-xl text-accent">AL-MADRASA</span>
          <p className="font-sans text-[8px] uppercase tracking-widest text-white/40 mt-1">Faculty Access</p>
        </div>
        <nav className="p-8 space-y-8 flex-grow">
          {[
            { icon: 'grid_view', label: 'Overview', active: true },
            { icon: 'groups', label: 'My Students' },
            { icon: 'event', label: 'Manage Schedule' },
            { icon: 'assignment', label: 'Assignments' },
            { icon: 'account_balance_wallet', label: 'Earnings' },
          ].map((item) => (
            <button 
              key={item.label} 
              className={`flex items-center gap-4 w-full transition-colors group ${
                item.active ? 'text-accent' : 'text-white/40 hover:text-white'
              }`}
            >
              <span className={`material-symbols-outlined text-lg ${item.active ? 'fill-1' : ''}`}>
                {item.icon}
              </span>
              <span className="font-sans text-[10px] uppercase font-bold tracking-widest">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
        <div className="p-8 border-t border-white/10">
           <button className="flex items-center gap-4 text-white/40 hover:text-red-400 transition-colors">
              <span className="material-symbols-outlined text-lg">logout</span>
              <span className="font-sans text-[10px] uppercase font-bold tracking-widest">Sign Out</span>
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-12 overflow-y-auto">
        <header className="mb-16 flex justify-between items-center">
          <div>
            <h1 className="font-display text-4xl text-primary mb-2">{t('welcome')}</h1>
            <p className="font-sans text-xs font-bold text-primary/40 uppercase tracking-[0.2em]">
              Shaykh Tariq Al-Hashimi
            </p>
          </div>
          <div className="flex items-center gap-4">
             <div className="text-right">
                <p className="font-sans text-[10px] uppercase font-bold text-primary/40">Status</p>
                <p className="font-sans text-xs font-bold text-green-600 uppercase tracking-widest">Online</p>
             </div>
             <div className="w-12 h-12 rounded-full border border-accent/20 overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ9j0QPqvj5UpRFdbw-wzyv-u9d0S49hgI-wgWtz2sF2sUej7MJKJ5U1a4aNVBtrc-3X4VZssU3QCBKWy-ybMSZ5wrHOcEFro2NKIT4XNliy0hvRZ0N4qWSGUhgXbOxFxISTbs6yZlTyo2FGBMFubQGQDClSOM6zBaVSt8xeldhr46akK_sHmlPvHxU0V4IpGxJ4SDA1xJlBndXHouhmorvXVemOqfenPzzud324pSUwCSuB_wAlK7A27VDhenzTHVL8h6ipHvu98N" 
                  alt="Avatar"
                />
             </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Stats Grid */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Total Students', val: '48', icon: 'groups' },
              { label: 'Hours Taught', val: '124', icon: 'schedule' },
              { label: 'Avg Rating', val: '4.9', icon: 'star' },
              { label: 'New Requests', val: '3', icon: 'notification_add' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white border border-accent/10 p-8 flex flex-col justify-between">
                <span className="material-symbols-outlined text-accent mb-4">{stat.icon}</span>
                <div>
                  <p className="font-display text-3xl text-primary mb-1">{stat.val}</p>
                  <p className="font-sans text-[10px] uppercase font-bold text-primary/40 tracking-widest">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Student List */}
          <div className="lg:col-span-8">
             <section className="bg-white border border-accent/10 p-10 h-full">
              <div className="flex justify-between items-center mb-10">
                <h2 className="font-sans text-[10px] uppercase font-bold text-accent tracking-widest">
                  {t('students')}
                </h2>
                <button className="font-sans text-[10px] font-bold text-primary/40 hover:text-primary uppercase tracking-widest">View All</button>
              </div>
              <div className="space-y-6">
                {[
                  { name: 'Abdullah Ali', course: 'Fiqh Seminar', joined: '2 weeks ago' },
                  { name: 'Sarah Ahmed', course: 'Arabic Grammar', joined: '1 month ago' },
                  { name: 'Omar Farooq', course: 'Tajweed Level 1', joined: '3 days ago' },
                ].map((student) => (
                  <div key={student.name} className="flex justify-between items-center p-4 border border-accent/5 hover:border-accent/20 transition-colors">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-background-warm rounded-full flex items-center justify-center font-display text-primary/40">
                         {student.name[0]}
                       </div>
                       <div>
                         <h4 className="font-display text-lg text-primary">{student.name}</h4>
                         <p className="font-sans text-xs text-primary/40">{student.course}</p>
                       </div>
                    </div>
                    <span className="font-sans text-[10px] uppercase text-primary/40 tracking-widest">{student.joined}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Impact Stats / Charts placeholder */}
          <div className="lg:col-span-4">
             <section className="bg-background-warm border border-accent/10 p-10 h-full flex flex-col justify-center text-center">
                <span className="material-symbols-outlined text-5xl text-accent/20 mb-6">insights</span>
                <h3 className="font-display text-2xl text-primary mb-4">{t('stats')}</h3>
                <p className="font-sans text-sm text-primary/60 mb-8">
                  Your scholarly impact has increased by 15% this lunar month.
                </p>
                <div className="w-full aspect-video bg-white/50 border border-dashed border-accent/20 rounded-lg flex items-center justify-center text-primary/20 italic text-xs">
                  Chart Visualization Placeholder
                </div>
             </section>
          </div>

        </div>
      </main>
    </div>
  );
}
