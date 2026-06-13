'use client';

import { useEffect, useState } from 'react';

const surahs = [
  'Al-Fatihah', 'Al-Baqarah', 'Aal-Imran', 'An-Nisa', 'Al-Maidah',
  'Al-Anam', 'Al-Araf', 'Al-Anfal', 'At-Tawbah', 'Yunus',
  'Hud', 'Yusuf', 'Ar-Rad', 'Ibrahim', 'Al-Hijr',
  'An-Nahl', 'Al-Isra', 'Al-Kahf', 'Maryam', 'Ta-Ha',
  'Al-Anbiya', 'Al-Hajj', 'Al-Muminun', 'An-Nur', 'Al-Furqan',
  'Ash-Shuara', 'An-Naml', 'Al-Qasas', 'Al-Ankabut', 'Ar-Rum',
  'Luqman', 'As-Sajdah', 'Al-Ahzab', 'Saba', 'Fatir',
  'Ya-Sin', 'As-Saffat', 'Sad', 'Az-Zumar', 'Ghafir',
  'Fussilat', 'Ash-Shura', 'Az-Zukhruf', 'Ad-Dukhan', 'Al-Jathiyah',
  'Al-Ahqaf', 'Muhammad', 'Al-Fath', 'Al-Hujurat', 'Qaf',
  'Adh-Dhariyat', 'At-Tur', 'An-Najm', 'Al-Qamar', 'Ar-Rahman',
  'Al-Waqiah', 'Al-Hadid', 'Al-Mujadila', 'Al-Hashr', 'Al-Mumtahanah',
  'As-Saff', 'Al-Jumuah', 'Al-Munafiqun', 'At-Taghabun', 'At-Talaq',
  'At-Tahrim', 'Al-Mulk', 'Al-Qalam', 'Al-Haqqah', 'Al-Maarij',
  'Nuh', 'Al-Jinn', 'Al-Muzzammil', 'Al-Muddaththir', 'Al-Qiyamah',
  'Al-Insan', 'Al-Mursalat', 'An-Naba', 'An-Naziat', 'Abasa',
  'At-Takwir', 'Al-Infitar', 'Al-Mutaffifin', 'Al-Inshiqaq', 'Al-Buruj',
  'At-Tariq', 'Al-Ala', 'Al-Ghashiyah', 'Al-Fajr', 'Al-Balad',
  'Ash-Shams', 'Al-Layl', 'Ad-Duha', 'Ash-Sharh', 'At-Tin',
  'Al-Alaq', 'Al-Qadr', 'Al-Bayyinah', 'Az-Zalzalah', 'Al-Adiyat',
  'Al-Qariah', 'At-Takathur', 'Al-Asr', 'Al-Humazah', 'Al-Fil',
  'Quraysh', 'Al-Maun', 'Al-Kawthar', 'Al-Kafirun', 'An-Nasr',
  'Al-Masad', 'Al-Ikhlas', 'Al-Falaq', 'An-Nas',
];

export default function QuranPage() {
  const [selectedSurah, setSelectedSurah] = useState(1);
  const [arabic, setArabic] = useState<any[]>([]);
  const [english, setEnglish] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchSurah() {
      try {
        setLoading(true);

        const [arabicRes, englishRes] = await Promise.all([
          fetch(`https://api.alquran.cloud/v1/surah/${selectedSurah}/quran-uthmani`),
          fetch(`https://api.alquran.cloud/v1/surah/${selectedSurah}/en.asad`),
        ]);

        const arabicData = await arabicRes.json();
        const englishData = await englishRes.json();

        setArabic(arabicData.data.ayahs || []);
        setEnglish(englishData.data.ayahs || []);
      } catch (error) {
        console.error('Quran loading error:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchSurah();
  }, [selectedSurah]);

  const downloadSurah = () => {
    const content = arabic
      .map((ayah, index) => {
        return `${index + 1}. ${ayah.text}\nEnglish: ${
          english[index]?.text || ''
        }\n`;
      })
      .join('\n');

    const file = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(file);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${surahs[selectedSurah - 1]}-translation.txt`;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-primary text-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-dark-section to-primary py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">
              Complete Quran Pak
            </span>

            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-7xl font-bold">
              Holy Quran
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-white/75 text-base sm:text-lg">
              Read the Holy Quran with Arabic text and English translation.
              Download any Surah for offline study.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
            <aside className="rounded-3xl border border-accent/20 bg-white/[0.04] p-5 h-fit lg:sticky lg:top-28">
              <h2 className="text-xl font-bold mb-4">Surah List</h2>

              <div className="max-h-[600px] overflow-y-auto pr-2 space-y-2">
                {surahs.map((surah, index) => (
                  <button
                    key={surah}
                    onClick={() => setSelectedSurah(index + 1)}
                    className={`w-full rounded-xl px-4 py-3 text-left transition ${
                      selectedSurah === index + 1
                        ? 'bg-accent text-primary font-bold'
                        : 'bg-white/5 text-white/75 hover:bg-accent/10 hover:text-accent'
                    }`}
                  >
                    {index + 1}. {surah}
                  </button>
                ))}
              </div>
            </aside>

            <section className="rounded-3xl border border-accent/20 bg-black/30 p-5 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                  <p className="text-accent text-xs uppercase tracking-[0.25em] font-bold">
                    Selected Surah
                  </p>

                  <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                    {selectedSurah}. {surahs[selectedSurah - 1]}
                  </h2>
                </div>

                <button
                  onClick={downloadSurah}
                  className="rounded-full bg-accent px-6 py-3 text-primary text-xs font-bold uppercase tracking-[0.18em] hover:opacity-90 transition"
                >
                  Download Surah
                </button>
              </div>

              {loading ? (
                <p className="text-white/70">Loading Quran...</p>
              ) : (
                <div className="space-y-6">
                  {arabic.map((ayah, index) => (
                    <article
                      key={ayah.number}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-accent text-sm font-bold">
                          Ayah {index + 1}
                        </span>
                      </div>

                      <p
                        dir="rtl"
                        className="font-arabic-display text-2xl sm:text-3xl leading-loose text-white text-right"
                      >
                        {ayah.text}
                      </p>

                      <div className="mt-5 border-t border-white/10 pt-5">
                        <h3 className="text-accent font-bold mb-2">
                          English Translation
                        </h3>

                        <p className="text-white/75 leading-relaxed">
                          {english[index]?.text || 'Translation loading...'}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}