import React from 'react';

type BadgeProps = {
  children: React.ReactNode;
  bgColor?: string; // e.g. "bg-purple-100"
  textColor?: string; // e.g. "text-purple-700"
  className?: string; // extra classes (optional)
};

export default function Badge({
  children,
  bgColor = 'bg-purple-100',
  textColor = 'text-purple-700',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${bgColor} ${textColor} ${className}`}
    >
      {children}
    </span>
  );
}
