import { TEACHERS } from '@/constants/teachers';
import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import MoorishArchImage from '@/components/ui/MoorishArchImage';
import Button from '@/components/ui/Button';

export default async function TeacherProfilePage({ 
  params 
}: { 
  params: Promise<{ id: string, locale: string }> 
}) {
  const { id } = await params;
  const teacher = TEACHERS.find((t) => t.id === id);

  if (!teacher) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Header */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-8 flex flex-col items-center text-center">
          <div className="w-48 h-48 rounded-full border-2 border-accent overflow-hidden mb-8 shadow-2xl">
            <img 
              src={teacher.image} 
              alt={teacher.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-display text-5xl mb-2">{teacher.name}</h1>
          <p className="font-arabic-display text-2xl text-accent mb-12">
            {teacher.specialty}
          </p>
          <Button variant="primary" size="lg" className="flex items-center gap-2">
            <span className="material-symbols-outlined fill-1">calendar_month</span>
            Book a Session
          </Button>
        </div>
      </section>

      {/* Tabs Placeholder (Visual only) */}
      <nav className="border-b border-accent/10 sticky top-20 z-40 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 flex gap-8 font-sans text-xs font-bold uppercase tracking-widest overflow-x-auto">
          {['About', 'Specializations', 'Schedule', 'Reviews'].map((tab, i) => (
            <button 
              key={tab} 
              className={`py-6 relative group transition-colors ${
                i === 0 ? 'text-primary' : 'text-primary/40 hover:text-primary'
              }`}
            >
              {tab}
              {i === 0 && (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent rotate-45"></span>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-24 space-y-32">
        
        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7 space-y-8">
            <h2 className="font-display text-4xl text-primary">A Legacy of Knowledge</h2>
            <p className="font-sans text-lg text-primary/70 leading-relaxed">
              {teacher.bio}
            </p>
          </div>
          <div className="md:col-span-5 relative">
            <MoorishArchImage 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxDxVGYI5qTM9Whp3QGI7OXbTIxaFx_QV8w2nwQOckVC-BFk5IwcnaVPji3ViaDQS_1OeAOFlCm5NheMuaqvF2KzC5iqSlOuap7y3S1OcJr0pZqq2dqs_VJHb1dQHOwVC193SHdJ50uBX4xxX5akcOUoaj4dEUkQmpTQG-pnyRBGeL2G-da1tQxUvd1Xe1NJTY4IZq87D9JJC-UURDfhe-DEjkFRa-hXhg0xTm4C-EK1V_hJzJalBSHe5AC2UEqEiSPL0v-zkIAeYx" 
              alt="Knowledge"
              className="aspect-[1/1.4] border border-accent/10"
            />
          </div>
        </div>

        {/* Specializations (Bento) */}
        <div>
          <h2 className="font-display text-4xl text-primary mb-12 text-center">Areas of Mastery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teacher.mastery.map((item, i) => (
              <div 
                key={i} 
                className={`p-10 border border-accent/10 flex flex-col justify-between min-h-[300px] ${
                  i === 0 ? 'md:col-span-2 bg-background-warm' : 'bg-white'
                }`}
              >
                <div>
                  <span className="material-symbols-outlined text-accent text-4xl mb-6">
                    {i === 0 ? 'menu_book' : 'balance'}
                  </span>
                  <h3 className="font-display text-2xl text-primary mb-4">{item.title}</h3>
                  <p className="font-sans text-primary/60">{item.description}</p>
                </div>
                <div className="font-sans text-[10px] font-bold text-accent uppercase tracking-widest mt-8">
                  {item.level} Level
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-4">
            <h2 className="font-display text-4xl text-primary">Availability</h2>
            <p className="font-sans text-[10px] font-bold text-primary/40 uppercase tracking-widest">
              Times shown in your local timezone
            </p>
          </div>
          <div className="border border-accent/10 bg-white overflow-x-auto">
            <div className="grid grid-cols-7 min-w-[800px] border-b border-accent/10 divide-x divide-accent/10 font-sans text-[10px] font-bold uppercase tracking-widest bg-background-warm">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className="p-4 text-center">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 min-w-[800px] divide-x divide-accent/10 text-center font-sans">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => {
                const daySchedule = teacher.schedule.find(s => s.day === day);
                return (
                  <div key={day} className="p-2 space-y-2 min-h-[120px]">
                    {daySchedule ? daySchedule.slots.map(slot => (
                      <div key={slot} className="py-2 px-1 bg-accent/10 text-primary text-[10px] border border-accent/20 cursor-pointer hover:bg-accent hover:text-white transition-colors">
                        {slot}
                      </div>
                    )) : (
                      <div className="py-2 text-primary/20 text-[10px]">Unavailable</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
