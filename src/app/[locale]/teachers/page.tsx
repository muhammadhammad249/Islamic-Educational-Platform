'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { TEACHERS } from '@/constants/teachers';

export default function TeacherListingPage() {
  const t = useTranslations('Teachings.teachers.listing');

  const [search, setSearch] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const specialties = [
    { key: 'all', label: 'All Teachers' },
    { key: 'quran', label: t('specialties.quran') },
    { key: 'fiqh', label: t('specialties.fiqh') },
    { key: 'arabic', label: t('specialties.arabic') },
  ];

  const filteredTeachers = useMemo(() => {
    return TEACHERS.filter((teacher) => {
      const name = teacher.name?.toLowerCase() || '';
      const specialty = teacher.specialty?.toLowerCase() || '';
      const bio = teacher.bio?.toLowerCase() || '';
      const query = search.toLowerCase();

      const matchesSearch =
        name.includes(query) ||
        specialty.includes(query) ||
        bio.includes(query);

      const matchesSpecialty =
        selectedSpecialty === 'all' || specialty.includes(selectedSpecialty);

      return matchesSearch && matchesSpecialty;
    });
  }, [search, selectedSpecialty]);

  return (
    <div className="bg-primary min-h-screen text-white pt-24">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-bold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Certified Islamic Teachers
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-5">
            Find Your Teacher
          </h1>

          <p className="text-white/65 text-sm sm:text-base leading-relaxed">
            Search qualified Quran, Arabic, Fiqh, and Islamic studies teachers.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-3 space-y-8 lg:sticky lg:top-28 self-start">
            <div className="rounded-3xl border border-accent/15 bg-white/[0.03] p-6 backdrop-blur-xl">
              <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-6">
                Filters
              </h2>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="teacher-search"
                    className="text-[10px] uppercase tracking-widest text-white/40 font-bold"
                  >
                    Search
                  </label>

                  <input
                    id="teacher-search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder={t('searchPlaceholder')}
                    className="mt-2 block w-full h-12 rounded-xl bg-black/30 border border-accent/20 focus:border-accent outline-none text-white placeholder:text-white/25 px-5 text-sm text-left"
                  />
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-3">
                    {t('specialty')}
                  </h3>

                  <div className="space-y-2">
                    {specialties.map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setSelectedSpecialty(item.key)}
                        className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition ${
                          selectedSpecialty === item.key
                            ? 'bg-accent text-primary border-accent'
                            : 'bg-white/[0.02] text-white/70 border-accent/10 hover:border-accent/35 hover:text-accent'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSearch('');
                    setSelectedSpecialty('all');
                  }}
                  className="w-full py-3 rounded-xl border border-accent/30 text-accent hover:bg-accent hover:text-primary transition text-xs uppercase tracking-widest font-bold"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </aside>

          <section className="lg:col-span-9">
            <p className="text-sm text-white/50 mb-6">
              Showing {filteredTeachers.length} teacher(s)
            </p>

            {filteredTeachers.length === 0 ? (
              <div className="rounded-3xl border border-accent/15 bg-white/[0.03] p-10 text-center">
                <h3 className="text-2xl font-display mb-3">No teacher found</h3>
                <p className="text-white/50 text-sm">
                  Try changing your search or filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {filteredTeachers.map((teacher) => (
                  <Link
                    key={teacher.id}
                    href={`/teachers/${teacher.id}`}
                    className="group block rounded-3xl overflow-hidden border border-accent/15 bg-gradient-to-b from-white/[0.05] to-black/30 hover:border-accent/50 hover:-translate-y-2 transition-all duration-300 shadow-xl"
                  >
                    <div className="aspect-[1/1.15] overflow-hidden bg-accent/10">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="font-display text-2xl text-white group-hover:text-accent transition mb-2">
                        {teacher.name}
                      </h3>

                      <p className="text-accent text-xs uppercase tracking-widest font-bold mb-4">
                        {teacher.specialty}
                      </p>

                      <p className="text-white/55 text-sm line-clamp-3 mb-6">
                        {teacher.bio}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-widest text-white/40">
                          View Profile
                        </span>
                        <span className="material-symbols-outlined text-accent group-hover:translate-x-1 transition">
                          arrow_forward
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}