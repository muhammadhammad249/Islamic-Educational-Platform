import { useTranslations } from 'next-intl';
import MoorishArchImage from '@/components/ui/MoorishArchImage';
import { Link } from '@/navigation';

export default function PillarsPage() {
  const t = useTranslations('Teachings.pillars');

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto text-center flex flex-col items-center">
        <div className="mb-8">
          <span className="font-arabic-display text-3xl text-accent block mb-4" dir="rtl">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl text-primary mb-6 max-w-4xl">
          {t('hero.title')}
        </h1>
        <p className="font-sans text-xl text-primary/60 max-w-2xl mx-auto mb-12">
          {t('hero.subtitle')}
        </p>
      </section>

      {/* Pillars Grid */}
      <section className="pb-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* 1. Shahada (Featured) */}
          <article className="md:col-span-12 flex flex-col md:flex-row border border-accent/20 bg-white overflow-hidden group">
            <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
              <div className="mb-8 text-accent">
                <span className="material-symbols-outlined text-5xl">fingerprint</span>
              </div>
              <h2 className="font-display text-4xl text-primary mb-2">Shahada</h2>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent mb-6 block">
                {t('shahada.label')}
              </span>
              <p className="font-sans text-primary/60 mb-8 leading-relaxed">
                {t('shahada.desc')}
              </p>
              <Link href="#" className="font-sans text-xs font-bold text-accent uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors">
                {t('readMore')}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="w-full md:w-1/2 h-80 md:h-auto relative bg-background-warm p-8">
              <MoorishArchImage 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEkWGM3xPKHctAS_G5YjL3YAe91DKRavkb_yadittcoN33NZpazKuH1ghdmqNeHIXp1B7FV-B7J2rt7FalgB5fG3kNvAY_k3qxMFSrUOyN1OxTzA5uQjwc3sFOIQIxu4GGwd9Gvv7GdCs9fEClqEuodBozIcNomQbHH060C5JxLE9XLqptWB-Sio7Ub-x-2w_5rXXuaotKahqXYBZepG8mjFe967_R5flrm1BLvB6puv2GLR9AxvLGk1KDWvU6x7fMUp-PB6iHPXo-" 
                alt="Shahada Concept"
                className="w-full h-full"
              />
            </div>
          </article>

          {/* 2. Salah */}
          <article className="md:col-span-6 flex flex-col border border-accent/20 bg-white p-10 group hover:bg-background-warm transition-colors duration-500">
            <div className="mb-8 text-accent flex justify-between items-start">
              <span className="material-symbols-outlined text-4xl">prayer_times</span>
              <span className="font-display text-3xl opacity-10">02</span>
            </div>
            <h2 className="font-display text-3xl text-primary mb-2">Salah</h2>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent mb-6 block">
              {t('salah.label')}
            </span>
            <p className="font-sans text-primary/60 mb-auto pb-8">
              {t('salah.desc')}
            </p>
            <Link href="#" className="font-sans text-xs font-bold text-accent uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors pt-4 border-t border-accent/10">
              {t('explore')}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </article>

          {/* 3. Zakat */}
          <article className="md:col-span-6 flex flex-col border border-accent/20 bg-primary text-white p-10 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8 text-accent flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl">volunteer_activism</span>
                <span className="font-display text-3xl opacity-10 text-white">03</span>
              </div>
              <h2 className="font-display text-3xl mb-2">Zakat</h2>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent mb-6 block">
                {t('zakat.label')}
              </span>
              <p className="font-sans text-white/60 mb-auto pb-8">
                {t('zakat.desc')}
              </p>
              <Link href="#" className="font-sans text-xs font-bold text-accent uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors pt-4 border-t border-white/10">
                {t('discover')}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </article>

          {/* 4. Sawm */}
          <article className="md:col-span-4 flex flex-col border border-accent/20 bg-white p-10 group hover:bg-background-warm transition-colors duration-500">
            <div className="mb-8 text-accent flex justify-between items-start">
              <span className="material-symbols-outlined text-4xl">wb_twilight</span>
              <span className="font-display text-3xl opacity-10">04</span>
            </div>
            <h2 className="font-display text-3xl text-primary mb-2">Sawm</h2>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
              {t('sawm.label')}
            </span>
            <p className="font-sans text-primary/60 mb-8 text-sm">
              {t('sawm.desc')}
            </p>
            <Link href="#" className="mt-auto font-sans text-xs font-bold text-accent uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors">
              {t('readMore')}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </article>

          {/* 5. Hajj */}
          <article className="md:col-span-8 flex flex-col md:flex-row border border-accent/20 bg-white overflow-hidden group">
            <div className="w-full md:w-2/5 h-64 md:h-auto relative">
              <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-multiply"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIEZ-eHl77rXYX0tDyp7KZmqxsfENcor0b5nGJMfhIJuPkS2j4MV-gcE81vW7IG7UguRi-nUktf76wYiiWLNO0B_uZ80Jf_Vzq45oyu5bMFtc6W67zyNn-xvlvZNpZ2LX1MpZMmwIuUKftEIiVnjGyRen1fLQ6I7ox8NW5NAv1oxd0H4AZ7IjW2KM93D4Chm3GZ3lD5D-z1EwOVBVrxcSdMchrPQT4-6rt9Qg0gBdovEozAbVn0AeVjGoPM2smFVbYHgFPDmkrEHM8" 
                alt="Hajj" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
              <div className="mb-6 text-accent flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl">explore</span>
                <span className="font-display text-3xl opacity-10">05</span>
              </div>
              <h2 className="font-display text-3xl text-primary mb-2">Hajj</h2>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
                {t('hajj.label')}
              </span>
              <p className="font-sans text-primary/60 mb-6 leading-relaxed line-clamp-3">
                {t('hajj.desc')}
              </p>
              <Link href="#" className="font-sans text-xs font-bold text-accent uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors pt-4 border-t border-accent/10">
                {t('learn')}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}
