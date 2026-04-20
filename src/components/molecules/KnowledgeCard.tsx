import React from 'react';
import { IconType } from 'react-icons';

interface KnowledgeCardProps {
  title: string;
  description: string;
  icon: IconType;
}

export const KnowledgeCard: React.FC<KnowledgeCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-[#FFB400] text-5xl mb-2">
        <Icon />
      </div>
      
      <h3 className="font-bold text-gray-800 text-lg">
        {title}
      </h3>
      
      <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-50">
        {description}
      </p>
    </div>
  );
};
