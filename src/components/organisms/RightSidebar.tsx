import React from 'react';
import { SocialIcon } from '../atoms/SocialIcon';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export const RightSidebar = () => {
  return (
    <aside className="bg-white w-20 hidden lg:flex fixed right-0 top-0 h-screen flex-col items-center justify-center gap-6 shadow-sm border-l border-gray-100 z-40">
      <h3 className="font-bold text-gray-800 text-[15px] uppercase tracking-widest [writing-mode:vertical-rl] mb-4">
        Links
      </h3>
      <SocialIcon href="https://github.com/julian-guerra92" icon={FaGithub} />
      <SocialIcon href="https://www.linkedin.com/in/juli%C3%A1n-andr%C3%A9s-rodr%C3%ADguez-guerra" icon={FaLinkedin} />
      <SocialIcon href="https://twitter.com" icon={FaTwitter} />
      <SocialIcon href="https://instagram.com" icon={FaInstagram} />
    </aside>
  );
};
