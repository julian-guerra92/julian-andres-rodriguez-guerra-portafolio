import React from 'react';

type ButtonVariants = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 font-semibold rounded-md transition-colors duration-300 uppercase text-sm flex items-center justify-center gap-2';
  const variants = {
    primary: 'bg-[#FFB400] text-black hover:bg-[#e6a200]',
    secondary: 'bg-white text-black border border-gray-200 hover:bg-gray-100',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
