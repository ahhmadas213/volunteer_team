'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FaSnapchatGhost, FaTiktok } from 'react-icons/fa';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const [mobileHeaderVisible, setMobileHeaderVisible] = useState(true);

  // Navigation Links
  const navLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/initiatives', label: 'مبادراتنا' },
    { href: '/about', label: 'عن الفريق' },

  ];

  // Social media links
  const socialLinks = [
    { href: 'https://x.com/mecca2034', icon: BsTwitterX, label: 'Twitter/X' },
    { href: 'https://snapchat.com/t/1gdUXzvn', icon: FaSnapchatGhost, label: 'Snapchat' },
    { href: 'https://www.tiktok.com/@dyfalrhman?_t=zs-8t95lzcalfs&_r=1', icon: FaTiktok, label: 'Tiktok' },
  ];

  // Handle scroll effect for header background/shadow and mobile visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        setIsScrolled(true); // Keep background white on mobile if menu might be open or header is visible
        // Determine scroll direction
        if (currentScrollY <= 10) { // At the very top or scrolled up to top
          setMobileHeaderVisible(true);
        } else if (currentScrollY > lastScrollY.current) { // Scrolling down
          setMobileHeaderVisible(false);
        } else if (currentScrollY < lastScrollY.current) { // Scrolling up
          setMobileHeaderVisible(true);
        }
        lastScrollY.current = currentScrollY;
      } else { // Desktop
        setIsScrolled(currentScrollY > 10);
        setMobileHeaderVisible(true); // Always visible on desktop
        lastScrollY.current = currentScrollY; // Still track for resize changes
      }
    };

    // Set initial scroll position
    lastScrollY.current = window.scrollY;
    // Call handler once on mount to set initial state based on screen size and scroll
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full p-3 transition-transform duration-300 ease-in-out md:transform-none ${mobileHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`container mx-auto px-2 rounded-full sm:px-3 lg:px-4 
                  transition-all duration-300 ease-in-out
                  ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent md:bg-transparent'}
                  ${isMenuOpen ? 'bg-white shadow-md' : ''}
                  md:bg-opacity-90 md:backdrop-blur-sm
        `}>
        <div className="flex min-h-14 md:h-18 items-center flex-wrap justify-between">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/images/logo.png"
                alt="شعار فريق خادم ضيف الرحمن"
                width={40}
                height={40}
                className="h-8 w-auto md:h-10"
              />
              <motion.span
                className={`
                  hidden sm:inline font-bold text-lg md:text-xl 
                  ${isScrolled || isMenuOpen ? 'text-near-black' : 'text-vibrant-purple'} 
                  group-hover:text-coral transition-colors duration-200
                `}
                whileHover={{ scale: 1.05 }}
              >
                خادم ضيف الرحمن
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href={link.href}
                  className={`
                    text-base lg:text-lg font-medium transition-colors duration-200
                    ${isScrolled || isMenuOpen ? 'text-gray-700 hover:text-vibrant-purple' : 'text-near-black hover:text-coral'}
                  `}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Social Media Icons - Desktop */}
            <div className="flex items-center space-x-2 space-x-reverse ml-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-1.5 rounded-full transition-colors duration-200
                    ${isScrolled ? 'text-vibrant-purple hover:bg-purple-50' : 'text-near-black hover:bg-white hover:bg-opacity-20'}
                  `}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <motion.div
              className="ml-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <Button
                  className="!py-2 !px-5 !text-base"
                >
                  تواصل معنا
                </Button>
              </Link>

            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 space-x-reverse md:hidden">
            {/* Social Media Icons - Mobile */}
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-vibrant-purple p-1"
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={18} />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}

            <motion.button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              className="p-2 rounded-md text-vibrant-purple hover:bg-purple-50 transition-colors duration-200"
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <IoMdClose size={24} /> : <CiMenuFries size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-md"
            onClick={toggleMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
        className="fixed top-0 right-0 h-full w-64 sm:w-72 z-[100] bg-[#2d1b5c]/95 text-white shadow-xl md:hidden backdrop-blur-lg"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="flex justify-between items-center p-4 border-b border-purple-400">
          <h2 id="mobile-menu-title" className="font-bold text-lg">القائمة</h2>
          <button
            onClick={toggleMenu}
            className="p-1 text-white hover:bg-purple-700 rounded"
            aria-label="Close menu"
          >
            <IoMdClose size={24} />
          </button>
        </div>
        <nav className="flex flex-col min-h-dvh p- bg-muted-purple space-y-4">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <Link
                href={link.href}
                onClick={toggleMenu}
                className="block py-2 px-3 rounded-md text-base font-medium hover:bg-purple-700 transition-colors"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          {/* Social Links in Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="flex justify-center space-x-6 pt-4 border-t border-purple-400 mt-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-coral p-2"
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={20} />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="pt-4"
          >
            <Link href="/contact">
              <Button
                className=""
                onClick={toggleMenu}
              >

                تواصل معنا
              </Button>

            </Link>

          </motion.div>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;