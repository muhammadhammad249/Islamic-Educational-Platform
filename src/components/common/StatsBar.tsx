import { useTranslations } from 'next-intl';

export default function StatsBar() {
  const t = useTranslations('Stats');

  const stats = [
    { value: '500+', label: t('teachers'), icon: '👨‍🏫' },
    { value: '12,000+', label: t('students'), icon: '👥' },
    { value: '15', label: t('languages'), icon: '🌍' },
    { value: '98%', label: t('satisfaction'), icon: '⭐' },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-dark-section via-primary to-dark-section overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37, #D4AF37 2px, transparent 2px, transparent 10px)',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-accent mb-2 tracking-wide">
            Our Impact
          </h2>
          <p className="font-sans text-white/60 text-sm md:text-base max-w-2xl mx-auto">
            Trusted by students and educators worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/20 transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-2xl group-hover:shadow-accent/20"></div>
              
              {/* Premium inner card */}
              <div className="relative p-6 sm:p-8 text-center backdrop-blur-sm">
                {/* Icon */}
                <div className="text-4xl sm:text-5xl mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                  {stat.icon}
                </div>
                
                {/* Value */}
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-3 drop-shadow-lg group-hover:text-white transition-colors duration-300">
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="font-sans text-xs sm:text-sm uppercase tracking-widest text-white/70 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
