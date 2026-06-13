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
      return pathname === '/' || pathname === '/en' || pathname === '/ar' || pathname === '/ur';
    }

    return pathname.includes(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#120f0c]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-black">
              A
            </div>

            <span className="text-white text-lg sm:text-xl font-bold tracking-wide">
              AL-MADRASA
            </span>
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
            className="lg:hidden absolute top-20 left-4 right-4 sm:left-5 sm:right-5 bg-[#120f0c]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
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