import React from 'react';

type BadgeProps = {
  children: React.ReactNode;
  variant?: 'violet' | 'green' | 'gray';
  className?: string;
};

export default function Badge({
  children,
  variant = 'violet',
  className = '',
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-primary';

  const variants: Record<typeof variant, string> = {
    violet: 'bg-violet-100 text-violet-700',
    green: 'bg-green-100 text-green-700',
    gray: 'bg-gray-200 text-gray-800',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
