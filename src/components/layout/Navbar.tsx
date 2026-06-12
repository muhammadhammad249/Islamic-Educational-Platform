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
    if (href === '/') return pathname === '/' || pathname.endsWith('/en') || pathname.endsWith('/ur');
    return pathname.includes(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#120f0c]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-black">
              A
            </div>
            <span className="text-white text-xl font-bold tracking-wide">
              AL-MADRASA
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
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

          <div className="flex items-center gap-5">
            <Link href="/contact" className="hidden sm:block text-white/80 hover:text-accent transition">
              <span className="material-symbols-outlined text-2xl">search</span>
            </Link>

            <Link href="/teachers" className="hidden sm:block text-white/80 hover:text-accent transition">
              <span className="material-symbols-outlined text-2xl">favorite</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden w-11 h-9 rounded-full bg-accent text-primary flex items-center justify-center hover:bg-accent-hover transition"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">
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
            className="lg:hidden absolute top-20 left-5 right-5 bg-[#120f0c]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
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