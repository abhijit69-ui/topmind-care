import React from 'react';
import { motion } from 'motion/react';

type CardProps = {
  badge?: React.ReactNode; // optional
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function Card({
  badge,
  title,
  description,
  children,
  className = '',
}: CardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-sm ${className}`}
    >
      {badge && <div className='mb-2'>{badge}</div>}
      <h2 className='text-lg font-primary font-bold text-gray-900'>{title}</h2>
      <p className='mt-1.5 text-sm font-medium text-gray-700'>{description}</p>
      {children}
    </motion.div>
  );
}
