'use client'
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Call once to set initial position
    handleScroll();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={heroRef} className='relative min-h-screen w-full overflow-hidden font-cairo'>
      {/* Background with gradient overlay */}
      <Image
        src="/images/herobg2.png"
        alt="خلفية فريق خادم ضيف الرحمن"
        fill
        sizes="100vw"
        quality={90}
        className="object-cover opacity-40 object-center hidden md:block"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20 hidden md:block"></div>

      {/* Subtle animated particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-vibrant-purple/20"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -30 - 15],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* ===== Main Hero Content (Centered) ===== */}
      <div className='relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-4 py-16 sm:px-6 md:py-20 lg:px-8'>
        {/* Text Block with animation */}
        <motion.div
          className='max-w-3xl md:-mt-16'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className='text-4xl text-vibrant-purple sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4'>
            <span className='text-coral'>فريق</span> خادم ضيف الرحمن
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-coral to-vibrant-purple mx-auto my-6 rounded-full"></div>
          <p className='text-lg text-near-black md:text-xl lg:text-2xl mb-8 leading-relaxed drop-shadow-md'>
            ليس مجرد فريق، بل قلبٌ واحد ينبض بالخير، يسعى بصمت ويصنع الأثر.
          </p>
        </motion.div>


        {/* Buttons Block with animation */}
        <motion.div
          className='flex flex-row items-center justify-center gap-4 mt-6 md:mt-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            className="relative overflow-hidden group"
          >
            <Link href={"/contact"}>
              <span className="relative">تواصل معنا</span>

            </Link>
          </Button>
          <Button
            className='!bg-muted-purple relative overflow-hidden group'
          >
            <Link href={"/about"} >
              <span className="relative">تعرف على الفريق</span>
            </Link>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            opacity: [0.8, 0.4, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex flex-col items-center">
            <p className="text-sm text-vibrant-purple mb-2">اكتشف المزيد</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#8A4FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* ===== Decorative Patterns with Parallax ===== */}

      {/* mobile patterns - top with parallax */}
      <motion.div
        className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 block lg:hidden z-0 rotate-90 lg:rotate-0'
        animate={{
          y: -50 - (scrollY * 0.1)  // Move up slowly as scroll increases
        }}
      >
        <Image
          src="/images/pattern.png"
          alt="Decorative pattern top"
          width={150}
          height={150}
          className="opacity-80"
        />
      </motion.div>

      {/* mobile patterns - bottom with parallax */}
      <motion.div
        className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 block lg:hidden z-0 rotate-90 lg:rotate-0'
        animate={{
          y: 50 + (scrollY * 0.1)  // Move down slowly as scroll increases
        }}
      >
        <Image
          src="/images/pattern.png"
          alt="Decorative pattern bottom"
          width={150}
          height={150}
          className="opacity-80"
        />
      </motion.div>

      {/* Left pattern container with parallax (Full height, hidden below large screens) */}
      <motion.div
        className='absolute -top-16 left-0 z-0 hidden h-full w-[200px] -translate-x-1/2 flex-col justify-between lg:flex'
        aria-hidden="true"
        animate={{
          y: -20 - (scrollY * 0.25)  // Move up faster as scroll increases
        }}
      >
        <Image
          src="/images/pattern.png"
          alt="عنصر زخرفي يسار"
          width={200}
          height={200}
          className="h-auto max-w-full object-cover object-center opacity-80"
        />
        <Image
          src="/images/pattern.png"
          alt="عنصر زخرفي يسار"
          width={200}
          height={200}
          className="h-auto max-w-full object-cover object-center opacity-80"
        />
      </motion.div>

      {/* Right pattern container with parallax (Full height, hidden below large screens) */}
      <motion.div
        className='absolute -top-8 right-0 z-0 hidden h-full w-[200px] translate-x-1/2 flex-col justify-between lg:flex'
        aria-hidden="true"
        animate={{
          y: -20 + (scrollY * 0.20)  // Move down as scroll increases
        }}
      >
        <Image
          src="/images/pattern.png"
          alt="عنصر زخرفي يمين"
          width={200}
          height={200}
          className="h-auto max-w-full object-cover object-center opacity-80"
        />
        <Image
          src="/images/pattern.png"
          alt="عنصر زخرفي يمين"
          width={200}
          height={200}
          className="h-auto max-w-full object-cover object-center opacity-80"
        />
      </motion.div>

      {/* Corner decorative elements */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-coral/30 hidden md:block"></div>
      <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-vibrant-purple/30 hidden md:block"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-vibrant-purple/30 hidden md:block"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-coral/30 hidden md:block"></div>
    </div>
  );
};

export default HeroSection;