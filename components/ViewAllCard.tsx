'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react'; // Use appropriate arrow for RTL

interface ViewAllCardProps {
  className?: string;
  href: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.07, // Stagger slightly differently maybe
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};


const ViewAllCard: React.FC<ViewAllCardProps> = ({ className = '', href }) => {
  return (
    <motion.div
      className={`relative border-4 border-black rounded-4xl overflow-hidden p-6 md:p-8 sm:col-span-2  lg:col-span-1 flex flex-col justify-center items-center text-center bg-coral from-coral to-muted-purple text-white shadow-md hover:shadow-lg transition-all duration-300 group ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={Math.random()} // Or pass index
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}

    >
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
        جميع المبادرات
      </h3>
      <p className="text-sm md:text-base opacity-90 mb-5">
        اكتشف كافة برامجنا ومساهماتنا لخدمة ضيوف الرحمن.
      </p>
      <Link href={href} legacyBehavior>
        <a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-full transition-colors duration-300 group-hover:scale-105 transform">
          <span>عرض الكل</span>
          <ArrowLeft size={20} className="transform transition-transform duration-300 group-hover:-translate-x-1" />
        </a>
      </Link>
    </motion.div>
  );
};

export default ViewAllCard;