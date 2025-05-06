'use client'
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/ini-1.png', alt: 'فريقنا يقدم المساعدة للحجاج' },
  { id: 2, src: '/images/ini-2.png', alt: 'توزيع وجبات للضيوف' },
  { id: 3, src: '/images/ini-2_2.png', alt: 'إرشاد الحجاج في المشاعر المقدسة' },
  { id: 4, src: '/images/ini-2_3.png', alt: 'فعاليات ترفيهية للضيوف' },
  { id: 5, src: '/images/ini-3.png', alt: 'ورش عمل للمتطوعين' },
  { id: 6, src: '/images/ini-3_2.png', alt: 'أنشطة توعوية' },
  { id: 7, src: '/images/ini-3_3.png', alt: 'خدمات الإسعافات الأولية' },
  { id: 8, src: '/images/ini-3_4.png', alt: 'خدمات الإسعافات الأولية الأخرى' }, // Corrected ID and slightly different alt for uniqueness
];

const HorizontalGalleryScroll = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemWidth, setItemWidth] = useState(0);

  // Calculate item width based on screen size
  useEffect(() => {
    const calculateItemWidth = () => {
      if (typeof window === 'undefined') return;
      const screenWidth = window.innerWidth;
      let newCalculatedWidth = screenWidth * 0.8; // Mobile
      if (screenWidth >= 1024) newCalculatedWidth = screenWidth * 0.35; // Desktop
      else if (screenWidth >= 768) newCalculatedWidth = screenWidth * 0.5; // Tablet
      setItemWidth(newCalculatedWidth);
    };

    calculateItemWidth(); // Initial calculation
    window.addEventListener('resize', calculateItemWidth);
    return () => window.removeEventListener('resize', calculateItemWidth);
  }, []);

  // Animation effects for section entrance
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 50 });
  const sectionOpacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const titleY = useTransform(smoothProgress, [0, 0.5], ['30%', '0%']);

  // Infinite navigation logic
  const navigate = useCallback((direction: number) => {
    setCurrentIndex(prev => {
      const newIndex = prev + direction;
      if (newIndex >= galleryImages.length) return 0;
      if (newIndex < 0) return galleryImages.length - 1;
      return newIndex;
    });
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlaying || itemWidth === 0) return; // Don't start autoplay if itemWidth not calculated

    const interval = setInterval(() => {
      navigate(1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, navigate, itemWidth]);

  // Calculate translateX based on currentIndex and itemWidth
  const translateX = useMemo(() => {
    if (itemWidth === 0) return 0; // Avoid calculation if width not set
    return -currentIndex * (itemWidth + 32); // 32px gap (assuming gap-8 means 2rem = 32px)
  }, [currentIndex, itemWidth]);

  return (
    <motion.section
      ref={sectionRef}
      className="section py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative font-cairo"
      dir="ltr"
      style={{ opacity: sectionOpacity }}
    >
      <div className="section_container">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-vibrant-purple mb-12 text-center"
          style={{ y: titleY }}
        >
          معرض الفريق
          <div className="h-1 w-24 bg-gradient-to-r from-coral to-vibrant-purple mx-auto mt-6 rounded-full"></div>
        </motion.h2>

        <div
          ref={galleryRef}
          className="relative w-full overflow-hidden before:absolute before:inset-y-0 before:left-0 before:w-24 before:bg-gradient-to-r before:from-white/50 before:to-transparent before:z-10 before:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:w-24 after:bg-gradient-to-l after:from-white/50 after:to-transparent after:z-10 after:pointer-events-none"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Gallery Track */}
          <motion.div
            className="flex gap-8 px-4 py-2" // gap-8 is 32px
            animate={{ x: translateX }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <GalleryItem
                key={`${image.id}-${index}`}
                image={image}
                itemWidth={itemWidth}
                isActive={index % galleryImages.length === currentIndex}
              />
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-2">
            <motion.button
              onClick={() => navigate(-1)} // Previous
              className="bg-white/80 backdrop-blur-md text-vibrant-purple rounded-full w-12 h-12 flex items-center justify-center shadow-lg pointer-events-auto hover:bg-vibrant-purple hover:text-white transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} /> {/* Corrected Icon */}
            </motion.button>

            <motion.button
              onClick={() => navigate(1)} // Next
              className="bg-white/80 backdrop-blur-md text-vibrant-purple rounded-full w-12 h-12 flex items-center justify-center shadow-lg pointer-events-auto hover:bg-vibrant-purple hover:text-white transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} /> {/* Corrected Icon */}
            </motion.button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-vibrant-purple w-6' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-vibrant-purple/20 blur-3xl"
            animate={{ x: [0, 40, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-coral/20 blur-3xl"
            animate={{ x: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </motion.section>
  );
};

interface GalleryItemProps {
  image: GalleryImage;
  isActive: boolean;
  itemWidth: number;
}

const GalleryItem = ({ image, isActive, itemWidth }: GalleryItemProps) => {
  // Construct width style string if itemWidth is available
  const widthStyle = itemWidth > 0 ? { width: `${itemWidth}px` } : { width: '80vw' }; // Default fallback

  return (
    <motion.div
      className={`relative aspect-[4/3] shrink-0 rounded-3xl overflow-hidden shadow-lg cursor-pointer ${isActive ? 'ring-4 ring-vibrant-purple' : 'opacity-80'}`}
      style={widthStyle} // Apply dynamic width
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 35vw" // Sizes prop helps Next.js optimize
        className="object-cover"
        quality={85}
        priority={isActive} // Prioritize loading active image and nearby ones if logic extended
      />
    </motion.div>
  );
};

export default HorizontalGalleryScroll;