'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Initiative } from '@/types'; // Use type-only import


interface InitiativeProps {
  initiative: Initiative;
  onClick: () => void;
  className?: string;
}

const Initiative: React.FC<InitiativeProps> = ({ initiative, onClick, className }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="relative h-48">
        <Image
          src={initiative.thumbnail}
          alt={initiative.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-vibrant-purple mb-2">{initiative.title}</h3>
        <p className="text-near-black">{initiative.shortDescription}</p>
        <button className="mt-4 text-coral font-medium hover:underline">
          عرض التفاصيل
        </button>
      </div>
    </motion.div>
  );
};

export default Initiative;