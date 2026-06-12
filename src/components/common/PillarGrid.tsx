import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function PillarGrid() {
  const t = useTranslations('Pillars');

 const pillars = [
  { icon: 'menu_book', key: 'aqidah', href: '/teachings/pillars' },
  { icon: 'gavel', key: 'fiqh', href: '/teachings/manners' },
  { icon: 'translate', key: 'arabic', href: '/teachings/quran-intro' },
  { icon: 'history_edu', key: 'tafsir', href: '/teachings/seerah' },
  { icon: 'favorite', key: 'tazkiyah', href: '/teachings/iman' },
];

  return (
    <section
      id="teachings"
      className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-b from-primary via-dark-section to-primary overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #D4AF37 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 md:mb-28">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 tracking-wide drop-shadow-lg">
            {t('title')}
          </h2>

          <p className="font-sans text-white/60 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Master Islamic knowledge through our comprehensive curriculum
          </p>

          <div className="flex justify-center gap-3">
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-accent to-transparent rounded-full" />
            <div className="w-2 h-2 bg-accent rounded-full" />
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-accent to-transparent rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <Link
              key={pillar.key}
              href={pillar.href}
              className="group cursor-pointer h-full block"
              style={{
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              <div className="relative h-full bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-3xl border border-accent/20 p-6 sm:p-8 transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-3 overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent/5 rounded-full -ml-8 -mb-8" />

                <div className="relative flex flex-col items-center text-center h-full">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 mb-6 sm:mb-8 flex items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30 text-accent transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:shadow-2xl group-hover:shadow-accent/40">
                    <span className="material-symbols-outlined text-2xl sm:text-4xl">
                      {pillar.icon}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300 drop-shadow-md">
                    {t(`items.${pillar.key}.title`)}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-white/70 mb-6 sm:mb-8 leading-relaxed group-hover:text-white/80 transition-colors duration-300 flex-grow">
                    {t(`items.${pillar.key}.desc`)}
                  </p>

                  <div className="w-10 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}