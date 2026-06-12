import { useTranslations } from 'next-intl';
import { TEACHERS } from '@/constants/teachers';
import TeacherCard from '@/components/teachers/TeacherCard';

export default function TeacherListingPage() {
  const t = useTranslations('Teachings.teachers.listing');

  return (
    <div className="bg-background min-h-screen">
      <main className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Filters Sidebar */}
        <aside className="md:col-span-3 space-y-12 sticky top-32 self-start">
          {/* Search */}
          <div className="relative">
            <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-accent ml-2">
              search
            </span>
            <input 
              type="text" 
              placeholder={t('searchPlaceholder')}
              className="w-full bg-transparent border-0 border-b border-accent/30 focus:ring-0 focus:border-accent py-3 pl-10 font-sans text-primary placeholder:text-primary/40 transition-colors"
            />
          </div>

          {/* Specialty Filter */}
          <div className="space-y-6">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-primary/70">
              {t('specialty')}
            </h3>
            <div className="space-y-3">
              {['quran', 'fiqh', 'arabic'].map((key) => (
                <label key={key} className="flex items-center space-x-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-accent/30 rounded-sm group-hover:border-accent transition-colors flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </div>
                  <span className="font-sans text-sm text-primary/80 group-hover:text-primary">
                    {t(`specialties.${key}`)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-accent/10"></div>

          {/* Language Filter */}
          <div className="space-y-6">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-primary/70">
              {t('language')}
            </h3>
            <select className="w-full bg-transparent border-0 border-b border-accent/30 focus:ring-0 focus:border-accent py-2 font-sans text-primary cursor-pointer">
              <option>English & Arabic</option>
              <option>Arabic Only</option>
              <option>Urdu</option>
            </select>
          </div>
        </aside>

        {/* Teacher Grid */}
        <section className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEACHERS.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </section>

      </main>
    </div>
  );
}
