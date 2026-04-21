import React from 'react';
import { IconType } from 'react-icons';

interface SocialIconProps {
  href: string;
  icon: IconType;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ href, icon: Icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFB400] text-gray-900 hover:bg-gray-900 hover:text-[#FFB400] transition-colors"
    >
      <Icon size={18} />
    </a>
  );
};
