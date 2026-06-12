import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../navigation';

export default getRequestConfig(async ({ locale }) => {
  // If locale is undefined or invalid, fallback or 404
  if (!locale || !routing.locales.includes(locale as any)) {
    // If it's a known valid path but locale is missing, we might want to default to 'en'
    // but for the [locale] segment, it should usually be present.
    if (!locale) {
      console.warn('Locale is undefined, falling back to defaultLocale');
      locale = routing.defaultLocale;
    } else {
      notFound();
    }
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});