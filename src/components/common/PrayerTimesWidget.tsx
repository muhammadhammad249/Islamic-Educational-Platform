'use client';

import { useEffect, useState } from 'react';

type Prayer = {
  name: string;
  time: string;
  minutes: number;
};

export default function PrayerTimesWidget() {
  const [islamicDate, setIslamicDate] = useState('');
  const [islamicMonth, setIslamicMonth] = useState('');
  const [prayers, setPrayers] = useState<Prayer[]>([]);
  const [nextPrayer, setNextPrayer] = useState<Prayer | null>(null);

  const cleanTime = (time: string) => time.split(' ')[0];

  const timeToMinutes = (time: string) => {
    const [hours, minutes] = cleanTime(time).split(':').map(Number);
    return hours * 60 + minutes;
  };

  const getPakistanMinutes = () => {
    const now = new Date();

    const pakistanTime = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Karachi',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(now);

    const [hours, minutes] = pakistanTime.split(':').map(Number);
    return hours * 60 + minutes;
  };

  useEffect(() => {
    async function fetchPrayerTimes() {
      try {
        const res = await fetch(
          'https://api.aladhan.com/v1/timingsByCity?city=Gujrat&country=Pakistan&method=1'
        );

        const data = await res.json();
        const timings = data.data.timings;
        const hijri = data.data.date.hijri;

        const prayerList: Prayer[] = [
          { name: 'Fajr', time: cleanTime(timings.Fajr), minutes: timeToMinutes(timings.Fajr) },
          { name: 'Dhuhr', time: cleanTime(timings.Dhuhr), minutes: timeToMinutes(timings.Dhuhr) },
          { name: 'Asr', time: cleanTime(timings.Asr), minutes: timeToMinutes(timings.Asr) },
          { name: 'Maghrib', time: cleanTime(timings.Maghrib), minutes: timeToMinutes(timings.Maghrib) },
          { name: 'Isha', time: cleanTime(timings.Isha), minutes: timeToMinutes(timings.Isha) },
        ];

        const currentMinutes = getPakistanMinutes();

        const upcoming =
          prayerList.find((prayer) => prayer.minutes > currentMinutes) ||
          prayerList[0];

        setPrayers(prayerList);
        setNextPrayer(upcoming);
        setIslamicMonth(hijri.month.en);
        setIslamicDate(`${hijri.day} ${hijri.month.en} ${hijri.year} AH`);
      } catch (error) {
        console.error('Prayer Times Error:', error);
      }
    }

    fetchPrayerTimes();

    const interval = setInterval(fetchPrayerTimes, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-40 w-full border-b border-accent/15 bg-gradient-to-br from-primary via-dark-section to-primary px-3 py-3 text-white shadow-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-2xl border border-accent/20 bg-black/35 px-4 py-3 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
        <div className="text-center lg:text-left">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
            Islamic Date
          </p>

          <h3 className="mt-1 text-base font-bold leading-tight text-white md:text-lg">
            {islamicDate || 'Loading...'}
          </h3>

          <p className="text-[11px] text-white/65">
            Islamic Month: {islamicMonth || 'Loading...'}
          </p>
        </div>

        {nextPrayer && (
          <div className="rounded-xl border border-accent/25 bg-accent/10 px-5 py-2 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
              Next Prayer
            </p>

            <div className="mt-1 flex items-center justify-center gap-5">
              <span className="text-base font-bold text-white">
                {nextPrayer.name}
              </span>
              <span className="text-base font-semibold text-white">
                {nextPrayer.time}
              </span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {prayers.map((prayer) => (
            <div
              key={prayer.name}
              className={`min-w-[82px] rounded-xl border px-3 py-2 text-center transition ${
                nextPrayer?.name === prayer.name
                  ? 'border-accent/50 bg-accent/15'
                  : 'border-white/10 bg-white/10'
              }`}
            >
              <p className="text-[11px] text-white/70">{prayer.name}</p>
              <p className="text-sm font-semibold text-white">{prayer.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}