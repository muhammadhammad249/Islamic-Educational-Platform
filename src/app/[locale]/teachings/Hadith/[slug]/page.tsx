import { Link } from '@/navigation';
import { notFound } from 'next/navigation';

const hadithBooks = [
  {
    slug: 'sahih-bukhari',
    title: 'Sahih al-Bukhari',
    urdu: 'صحیح بخاری',
  },
  {
    slug: 'sahih-muslim',
    title: 'Sahih Muslim',
    urdu: 'صحیح مسلم',
  },
  {
    slug: 'jami-tirmidhi',
    title: 'Jami at-Tirmidhi',
    urdu: 'جامع ترمذی',
  },
  {
    slug: 'sunan-abu-dawood',
    title: 'Sunan Abu Dawood',
    urdu: 'سنن ابو داؤد',
  },
  {
    slug: 'sunan-nasai',
    title: 'Sunan an-Nasa’i',
    urdu: 'سنن نسائی',
  },
  {
    slug: 'sunan-ibn-majah',
    title: 'Sunan Ibn Majah',
    urdu: 'سنن ابن ماجہ',
  },
  {
    slug: 'silsila-sahiha',
    title: 'Silsilah as-Sahihah',
    urdu: 'سلسلہ احادیث صحیحہ',
  },
  {
    slug: 'musnad-ahmad',
    title: 'Musnad Ahmad',
    urdu: 'مسند احمد',
  },
  {
    slug: 'mishkat',
    title: 'Mishkat al-Masabih',
    urdu: 'مشکوٰۃ المصابیح',
  },
];

const sampleHadith = [
  {
    number: 'Hadith 1',
    arabic:
      'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
    urdu:
      'اعمال کا دار و مدار نیتوں پر ہے، اور ہر شخص کے لیے وہی ہے جس کی اس نے نیت کی۔',
    english:
      'Actions are judged by intentions, and every person will get what they intended.',
  },
];

export default async function HadithBookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const book = hadithBooks.find((item) => item.slug === slug);

  if (!book) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-primary pt-24 text-white">
      <section className="relative py-20 bg-gradient-to-br from-primary via-dark-section to-primary">
        <div className="max-w-5xl mx-auto px-4">
          <Link
            href="/teachings/Hadith"
            className="inline-flex items-center gap-2 text-accent text-sm font-bold mb-8"
          >
            ← Back to Hadith Collections
          </Link>

          <div className="rounded-3xl border border-accent/20 bg-white/[0.04] p-8 sm:p-10">
            <p className="font-arabic-display text-3xl text-accent mb-3">
              {book.urdu}
            </p>

            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              {book.title}
            </h1>

            <p className="mt-4 text-white/70">
              Read Hadith with Arabic text, Urdu translation, and English
              translation.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {sampleHadith.map((hadith) => (
              <article
                key={hadith.number}
                className="rounded-3xl border border-accent/20 bg-black/30 p-6 sm:p-8"
              >
                <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold">
                  {hadith.number}
                </span>

                <p
                  dir="rtl"
                  className="mt-6 font-arabic-display text-2xl sm:text-3xl leading-loose text-white"
                >
                  {hadith.arabic}
                </p>

                <div className="mt-6 border-t border-white/10 pt-6">
                  <h3 className="text-accent font-bold mb-2">
                    Urdu Translation
                  </h3>
                  <p dir="rtl" className="text-white/80 leading-loose text-lg">
                    {hadith.urdu}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-6">
                  <h3 className="text-accent font-bold mb-2">
                    English Translation
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {hadith.english}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}