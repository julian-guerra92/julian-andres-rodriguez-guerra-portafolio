import React from 'react';

interface BadgeProps {
  label: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, className = '' }) => {
  return (
    <span className={`inline-block px-3 py-1 rounded-sm text-xs font-semibold tracking-wide bg-[#FFB400] text-gray-900 ${className}`}>
      {label}
    </span>
  );
};
