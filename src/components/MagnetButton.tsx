import React from 'react';
import { cn } from '@/src/lib/utils';

interface MagnetButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export default function MagnetButton({ 
  variant = 'primary', 
  children, 
  className,
  ...props 
}: MagnetButtonProps) {
  const variants = {
    primary: 'bg-brand-red text-white hover:bg-red-700',
    secondary: 'bg-white text-brand-black hover:bg-gray-200',
    outline: 'border border-white text-white hover:bg-white hover:text-brand-black',
  };

  return (
    <button
      className={cn(
        "magnet px-8 py-4 rounded-full font-display font-bold uppercase tracking-widest transition-colors duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
