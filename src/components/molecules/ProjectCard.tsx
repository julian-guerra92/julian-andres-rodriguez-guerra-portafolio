import React from 'react';
import { Button } from '../atoms/Button';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onLearnMore: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  onLearnMore 
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 min-w-70 md:min-w-[320px] max-w-85 shrink-0 snap-center flex flex-col group">
      <div className="h-48 w-full relative overflow-hidden bg-gray-200">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
          {description}
        </p>
        <div className="mt-auto">
          <Button 
            className="text-[#FFB400] text-sm font-bold tracking-wide w-full"
            style={{ 
              background: 'none', 
              boxShadow: 'none', 
              paddingLeft: 0,
              paddingRight: 0,
              justifyContent: 'flex-start'
            }}
            onClick={onLearnMore}
          >
            LEARN MORE &gt;
          </Button>
        </div>
      </div>
    </div>
  );
};
