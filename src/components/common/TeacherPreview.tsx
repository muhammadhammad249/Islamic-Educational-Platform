import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function TeacherPreview() {
  const t = useTranslations('Teachers');

  const teachers = [
    {
      key: 'abdullah',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRDfrVOX7eh0J3EmKriJchVM1WtmcSCiXFX-89sxIPFijN8P-rFzI4jE-VjegEPXH6Vq_iK2-LGuIVly7TPuZEZ-mV_zngQ26984lCsyU2B_7btJW1ZVBRCnInL4pDK73ONuh9K0BEqRRbktUTfdcFximu7LPAtvxW9u9IA2S7tfh8RkU6FHWgtuR4qsgPeMgvsnVEF5sH-jxc_uHczwllkK_9Da2dkejMHmTxaWqJJMA1P1u77fkSDIlbk8y0FikTsXFLC8_-9GyX',
    },
    {
      key: 'hasan',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM8a7m7mYMFkin-Ld6VmGG6i8LjijzSkLKeDnlxbccCe2WEDpwRXIN8iHZskPnyGUoa7_GEQGhmLPqKfdlHL5xIeZRPy11sFwUoJ4EoaUWKK-08zreZ4O8zTayVTHetZfTHTb4vZNvXjI0Mcd5ABfIaA0l1E-lKSm0b87rlY4lb0EMYYm89nzZ3jcMkJnZ4DuRCFV0MBzUkZc6BzziUQ3aLdmM7Q3IAI7csCUGuck4E_C8PnOHDWdAM3BuKbwa47__5bhQYLdFye-y',
    },
    {
      key: 'zainab',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUkQuwzXW0bcPgVu0JhlU1LS7TC9V_DTGoIJTEbkRQ1dmqGf7FocmWhsXW-swzoVoDy0kd5gOFIqj87RJ4U2GSyaOswbaUn0tTuIiL3SFSRvzSX-FJfcM5-oIQ19aBBdFlx8DqpJkwirljDMltAs6jOuQ67MFpkwa1Cq1FcW2SIdD_ZFrmEaPlhDutKbL69tZRg2yodOfgJWSydZJTGaFLy4nA2U1l-4iKePONNpg-gMs75zsvzEJx1bJP_j-iSdAOicqervse1z10',
    },
    {
      key: 'tariq',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOYxqy2T9eM_cb1aiXax2m3NqAM4atxfwKdviyuK7h9aVnhKvhH45kpHHpSalFc31fewUwAz0Ex67CC38p25uca1DcBHtig-4m-xmKo_olXdKLPmj9TIjdaCfctD6O4meTaKY7qwo4ONP8DeYD4VCFPqwm2gGHzO0QuN9Vz8FPxOmS6pyzaltQp_uUfzs3Kvk6NDDuDh1GYm0V_Oi9BJQMotFTXmBHPhO8sVXCOME_HYhpA8IuJlwuINB4NGPbeVOQrkhr9MAkrW7w',
    },
  ];

  return (
    <section
      id="teachers"
      className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-b from-dark-section via-primary to-dark-section overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, #D4AF37, #D4AF37 1px, transparent 1px, transparent 10px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 tracking-wide drop-shadow-lg">
              {t('title')}
            </h2>

            <p className="font-sans text-white/70 text-sm sm:text-base md:text-lg leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          <Link
            href="/teachers"
            className="inline-flex font-sans font-semibold text-accent uppercase tracking-widest text-xs sm:text-sm items-center gap-2 sm:gap-3 group hover:text-white transition-all duration-300 px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-accent/30 hover:border-accent/60 hover:bg-accent/10"
          >
            {t('viewAll')}
            <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-2">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teachers.map((teacher, idx) => (
            <Link
              key={teacher.key}
              href={`/teachers#${teacher.key}`}
              className="group cursor-pointer h-full block"
              style={{
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              <div className="relative bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl border border-accent/20 overflow-hidden transition-all duration-500 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-3 h-full flex flex-col">
                <div className="relative aspect-[1/1.3] overflow-hidden bg-gradient-to-b from-accent/20 to-accent/5">
                  <img
                    src={teacher.image}
                    alt={t(`list.${teacher.key}.name`)}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="relative flex-1 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl md:text-2xl text-white mb-2 sm:mb-3 drop-shadow-md group-hover:text-accent transition-colors duration-300">
                      {t(`list.${teacher.key}.name`)}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-accent uppercase tracking-widest font-bold mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {t(`list.${teacher.key}.specialization`)}
                    </p>
                  </div>

                  <div className="w-12 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}