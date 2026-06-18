'use client';

import React, { useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { TEACHERS } from '@/constants/teachers';
import { Link } from '@/navigation';
import Button from '@/components/ui/Button';
import MoorishArchImage from '@/components/ui/MoorishArchImage';
import { motion, AnimatePresence } from 'framer-motion';

export default function TeacherProfilePage() {
  const params = useParams();
  const router = useRouter();

  const id = params?.id as string;
  const teacher = TEACHERS.find((item) => item.id === id);

  const [activeTab, setActiveTab] = useState<
    'about' | 'specializations' | 'schedule' | 'reviews'
  >('about');

  const [selectedSlot, setSelectedSlot] = useState('');

  // Modals & Interactive States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isFetchingSchedule, setIsFetchingSchedule] = useState(false);
  const [scheduleError, setScheduleError] = useState('');
  
  const [bookingStep, setBookingStep] = useState<'form' | 'success'>('form');
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);
  
  const [bookingData, setBookingData] = useState({
    date: '',
    timeSlot: '',
    sessionType: 'Tajweed & Recitation',
    notes: '',
  });

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

  // Generate next 14 calendar dates matching the teacher's weekly scheduled days
  const nextAvailableDates = useMemo(() => {
    if (!teacher || !teacher.schedule) return [];
    
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const list: { dateString: string; dayName: string; formattedDay: string; slots: string[] }[] = [];
    
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const checkDate = new Date(today);
      checkDate.setDate(today.getDate() + i);
      const dayName = daysOfWeek[checkDate.getDay()];
      
      const daySched = teacher.schedule.find((s) => s.day.toLowerCase() === dayName.toLowerCase());
      if (daySched) {
        const dateString = `${checkDate.getDate()} ${months[checkDate.getMonth()]} ${checkDate.getFullYear()}`;
        const formattedDay = `${dayName}, ${dateString}`;
        list.push({
          dateString,
          dayName,
          formattedDay,
          slots: daySched.slots,
        });
      }
    }
    return list;
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

  const openBookingModal = (initialSlot: string = '') => {
    let defaultDate = '';
    let defaultSlot = '';
    
    if (initialSlot) {
      // Format of initialSlot: "Tue - 10:00 - 11:30"
      const parts = initialSlot.split(' - ');
      const dayName = parts[0];
      const slotTime = parts.slice(1).join(' - ');
      
      const matchingDate = nextAvailableDates.find((d) => d.dayName.toLowerCase() === dayName.toLowerCase());
      if (matchingDate) {
        defaultDate = matchingDate.formattedDay;
        defaultSlot = slotTime;
      }
    }
    
    if (!defaultDate && nextAvailableDates.length > 0) {
      defaultDate = nextAvailableDates[0].formattedDay;
      defaultSlot = nextAvailableDates[0].slots[0] || '';
    }
    
    setBookingData({
      date: defaultDate,
      timeSlot: defaultSlot,
      sessionType: 'Tajweed & Recitation',
      notes: '',
    });
    setBookingStep('form');
    setIsBookingOpen(true);
    setIsScheduleOpen(false);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedVal = e.target.value;
    const selectedDateObj = nextAvailableDates.find((d) => d.formattedDay === selectedVal);
    setBookingData((prev) => ({
      ...prev,
      date: selectedVal,
      timeSlot: selectedDateObj && selectedDateObj.slots.length > 0 ? selectedDateObj.slots[0] : '',
    }));
  };

  const handleBookSession = () => {
    openBookingModal(selectedSlot);
  };

  const handleViewSchedule = () => {
    setScheduleError('');
    setIsFetchingSchedule(true);
    
    setTimeout(() => {
      // Simulate 15% error rate
      if (Math.random() < 0.15) {
        setScheduleError('Failed to fetch schedule data. The connection timed out. Please try again.');
        setIsFetchingSchedule(false);
      } else {
        setIsFetchingSchedule(false);
        setIsScheduleOpen(true);
      }
    }, 800);
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
                onClick={handleViewSchedule}
                disabled={isFetchingSchedule}
                className="cursor-pointer relative min-w-[180px]"
              >
                {isFetchingSchedule ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Fetching...
                  </span>
                ) : (
                  'View Schedule'
                )}
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

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="w-full max-w-lg bg-gradient-to-b from-[#1c1c1c] to-[#0a0a0a] border border-accent/25 rounded-3xl p-6 sm:p-8 relative z-10 shadow-2xl overflow-hidden text-left"
            >
              <button
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition cursor-pointer"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              {bookingStep === 'form' ? (
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">Book a Session</h3>
                  <p className="text-xs text-white/50 uppercase tracking-widest mb-6">With {teacher.name}</p>

                  <div className="space-y-4">
                    <div className="space-y-2 group">
                      <label className="font-sans text-[10px] uppercase font-bold text-white/40 group-focus-within:text-accent tracking-widest transition-colors block">
                        Select Available Date
                      </label>
                      <div className="relative">
                        <select
                          value={bookingData.date}
                          onChange={handleDateChange}
                          className="w-full bg-[#0D0D0D]/40 border border-accent/25 focus:border-accent text-white px-4 py-3 outline-none font-sans transition-all duration-300 rounded-xl appearance-none"
                        >
                          {nextAvailableDates.map((d) => (
                            <option key={d.formattedDay} value={d.formattedDay} className="bg-[#121212] text-white">
                              {d.formattedDay}
                            </option>
                          ))}
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-white/45 pointer-events-none">
                          keyboard_arrow_down
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 group">
                      <label className="font-sans text-[10px] uppercase font-bold text-white/40 group-focus-within:text-accent tracking-widest transition-colors block">
                        Select Time Slot (GMT)
                      </label>
                      <div className="relative">
                        <select
                          value={bookingData.timeSlot}
                          onChange={(e) => setBookingData((prev) => ({ ...prev, timeSlot: e.target.value }))}
                          className="w-full bg-[#0D0D0D]/40 border border-accent/25 focus:border-accent text-white px-4 py-3 outline-none font-sans transition-all duration-300 rounded-xl appearance-none"
                        >
                          {nextAvailableDates
                            .find((d) => d.formattedDay === bookingData.date)
                            ?.slots.map((slot) => (
                              <option key={slot} value={slot} className="bg-[#121212] text-white">
                                {slot}
                              </option>
                            ))}
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-white/45 pointer-events-none">
                          keyboard_arrow_down
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 group">
                      <label className="font-sans text-[10px] uppercase font-bold text-white/40 group-focus-within:text-accent tracking-widest transition-colors block">
                        Session Type
                      </label>
                      <div className="relative">
                        <select
                          value={bookingData.sessionType}
                          onChange={(e) => setBookingData((prev) => ({ ...prev, sessionType: e.target.value }))}
                          className="w-full bg-[#0D0D0D]/40 border border-accent/25 focus:border-accent text-white px-4 py-3 outline-none font-sans transition-all duration-300 rounded-xl appearance-none"
                        >
                          <option value="Tajweed & Recitation" className="bg-[#121212] text-white">Tajweed & Recitation</option>
                          <option value="Quran Memorization (Hifz)" className="bg-[#121212] text-white">Quran Memorization (Hifz)</option>
                          <option value="Arabic Grammar & Linguistics" className="bg-[#121212] text-white">Arabic Grammar & Linguistics</option>
                          <option value="General Islamic Consultation" className="bg-[#121212] text-white">General Islamic Consultation</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-white/45 pointer-events-none">
                          keyboard_arrow_down
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 group">
                      <label className="font-sans text-[10px] uppercase font-bold text-white/40 group-focus-within:text-accent tracking-widest transition-colors block">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        value={bookingData.notes}
                        onChange={(e) => setBookingData((prev) => ({ ...prev, notes: e.target.value }))}
                        rows={3}
                        className="w-full bg-[#0D0D0D]/40 border border-accent/25 focus:border-accent text-white px-4 py-3 outline-none font-sans transition-all duration-300 rounded-xl resize-none placeholder:text-white/20 text-sm"
                        placeholder="Share any specific learning goals or levels..."
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 border-t border-accent/15 pt-5 mt-6">
                    <button
                      type="button"
                      onClick={() => setIsBookingOpen(false)}
                      className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white hover:bg-white/5 transition cursor-pointer"
                    >
                      Cancel
                    </button>
                    <Button
                      variant="primary"
                      disabled={isBookingSubmitting || !bookingData.date || !bookingData.timeSlot}
                      onClick={() => {
                        setIsBookingSubmitting(true);
                        setTimeout(() => {
                          setIsBookingSubmitting(false);
                          setBookingStep('success');
                        }, 800);
                      }}
                      className="relative min-w-[150px] cursor-pointer"
                    >
                      {isBookingSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Booking...
                        </span>
                      ) : (
                        'Confirm Booking'
                      )}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 flex flex-col items-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-primary mb-6 shadow-lg shadow-accent/20">
                    <span className="material-symbols-outlined text-4xl font-bold">check</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-white mb-3">Booking Confirmed!</h3>
                  <p className="text-sm text-white/70 max-w-sm mx-auto leading-relaxed mb-8">
                    Your session with <span className="text-accent font-bold">{teacher.name}</span> has been scheduled for <span className="text-white font-semibold">{bookingData.date}</span> at <span className="text-white font-semibold">{bookingData.timeSlot}</span>. An email has been sent with link details.
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => setIsBookingOpen(false)}
                    className="w-full sm:w-auto cursor-pointer"
                  >
                    Close Portal
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Schedule Modal */}
      <AnimatePresence>
        {isScheduleOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsScheduleOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="w-full max-w-2xl bg-gradient-to-b from-[#1c1c1c] to-[#0a0a0a] border border-accent/25 rounded-3xl p-6 sm:p-8 relative z-10 shadow-2xl overflow-hidden text-left"
            >
              <button
                onClick={() => setIsScheduleOpen(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition cursor-pointer"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">Available Sessions</h3>
              <p className="text-xs text-white/50 uppercase tracking-widest mb-6">Select a slot to start booking with {teacher.name}</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[350px] overflow-y-auto pr-1">
                {availableSlots.length > 0 ? (
                  availableSlots.map((item) => (
                    <button
                      key={item.value}
                      onClick={() => {
                        openBookingModal(item.value);
                      }}
                      className="p-4 rounded-xl border border-accent/15 bg-accent/5 hover:border-accent hover:bg-accent/15 transition text-left group cursor-pointer flex flex-col justify-between min-h-[90px]"
                    >
                      <span className="text-[10px] uppercase font-bold tracking-widest text-accent group-hover:text-white transition">
                        {item.day}
                      </span>
                      <span className="text-xs font-semibold text-white/80 mt-1 block">
                        {item.slot}
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="col-span-full py-12 text-center text-white/30 text-sm">
                    No schedule available.
                  </div>
                )}
              </div>

              <div className="flex justify-end border-t border-accent/15 pt-5 mt-6">
                <button
                  onClick={() => setIsScheduleOpen(false)}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Connection Error Toast */}
      {scheduleError && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm rounded-2xl border border-red-500/30 bg-[#151212]/95 px-5 py-4 shadow-2xl shadow-red-500/10 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-red-500 text-lg mt-0.5 animate-pulse">warning</span>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-white">Connection Error</h4>
              <p className="text-xs text-white/70 mt-1">{scheduleError}</p>
              <div className="flex gap-3 mt-3">
                <button
                  onClick={handleViewSchedule}
                  className="text-xs font-bold text-accent hover:text-white transition uppercase tracking-wider cursor-pointer"
                >
                  Retry
                </button>
                <button
                  onClick={() => setScheduleError('')}
                  className="text-xs font-bold text-white/40 hover:text-white transition uppercase tracking-wider cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}