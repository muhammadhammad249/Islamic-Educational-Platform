'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { usePathname } from 'next/navigation';
import { memo, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const t = useTranslations('Common');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { name: t('home'), href: '/' },
      { name: t('about'), href: '/about' },
      { name: t('teachings'), href: '/teachings' },
      { name: t('packages'), href: '/pricing' },
      { name: t('findTeacher'), href: '/teachers' },
      { name: t('contact'), href: '/contact' },
    ],
    [t]
  );

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return (
        pathname === '/' ||
        pathname === '/en' ||
        pathname === '/ar' ||
        pathname === '/ur'
      );
    }

    return pathname.includes(href);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-[#120f0c]/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 shrink-0"
          >
            <div className="w-11 h-11 relative flex items-center justify-center shrink-0">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full border border-accent/30" />
              <div className="absolute inset-[2px] rounded-full border border-accent/10" />
              <svg
                viewBox="0 0 100 100"
                className="w-9 h-9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5D77A" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#B8922E" />
                  </linearGradient>
                  <linearGradient id="logoGoldLight" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F5D77A" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                {/* Dome */}
                <path
                  d="M30 68 Q30 42 50 32 Q70 42 70 68"
                  stroke="url(#logoGold)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Minaret center */}
                <rect x="47" y="22" width="6" height="46" rx="2" fill="url(#logoGold)" />
                {/* Finial on top */}
                <circle cx="50" cy="19" r="3" fill="url(#logoGold)" />
                <line x1="50" y1="16" x2="50" y2="12" stroke="url(#logoGold)" strokeWidth="2" strokeLinecap="round" />
                {/* Crescent */}
                <path
                  d="M60 18 A8 8 0 1 1 60 34 A6 6 0 1 0 60 18Z"
                  fill="url(#logoGoldLight)"
                  transform="translate(8, -6) scale(0.8)"
                />
                {/* Base platform */}
                <rect x="24" y="68" width="52" height="3" rx="1.5" fill="url(#logoGold)" />
                {/* Left small arch */}
                <path
                  d="M30 68 Q30 58 38 54 Q46 58 46 68"
                  stroke="url(#logoGold)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.5"
                />
                {/* Right small arch */}
                <path
                  d="M54 68 Q54 58 62 54 Q70 58 70 68"
                  stroke="url(#logoGold)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.5"
                />
                {/* Star detail */}
                <circle cx="50" cy="50" r="2" fill="url(#logoGold)" opacity="0.7" />
                {/* Bottom decorative line */}
                <line x1="32" y1="74" x2="68" y2="74" stroke="url(#logoGold)" strokeWidth="1" opacity="0.3" />
              </svg>
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-accent text-[10px] font-semibold tracking-[0.3em] uppercase">
                Al
              </span>
              <span className="text-white text-lg sm:text-xl font-bold tracking-wide">
                MADRASA
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const active = isActiveLink(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    active ? 'text-accent' : 'text-white/75 hover:text-accent'
                  }`}
                >
                  {item.name}

                  {active && (
                    <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="hidden md:flex items-center relative"
            >
              <input
                type="search"
                placeholder="Search..."
                aria-label="Search"
                className="w-44 lg:w-52 xl:w-64 h-10 rounded-full bg-white/[0.06] border border-white/10 pl-5 pr-12 text-sm text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:w-56 lg:focus:w-64 xl:focus:w-72 focus:border-accent/70 focus:bg-white/[0.1] text-left"
              />

              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-white/45 text-lg pointer-events-none leading-none">
                search
              </span>
            </form>

            <Link
              href="/teachings"
              className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/[0.05] text-white/75 flex items-center justify-center hover:text-accent hover:border-accent/40 transition"
              aria-label="Search"
              onClick={() => setIsOpen(false)}
            >
              <span className="material-symbols-outlined text-xl">search</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden w-11 h-10 rounded-full bg-accent text-primary flex items-center justify-center hover:bg-accent-hover transition"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className="material-symbols-outlined text-xl">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute top-20 left-4 right-4 sm:left-5 sm:right-5 z-50 bg-[#120f0c]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-3 flex flex-col gap-1">
              {navItems.map((item) => {
                const active = isActiveLink(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition ${
                      active
                        ? 'text-primary bg-accent'
                        : 'text-white/75 hover:text-accent hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default memo(Navbar);