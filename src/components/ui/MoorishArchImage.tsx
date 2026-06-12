import React from 'react';

interface MoorishArchImageProps {
  src: string;
  alt: string;
  className?: string;
  grayscale?: boolean;
}

export default function MoorishArchImage({ 
  src, 
  alt, 
  className = '', 
  grayscale = true 
}: MoorishArchImageProps) {
  return (
    <div className={`relative overflow-hidden group ${className}`} style={{
      clipPath: 'polygon(50% 0%, 100% 20%, 100% 100%, 0% 100%, 0% 20%)',
      borderRadius: '50% 50% 0 0 / 20% 20% 0 0'
    }}>
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105 ${
          grayscale ? 'grayscale hover:grayscale-0' : ''
        }`}
      />
      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-700 pointer-events-none"></div>
    </div>
  );
}
