import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; // Changed from title to children
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
}

const Button = ({ 
  children, // Changed from title
  leftIcon,
  rightIcon,
  className = "",
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <div className="relative w-full sm:w-auto group">
      {/* Shadow effect */}
      <div
        className="absolute inset-0 bg-black rounded-full translate-x-1 translate-y-1 transition-transform duration-200 ease-in-out"
        aria-hidden="true"
      ></div>
      
      {/* Main button */}
      <button
        onClick={onClick}
        className={`
          relative z-10 cursor-pointer
          px-4 sm:px-6 md:px-8
          py-2 sm:py-3 md:py-4
          bg-vibrant-purple text-white
          font-bold
          text-lg sm:text-xl md:text-2xl
          rounded-full
          w-full sm:min-w-[13rem]
          transition-transform duration-200 ease-in-out
          group-hover:-translate-x-1 group-hover:-translate-y-1
          flex items-center justify-center
          gap-1 sm:gap-2
          ${className}
        `}
        {...props}
      >
        {leftIcon && <span className="inline-flex">{leftIcon}</span>}
        {children} {/* Changed from title */}
        {rightIcon && <span className="inline-flex">{rightIcon}</span>}
      </button>
    </div>
  );
};

export default Button;
