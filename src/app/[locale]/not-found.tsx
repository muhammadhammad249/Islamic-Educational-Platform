import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Button from '@/components/ui/Button';

export default function NotFound() {
  const t = useTranslations('Teachings.support.error404');

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-8">
      <div className="relative mb-12">
        <span className="font-display text-[15vw] leading-none text-primary/5 select-none">404</span>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-arabic-display text-4xl text-accent" dir="rtl">
            ضَلَّ ٱلسَّبِيلَ
          </span>
        </div>
      </div>
      
      <h1 className="font-display text-5xl text-primary mb-6">{t('title')}</h1>
      <p className="font-sans text-lg text-primary/40 mb-12 max-w-md mx-auto">
        {t('subtitle')}
      </p>

      <Link href="/">
        <Button variant="primary" className="px-12 py-4">
          {t('back')}
        </Button>
      </Link>
    </div>
  );
}
