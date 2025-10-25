import { type ButtonHTMLAttributes, type ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) => {
  const baseStyles = 'font-semibold text-sm rounded-[11px] transition-all duration-200';
  
  const variantStyles = {
    primary: 'bg-[#5057ea] text-white hover:bg-[#4048d8] active:scale-[0.98] h-[50px] px-6',
    secondary: 'bg-gray-100 text-black hover:bg-gray-200 active:scale-[0.98] h-[46px] px-4',
    ghost: 'bg-transparent text-black hover:bg-black/5 active:bg-black/10 px-3 py-2',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

