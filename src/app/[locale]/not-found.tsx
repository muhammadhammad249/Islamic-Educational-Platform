'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function NotFound() {
  const t = useTranslations('Teachings.support.error404');

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-dark-section to-primary flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">

        <div className="relative mb-10">
          <h1 className="font-display text-[120px] sm:text-[180px] md:text-[240px] leading-none text-accent/10 select-none">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-arabic-display text-2xl sm:text-4xl md:text-5xl text-accent"
              dir="rtl"
            >
              ضَلَّ ٱلسَّبِيلَ
            </span>
          </div>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl text-white mb-6">
          {t('title')}
        </h2>

        <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-4 rounded-full bg-accent text-primary font-bold text-xs uppercase tracking-widest hover:opacity-90 transition"
          >
            {t('back')}
          </Link>

          <Link
            href="/teachings"
            className="px-8 py-4 rounded-full border border-accent/40 text-accent font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-primary transition"
          >
            Browse Teachings
          </Link>
        </div>

      </div>
    </div>
  );
}