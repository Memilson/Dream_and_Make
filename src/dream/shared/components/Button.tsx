import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', isLoading = false, children, ...props }) => {
  const baseStyle = 'px-4 py-2 rounded focus:outline-none';
  const variantStyle = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    tertiary: 'bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white',
  };

  return (
    <button className={`${baseStyle} ${variantStyle[variant]}`} {...props} disabled={isLoading}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;