import React from 'react';

interface ValueCardProps {
  text: string;
}

const ValueCard = ({ text }: ValueCardProps) => {
  return (
    <div className='relative '>
      <div className='
        relative z-10
        bg-coral
        text-white
        rounded-3xl
        p-6
        text-center
        font-semibold
        text-lg
        md:text-xl
        min-w-[120px]
        flex items-center justify-center
        
      '>
        {text}
      </div>
      <div className='
        absolute inset-0
        bg-black
        rounded-3xl
        translate-x-1 translate-y-1
        transition-transform duration-200 ease-in-out
      ' aria-hidden="true"
      />
    </div>
  );
};

export default ValueCard;