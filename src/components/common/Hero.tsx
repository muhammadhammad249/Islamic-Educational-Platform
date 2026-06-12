import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import AnimateIn from '@/components/ui/AnimateIn';
import Hero3D from '@/components/ui/Hero3D';

export default function Hero() {
  const t = useTranslations('Index');

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-primary via-dark-section to-primary"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW7fXAv4Kib5Ej5XGXjNTmF9gsLk2XVgt_YRiS1hZp8dwZES-hBMWWWTnkgIybqn7EYdJX1fJEIXz2K4UaXMBDbDabcINfK3KRDeisGrPSHsuM4CoXQAzaEH0mC-PsNr2RLWk4QGQ58_mvInXuRSEpCUJxfZYZsjE3fwYCoUHQjd7mP-PegWa1T2c3gh8HjuIQ9OmvDr-Sg5MhFUTkfZ-Ixi2jKoASZQqqZLvjTEPqHumgS8f4kZF-GO8MQIkf5-j5vQ189o4JEGpX"
          alt="Islamic Architecture Background"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-dark-section/95" />

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />

        <Hero3D />
      </div>

      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <AnimateIn direction="down">
          <div className="font-arabic-display text-2xl sm:text-3xl md:text-4xl text-accent mb-6 sm:mb-8 opacity-95 drop-shadow-lg">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white max-w-5xl mx-auto leading-tight tracking-tight font-bold drop-shadow-lg">
              {t('title')}
            </h1>

            <div className="flex justify-center gap-2 sm:gap-3">
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-accent via-accent to-transparent rounded-full" />
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-transparent via-accent to-accent rounded-full" />
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <p className="font-sans text-base sm:text-lg md:text-xl text-white/85 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light drop-shadow-md">
            {t('description')}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.45} direction="none">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center flex-wrap">
            <Link href="#teachers">
              <Button variant="primary" size="lg">
                Begin Your Journey
              </Button>
            </Link>

            <Link href="#teachings">
              <Button variant="outline" size="lg">
                Explore Curriculum
              </Button>
            </Link>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.6} direction="down">
          <a
            href="#stats"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <div className="flex flex-col items-center gap-2 text-accent/60 hover:text-accent transition-colors">
              <span className="text-xs font-sans uppercase tracking-widest">
                Scroll
              </span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}