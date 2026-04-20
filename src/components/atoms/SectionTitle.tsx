import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center space-y-4 mb-10 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 capitalize leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
