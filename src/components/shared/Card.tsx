import React from 'react';

type CardProps = {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode; // for optional badge or other extras
};

const Card = ({ title, description, className = '', children }: CardProps) => {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition ${className}`}
    >
      {children && <div className='mb-2'>{children}</div>}
      <h3 className='text-lg font-semibold text-gray-900'>{title}</h3>
      <p className='mt-1 text-sm text-gray-600'>{description}</p>
    </div>
  );
};

export default Card;
