import type { Metadata } from 'next';
import {
  Inter,
  Cinzel_Decorative,
  Amiri,
  Noto_Naskh_Arabic,
} from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollGlitter from '@/components/ui/ScrollGlitter';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const cinzel = Cinzel_Decorative({
  variable: '--font-cinzel',
  weight: ['400', '700'],
  subsets: ['latin'],
});

const amiri = Amiri({
  variable: '--font-amiri',
  weight: ['400', '700'],
  subsets: ['arabic'],
});

const notoNaskh = Noto_Naskh_Arabic({
  variable: '--font-noto-naskh',
  subsets: ['arabic'],
});

export const metadata: Metadata = {
  title: 'Islamic Educational Platform',
  description:
    'Learn Quran and Islamic teachings with modern design, structured courses, expert teachers, and interactive learning sessions.',
};

const supportedLocales = ['en', 'ar', 'ur'];

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  const isRtl = locale === 'ar' || locale === 'ur';

  return (
    <html
      lang={locale}
      dir={isRtl ? 'rtl' : 'ltr'}
      className="h-full antialiased scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>

      <body
        className={`${inter.variable} ${cinzel.variable} ${amiri.variable} ${notoNaskh.variable} min-h-full flex flex-col font-sans bg-primary text-white overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages}>
          <ScrollGlitter />
          <Navbar />

          <main className="flex-grow">
            {children}
          </main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}