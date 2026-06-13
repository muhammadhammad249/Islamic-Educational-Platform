'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, useRouter } from '@/navigation';
import Button from '@/components/ui/Button';
import AnimateIn from '@/components/ui/AnimateIn';

const IslamicStar = ({ className = '' }: { className?: string }) => (
  <svg
    className={`pointer-events-none select-none text-accent/15 ${className}`}
    viewBox="0 0 200 200"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.75"
  >
    <g>
      <circle cx="100" cy="100" r="95" strokeDasharray="3,3" />
      <circle cx="100" cy="100" r="75" />
      <rect x="50" y="50" width="100" height="100" rx="1" />
      <rect x="50" y="50" width="100" height="100" rx="1" transform="rotate(45 100 100)" />
    </g>
  </svg>
);

export default function LoginPage() {
  const t = useTranslations('Teachings.auth.login');
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setMessage('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setMessage('Please enter email and password.');
      return;
    }

    setMessage('Login successful. Redirecting...');
    setTimeout(() => {
      router.push('/dashboard');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white pt-20">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-80 h-80 opacity-[0.03] pointer-events-none">
        <IslamicStar className="w-full h-full text-accent" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <AnimateIn direction="down">
            <Link href="/" className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-primary font-black text-xl mb-5">
              A
            </Link>

            <h1 className="font-display text-4xl text-white mb-3 tracking-tight">
              {t('title')}
            </h1>

            <p className="font-sans text-[10px] font-bold text-accent uppercase tracking-[0.25em]">
              {t('subtitle')}
            </p>
          </AnimateIn>
        </div>

        <AnimateIn direction="up" delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gradient-to-br from-[#1C1C1C]/60 to-[#0F0F0F]/85 backdrop-blur-xl border border-accent/15 p-8 sm:p-10 rounded-3xl shadow-2xl shadow-black/40 relative overflow-hidden"
          >
            <div className="space-y-5">
              <div className="space-y-2 group">
                <label className="font-sans text-[10px] uppercase font-bold text-white/40 group-focus-within:text-accent tracking-widest transition-colors block">
                  Email Address
                </label>

                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#0D0D0D]/40 border-b border-accent/25 focus:border-accent text-white px-4 py-3 focus:bg-[#0D0D0D]/60 outline-none font-sans transition-all duration-300 rounded-t-lg placeholder:text-white/25"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2 group relative">
                <div className="flex justify-between items-center mb-1">
                  <label className="font-sans text-[10px] uppercase font-bold text-white/40 group-focus-within:text-accent tracking-widest transition-colors">
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="font-sans text-[10px] uppercase font-bold text-white/40 hover:text-accent transition-colors"
                  >
                    {t('forgot')}
                  </Link>
                </div>

                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-[#0D0D0D]/40 border-b border-accent/25 focus:border-accent text-white pl-4 pr-12 py-3 focus:bg-[#0D0D0D]/60 outline-none font-sans transition-all duration-300 rounded-t-lg placeholder:text-white/25"
                    placeholder="••••••••"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-accent cursor-pointer transition-colors"
                    aria-label="Toggle password visibility"
                  >
                    <span className="material-symbols-outlined text-lg select-none">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {message && (
              <div className="rounded-xl border border-accent/20 bg-accent/10 px-4 py-3 text-xs text-accent text-center">
                {message}
              </div>
            )}

            <Button
              variant="primary"
              type="submit"
              className="w-full py-4 text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-accent to-[#B8922E] text-primary hover:shadow-accent/25 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:-translate-y-0.5 cursor-pointer shadow-lg transition-all"
            >
              {t('submit')}
            </Button>
          </form>
        </AnimateIn>

        <p className="mt-8 text-center font-sans text-xs text-white/40">
          {t('noAccount')}{' '}
          <Link href="/register" className="text-accent font-bold hover:text-white transition-colors">
            {t('register')}
          </Link>
        </p>
      </div>
    </div>
  );
}