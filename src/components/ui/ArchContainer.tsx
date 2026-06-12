import React from 'react';

interface ArchContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'full' | 'top-only';
}

export default function ArchContainer({ 
  children, 
  className = '', 
  variant = 'top-only' 
}: ArchContainerProps) {
  // Moorish arch silhouette using CSS clip-path or border radius
  // For a "Moorish" arch, a specific border radius on top works well
  const archStyles = variant === 'top-only' 
    ? "rounded-t-[100px] md:rounded-t-[150px]" 
    : "rounded-[100px] md:rounded-[150px]";

  return (
    <div className={`overflow-hidden bg-white shadow-xl ${archStyles} ${className}`}>
      {children}
    </div>
  );
}
