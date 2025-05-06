"use client";

import Image from 'next/image';
import React from 'react';
import ValueCard from './ValueCard';
import { motion } from 'framer-motion';

const leftColVariants = { // ... (no changes needed here)
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const rightColVariants = { // ... (no changes needed here)
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const valueContainerVariants = { // ... (no changes needed here)
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};
const valueCardVariants = { // ... (no changes needed here)
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
// --- End Animation Variants ---


const AboutSection = () => {
  const values = ['الضيافة', 'الكرم', 'الإحسان', 'التنظيم'];

  return (
    // Add overflow-x-hidden HERE
    <div className='section overflow-x-hidden'> {/* <-- ADD overflow-x-hidden */}
      <div className='section_container'>
        <motion.div
          className='flex flex-col md:flex-row md:items-stretch gap-6 md:gap-8 lg:gap-10'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column */}
          <motion.div
            className='bg-muted-purple text-white rounded-4xl p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row justify-between gap-8 lg:w-1/2 w-full min-h-[400px]'
            variants={leftColVariants}
          >
            {/* Text Content */}
            <div className='flex-1'>
              {/* ... h1 and p tags ... */}
              <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white'>
                عن الفريق
              </h1>
              <p className='text-base sm:text-lg lg:text-xl leading-relaxed'>
                تأسس فريق : خادم ضيف الرحمن في عام 2020 في مكة المكرمة تحت مظلة
                جمعية مراكز الأحياء بمكة المكرمة. يسعى الفريق لتقديم افضل الخدمات
                لضيوف الرحمان وقاصدي البلد الحرام من خلال البرامج والوسائل
                المتنوعة.
              </p>
            </div>

            {/* Value Carts Section */}
            <motion.div
              variants={valueContainerVariants}
            >
              <div className='
                grid grid-cols-2 gap-3 sm:gap-4
                lg:flex md:gap-4 md:flex-col
                items-center md:items-stretch
                justify-center md:justify-start
              '>
                {values.map((valueText, index) => (
                  <motion.div
                    key={index}
                    variants={valueCardVariants}
                  >
                    <ValueCard text={valueText} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className='relative rounded-4xl group lg:w-1/2 w-full min-h-[300px] sm:min-h-[300px] md:min-h-0 md:h-auto'
            variants={rightColVariants}
          >
            {/* ... Image and Shadow div ... */}
            <Image
              className='object-cover relative z-10 rounded-4xl'
              src="/images/about-us.jpg"
              alt='فريق خادم ضيف الرحمن يقدم المساعدة للحجاج والمعتمرين'
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
            <div
              className='absolute inset-0 bg-black rounded-4xl translate-x-2 translate-y-2'
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;