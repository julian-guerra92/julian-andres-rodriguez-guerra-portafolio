import React from 'react';
import { Badge } from '../atoms/Badge';

interface EducationCardProps {
  institution: string;
  role: string;
  dateRange: string;
  title: string;
  description: string;
}

export const EducationCard: React.FC<EducationCardProps> = ({ 
  institution, 
  role, 
  dateRange, 
  title, 
  description 
}) => {
  return (
    <div className="bg-white p-6 shadow-sm border-b border-gray-100 last:border-b-0 flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
      
      {/* Left Column */}
      <div className="md:w-1/3 space-y-3 shrink-0 pt-1">
        <h4 className="font-bold text-gray-800 text-[17px] leading-tight">
          {institution}
        </h4>
        <div className="flex items-center gap-3">
          <span className="text-gray-800 text-sm">{role}</span>
          <Badge label={dateRange} />
        </div>
      </div>
      
      {/* Right Column */}
      <div className="flex-1 space-y-3 md:pt-1">
        <h4 className="font-bold text-gray-800 text-[17px] leading-tight">
          {title}
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
};
