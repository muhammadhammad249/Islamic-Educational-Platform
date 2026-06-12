import React from 'react';
import { Teacher } from '@/constants/teachers';
import MoorishArchImage from '@/components/ui/MoorishArchImage';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  const t = useTranslations('Teachings.teachers.listing');

  return (
    <article className="border border-accent/20 bg-white flex flex-col group hover:-translate-y-1 transition-transform duration-500 shadow-sm hover:shadow-md">
      <div className="p-4 pb-0 relative">
        <MoorishArchImage 
          src={teacher.image} 
          alt={teacher.name}
          className="aspect-[1/1.2] w-full"
        />
        <div className="absolute top-6 right-6 bg-white px-2 py-1 flex items-center space-x-1 border border-accent/20 z-10 shadow-sm">
          <span className="material-symbols-outlined text-[14px] text-accent fill-1">star</span>
          <span className="font-sans text-[10px] font-bold">{teacher.rating}</span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow items-center text-center">
        <h2 className="font-display text-2xl text-primary mb-2 leading-tight">
          {teacher.name}
        </h2>
        <p className="font-arabic-display text-lg text-accent mb-4">
          {teacher.specialty}
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-primary/60 border border-accent/20 px-2 py-1">
            {teacher.degree}
          </span>
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-primary/60 border border-accent/20 px-2 py-1">
            {teacher.institution}
          </span>
        </div>
        
        <div className="mt-auto w-full pt-4 border-t border-accent/10">
          <Link 
            href={`/teachers/${teacher.id}`}
            className="inline-flex w-full justify-center items-center font-sans text-xs font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors"
          >
            {t('viewProfile')}
            <span className="material-symbols-outlined ml-2 text-[16px] group-hover:translate-x-1 transition-transform">
              arrow_right_alt
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
