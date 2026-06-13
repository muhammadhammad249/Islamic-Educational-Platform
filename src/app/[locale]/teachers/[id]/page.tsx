'use client';

import { useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { TEACHERS } from '@/constants/teachers';
import { Link } from '@/navigation';
import Button from '@/components/ui/Button';
import MoorishArchImage from '@/components/ui/MoorishArchImage';

export default function TeacherProfilePage() {
  const params = useParams();
  const router = useRouter();

  const id = params?.id as string;
  const teacher = TEACHERS.find((item) => item.id === id);

  const [activeTab, setActiveTab] = useState<
    'about' | 'specializations' | 'schedule' | 'reviews'
  >('about');

  const [selectedSlot, setSelectedSlot] = useState('');

  const availableSlots = useMemo(() => {
    if (!teacher) return [];

    return (
      teacher.schedule?.flatMap((day: any) =>
        day.slots.map((slot: string) => ({
          day: day.day,
          slot,
          value: `${day.day} - ${slot}`,
        }))
      ) || []
    );
  }, [teacher]);

  if (!teacher) {
    return (
      <div className="bg-primary min-h-screen text-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="font-display text-4xl mb-4">Teacher Not Found</h1>
          <p className="text-white/60 mb-8">
            The teacher profile you are looking for does not exist.
          </p>
          <Link
            href="/teachers"
            className="inline-flex px-6 py-3 rounded-full bg-accent text-primary font-bold text-xs uppercase tracking-widest"
          >
            Back to Teachers
          </Link>
        </div>
      </div>
    );
  }

  const handleBookSession = () => {
    const message = selectedSlot
      ? `Assalamu Alaikum, I want to book a session with ${teacher.name}. Selected slot: ${selectedSlot}`
      : `Assalamu Alaikum, I want to book a session with ${teacher.name}. Please share available timings.`;

    router.push(
      `/contact?teacher=${encodeURIComponent(
        teacher.name
      )}&message=${encodeURIComponent(message)}`
    );
  };

  return (
    <div className="bg-primary min-h-screen text-white pt-20">
      <section className="relative overflow-hidden py-20 sm:py-24 border-b border-accent/15">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-black/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-accent/50 overflow-hidden shadow-2xl shadow-accent/10">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 text-center lg:text-left">
            <Link
              href="/teachers"
              className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-widest font-bold mb-6 hover:text-white transition"
            >
              <span className="material-symbols-outlined text-sm">
                arrow_back
              </span>
              Back to Teachers
            </Link>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">
              {teacher.name}
            </h1>

            <p className="text-accent text-lg sm:text-xl uppercase tracking-widest font-bold mb-6">
              {teacher.specialty}
            </p>

            <p className="text-white/65 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              {teacher.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                onClick={handleBookSession}
                className="cursor-pointer"
              >
                Book a Session
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => setActiveTab('schedule')}
                className="cursor-pointer"
              >
                View Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>

      <nav className="sticky top-20 z-40 bg-primary/90 backdrop-blur-xl border-b border-accent/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-3 sm:gap-6 overflow-x-auto">
          {[
            { key: 'about', label: 'About' },
            { key: 'specializations', label: 'Specializations' },
            { key: 'schedule', label: 'Schedule' },
            { key: 'reviews', label: 'Reviews' },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key as any)}
              className={`py-5 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition relative ${
                activeTab === tab.key
                  ? 'text-accent'
                  : 'text-white/40 hover:text-white'
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-accent rounded-full" />
              )}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {activeTab === 'about' && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl text-white">
                A Legacy of Knowledge
              </h2>

              <p className="text-white/65 leading-relaxed text-sm sm:text-base">
                {teacher.bio}
              </p>
            </div>

            <div className="lg:col-span-5">
              <MoorishArchImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxDxVGYI5qTM9Whp3QGI7OXbTIxaFx_QV8w2nwQOckVC-BFk5IwcnaVPji3ViaDQS_1OeAOFlCm5NheMuaqvF2KzC5iqSlOuap7y3S1OcJr0pZqq2dqs_VJHb1dQHOwVC193SHdJ50uBX4xxX5akcOUoaj4dEUkQmpTQG-pnyRBGeL2G-da1tQxUvd1Xe1NJTY4IZq87D9JJC-UURDfhe-DEjkFRa-hXhg0xTm4C-EK1V_hJzJalBSHe5AC2UEqEiSPL0v-zkIAeYx"
                alt="Knowledge"
                className="aspect-[1/1.35] border border-accent/20"
              />
            </div>
          </section>
        )}

        {activeTab === 'specializations' && (
          <section>
            <h2 className="font-display text-3xl sm:text-4xl text-white mb-10 text-center">
              Areas of Mastery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {teacher.mastery?.map((item: any, index: number) => (
                <div
                  key={index}
                  className={`p-8 rounded-3xl border border-accent/15 bg-white/[0.03] hover:border-accent/40 transition ${
                    index === 0 ? 'md:col-span-2' : ''
                  }`}
                >
                  <span className="material-symbols-outlined text-accent text-4xl mb-6 block">
                    {index === 0 ? 'menu_book' : 'balance'}
                  </span>

                  <h3 className="font-display text-2xl text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-8">
                    {item.description}
                  </p>

                  <div className="text-[10px] font-bold text-accent uppercase tracking-widest">
                    {item.level} Level
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'schedule' && (
          <section>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl text-white mb-2">
                  Availability
                </h2>
                <p className="text-white/45 text-xs uppercase tracking-widest">
                  Select a time slot and book your session.
                </p>
              </div>

              <Button
                variant="primary"
                onClick={handleBookSession}
                className="cursor-pointer"
              >
                Book Selected Slot
              </Button>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-accent/15 bg-white/[0.03]">
              <div className="grid grid-cols-7 min-w-[800px] border-b border-accent/15 divide-x divide-accent/10 text-center text-xs font-bold uppercase tracking-widest bg-accent/10">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
                  (day) => (
                    <div key={day} className="p-4 text-accent">
                      {day}
                    </div>
                  )
                )}
              </div>

              <div className="grid grid-cols-7 min-w-[800px] divide-x divide-accent/10 text-center">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
                  (day) => {
                    const daySchedule = teacher.schedule?.find(
                      (scheduleItem: any) => scheduleItem.day === day
                    );

                    return (
                      <div key={day} className="p-3 space-y-2 min-h-[140px]">
                        {daySchedule ? (
                          daySchedule.slots.map((slot: string) => {
                            const value = `${day} - ${slot}`;
                            const active = selectedSlot === value;

                            return (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setSelectedSlot(value)}
                                className={`w-full py-2 px-2 rounded-lg text-[11px] border transition ${
                                  active
                                    ? 'bg-accent text-primary border-accent'
                                    : 'bg-accent/10 text-white border-accent/20 hover:bg-accent hover:text-primary'
                                }`}
                              >
                                {slot}
                              </button>
                            );
                          })
                        ) : (
                          <div className="py-2 text-white/20 text-[10px]">
                            Unavailable
                          </div>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {selectedSlot && (
              <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/10 p-5 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
                <p className="text-sm text-white/80">
                  Selected Slot:{' '}
                  <span className="text-accent font-bold">{selectedSlot}</span>
                </p>

                <button
                  type="button"
                  onClick={handleBookSession}
                  className="px-5 py-3 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-widest"
                >
                  Continue Booking
                </button>
              </div>
            )}
          </section>
        )}

        {activeTab === 'reviews' && (
          <section className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl text-white mb-10 text-center">
              Student Reviews
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Excellent teacher with clear explanations and patient guidance.',
                'The sessions helped me improve Quran reading and understanding.',
                'Very professional, punctual, and knowledgeable teacher.',
                'Highly recommended for beginners and advanced students.',
              ].map((review, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-accent/15 bg-white/[0.03] p-7"
                >
                  <div className="flex text-accent mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="material-symbols-outlined text-lg"
                      >
                        star
                      </span>
                    ))}
                  </div>

                  <p className="text-white/65 text-sm leading-relaxed">
                    "{review}"
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}