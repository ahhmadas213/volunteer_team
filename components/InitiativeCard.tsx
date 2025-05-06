'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Initiative } from './InitiativesSection'; // Adjust path if necessary

interface InitiativeCardProps {
  initiative: Initiative;
  onClick: () => void;
  className?: string; // To pass grid span classes
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.05, // Stagger effect
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1], // Smooth cubic bezier
    },
  }),
};

const InitiativeCard: React.FC<InitiativeCardProps> = ({ initiative, onClick, className = '', }) => {
  return (
    <motion.div
      className={`relative group h-full rounded-3xl md:rounded-4xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer ${className}`} // Applied rounded-3xl for consistency
      onClick={onClick}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={Math.random()}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Image fills the container */}
      <Image
        src={initiative.thumbnail}
        alt={`صورة مصغرة لمبادرة ${initiative.title}`}
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 22vw, 18vw" // Adjust based on your final grid layout
        className="object-cover transition-transform duration-400 ease-in-out group-hover:scale-110"
        quality={75}
        priority={className.includes('col-span-3') || className.includes('row-span-2')}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-100 group-hover:from-black/80 transition-opacity duration-300"></div>

      {/* Content Area - Stays at the bottom */}
      {/* Adjusted padding for different screen sizes */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6 text-white z-10">
        {/* --- Responsive Text Size Adjustments --- */}
        <h3
          // Base: text-base (1rem), sm: text-lg (1.125rem), md: text-xl (1.25rem)
          // Capped at text-xl on medium screens and up to prevent getting too large
          className="text-base sm:text-lg md:text-xl font-bold mb-1 transition-transform duration-300 group-hover:-translate-y-1"
        >
          {initiative.title}
        </h3>
        <p
          // Base: text-sm (0.875rem), md: text-base (1rem)
          // Kept relatively standard, ensures readability without excessive size
          className="text-sm md:text-base opacity-90 line-clamp-2" // line-clamp-2 still important
        >
          {initiative.shortDescription}
        </p>
        {/* --- End Responsive Text Size Adjustments --- */}
      </div>

      {/* Subtle Accent on Hover */}
      <div className="absolute top-4 right-4 w-8 h-1 bg-coral rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default InitiativeCard;