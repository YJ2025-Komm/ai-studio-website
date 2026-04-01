
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full cursor-pointer select-none active:scale-95 whitespace-nowrap";
  
  const variants = {
    primary: "gradient-primary text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5",
    secondary: "bg-white text-blue-900 border border-blue-200 hover:border-blue-500 hover:bg-blue-50 shadow-sm",
    outline: "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
  };

  const sizes = {
    sm: "px-6 py-2.5 text-sm", // Exact match for header proportions
    md: "px-8 py-3.5 text-sm",
    lg: "px-10 py-4.5 text-base"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
