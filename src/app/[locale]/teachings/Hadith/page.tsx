import { Link } from '@/navigation';

const hadithBooks = [
  {
    title: 'Sahih al-Bukhari',
    urdu: 'صحیح بخاری',
    slug: 'sahih-bukhari',
    desc: 'Most authentic Hadith collection compiled by Imam Bukhari.',
  },
  {
    title: 'Sahih Muslim',
    urdu: 'صحیح مسلم',
    slug: 'sahih-muslim',
    desc: 'Authentic Hadith collection compiled by Imam Muslim.',
  },
  {
    title: 'Jami at-Tirmidhi',
    urdu: 'جامع ترمذی',
    slug: 'jami-tirmidhi',
    desc: 'Hadith collection with rulings and scholarly explanations.',
  },
  {
    title: 'Sunan Abu Dawood',
    urdu: 'سنن ابو داؤد',
    slug: 'sunan-abu-dawood',
    desc: 'Famous Hadith book focused on Islamic rulings and daily life.',
  },
  {
    title: 'Sunan an-Nasa’i',
    urdu: 'سنن نسائی',
    slug: 'sunan-nasai',
    desc: 'One of the six major Hadith collections.',
  },
  {
    title: 'Sunan Ibn Majah',
    urdu: 'سنن ابن ماجہ',
    slug: 'sunan-ibn-majah',
    desc: 'Important Hadith collection covering faith, worship, and manners.',
  },
  {
    title: 'Silsilah as-Sahihah',
    urdu: 'سلسلہ احادیث صحیحہ',
    slug: 'silsila-sahiha',
    desc: 'Collection of authenticated Hadith narrations.',
  },
  {
    title: 'Musnad Ahmad',
    urdu: 'مسند احمد',
    slug: 'musnad-ahmad',
    desc: 'Large Hadith collection compiled by Imam Ahmad ibn Hanbal.',
  },
  {
    title: 'Mishkat al-Masabih',
    urdu: 'مشکوٰۃ المصابیح',
    slug: 'mishkat',
    desc: 'Popular Hadith collection arranged by Islamic topics.',
  },
];

export default function HadithPage() {
  return (
    <main className="min-h-screen bg-primary pt-24 text-white overflow-hidden">
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-primary via-dark-section to-primary">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 1px)',
            backgroundSize: '55px 55px',
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">
              Authentic Hadith Library
            </span>

            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white">
              Hadith Collections
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-white/75 text-base sm:text-lg leading-relaxed">
              Study major Hadith books with Arabic text, Urdu translation, and
              English translation in a clean Islamic learning format.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hadithBooks.map((book) => (
              <Link
                key={book.slug}
                href={`/teachings/Hadith/${book.slug}`}
                className="group rounded-3xl border border-accent/20 bg-white/[0.04] p-7 hover:border-accent/60 hover:bg-accent/10 hover:-translate-y-2 transition-all duration-300 shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-primary transition">
                  <span className="material-symbols-outlined text-3xl">
                    auto_stories
                  </span>
                </div>

                <p className="font-arabic-display text-2xl text-accent mb-3">
                  {book.urdu}
                </p>

                <h2 className="font-display text-2xl font-bold text-white group-hover:text-accent transition">
                  {book.title}
                </h2>

                <p className="mt-4 text-sm text-white/65 leading-relaxed">
                  {book.desc}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-accent/10 pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                    Read Hadith
                  </span>

                  <span className="material-symbols-outlined text-accent group-hover:translate-x-1 transition">
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}