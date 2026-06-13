'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const t = useTranslations('Common');
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#090909] text-white border-t border-accent/20 shadow-[0_-8px_30px_rgba(212,175,55,0.06)] overflow-hidden pt-20 pb-10"
    >
      <div className="absolute bottom-0 left-0 w-full opacity-[0.04] pointer-events-none select-none flex items-end justify-center z-0">
        <motion.div style={{ y: y1 }} className="w-full">
          <svg viewBox="0 0 1440 320" className="w-full h-auto fill-accent">
            <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,224C960,245,1056,235,1152,218.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L0,320Z" />
          </svg>
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-0 left-0 w-full flex justify-around opacity-30"
        >
          <div className="w-32 h-64 bg-accent rounded-t-full" />
          <div className="w-48 h-80 bg-accent rounded-t-full -mb-10" />
          <div className="w-32 h-64 bg-accent rounded-t-full" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-white/10 pb-16">
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-accent tracking-wider drop-shadow-md">
              AL-MADRASA
            </h2>

            <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm">
              Empowering students worldwide with authentic Islamic knowledge,
              Tajweed, and Arabic linguistics through modern interactive
              channels.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-accent/15 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="WhatsApp"
              >
                <span className="material-symbols-outlined text-base select-none">
                  chat
                </span>
              </a>

              <a
                href="mailto:support@al-madrasa.com"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-accent/15 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="Email"
              >
                <span className="material-symbols-outlined text-base select-none">
                  mail
                </span>
              </a>

              <Link
                href="/teachings"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-accent/15 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="Teachings"
              >
                <span className="material-symbols-outlined text-base select-none">
                  language
                </span>
              </Link>

              <Link
                href="/about"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-accent/15 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="About"
              >
                <span className="material-symbols-outlined text-base select-none">
                  account_balance
                </span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent pl-1">
              Education
            </h3>

            <ul className="space-y-3 font-sans text-xs sm:text-sm">
              <li>
                <Link
                  href="/teachings"
                  className="text-white/50 hover:text-accent transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 rounded-full bg-accent/40" />
                  {t('teachings')}
                </Link>
              </li>

              <li>
                <Link
                  href="/pricing"
                  className="text-white/50 hover:text-accent transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 rounded-full bg-accent/40" />
                  {t('packages')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent pl-1">
              Explore
            </h3>

            <ul className="space-y-3 font-sans text-xs sm:text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-white/50 hover:text-accent transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 rounded-full bg-accent/40" />
                  {t('about')}
                </Link>
              </li>

              <li>
                <Link
                  href="/teachers"
                  className="text-white/50 hover:text-accent transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 rounded-full bg-accent/40" />
                  {t('findTeacher')}
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-white/50 hover:text-accent transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 rounded-full bg-accent/40" />
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent pl-1">
              Support Timings
            </h3>

            <div className="space-y-4 font-sans text-xs sm:text-sm">
              <a
                href="mailto:support@al-madrasa.com"
                className="flex gap-3 text-white/70 hover:text-accent transition-colors"
              >
                <span className="material-symbols-outlined text-accent text-lg flex-shrink-0 mt-0.5 select-none">
                  mail
                </span>

                <div>
                  <p className="font-semibold text-white">
                    support@al-madrasa.com
                  </p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">
                    Expect response within 24 hours
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 text-white/70 hover:text-accent transition-colors"
              >
                <span className="material-symbols-outlined text-accent text-lg flex-shrink-0 mt-0.5 select-none">
                  chat
                </span>

                <div>
                  <p className="font-semibold text-white">
                    WhatsApp Live Chat
                  </p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">
                    Available 8 AM - 8 PM GMT
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
                Feedback
              </h4>

              <p className="text-white/60 text-xs sm:text-sm mb-4 leading-relaxed">
                We value your feedback. Share your suggestions and help us
                improve the learning experience.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-primary font-semibold text-sm hover:bg-accent/90 transition-all duration-300 hover:scale-105"
              >
                <span className="material-symbols-outlined text-base">
                  feedback
                </span>
                Send Feedback
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs font-sans">
          <p>© 2026 Al-Madrasa. All rights reserved.</p>

          <div className="flex items-center gap-6 sm:gap-8">
            <Link
              href="/privacy"
              className="hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}