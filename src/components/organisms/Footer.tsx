import React from 'react';
import { SocialIcon } from '../atoms/SocialIcon';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 rounded-lg flex flex-col items-center justify-center gap-6 shadow-sm w-full mt-4">
      <div className="flex lg:hidden gap-6">
        <SocialIcon href="https://github.com/julian-guerra92" icon={FaGithub} />
        <SocialIcon href="https://linkedin.com" icon={FaLinkedin} />
        <SocialIcon href="https://twitter.com" icon={FaTwitter} />
        <SocialIcon href="https://instagram.com" icon={FaInstagram} />
      </div>
      <p className="text-gray-500 text-sm md:text-base text-center font-medium">
        © 2026 Julián Andrés Rodríguez G. Todos los derechos reservados.
      </p>
    </footer>
  );
};
