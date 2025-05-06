'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSnapchatGhost, FaTiktok } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { FaMapPin } from "react-icons/fa";


// Define types for links (optional but good practice)
interface NavLink {
  href: string;
  label: string;
}

interface SocialLink {
  href: string;
  label: string;
  icon: React.ElementType; // Use React.ElementType for components
}

const Footer = () => {
  // --- Configuration Data ---
  const quickLinks: NavLink[] = [
    { href: '/', label: 'الرئيسية' },
    { href: '/about', label: 'عن الفريق' },
    { href: '/initiatives', label: 'المبادرات' },
    { href: '/contact', label: 'تواصل معنا' },
  ];

  const socialLinks: SocialLink[] = [
    // Add your actual social media links
    { href: 'https://x.com/mecca2034?s=21&t=Hln0UJ8rRnC-0-_6hhGvHA', icon: BsTwitterX, label: 'Twitter/X' },
    { href: 'https://snapchat.com/t/1gdUXzvn', icon: FaSnapchatGhost, label: 'Snapchat' },
    { href: 'https://www.tiktok.com/@dyfalrhman?_t=zs-8t95lzcalfs&_r=1', icon: FaTiktok, label: 'Tiktok' },
  ];

  const contactInfo = {
    address: 'مكة المكرمة، المملكة العربية السعودية',
  };
  // -------------------------

  return (
    <footer className="section font-cairo bg-near-black text-gray-300 pt-16 pb-8" dir="rtl">
      <div className="section_container">
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-10 md:mb-12">

          {/* Column 1: Logo, Description, Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              {/* Replace with your actual logo */}
              <Image
                src="/images/logo.png" // Use a white/light version of logo
                alt="شعار فريق خادم ضيف الرحمن"
                width={160} // Adjust size as needed
                height={50}
                className="h-auto"
              />
            </Link>
            <p className="text-base leading-relaxed mb-6">
              فريق تطوعي يسعى لخدمة ضيوف الرحمن في مكة المكرمة بأعلى معايير الإحسان والضيافة.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`تابعنا على ${social.label}`}
                  className="text-gray-400 hover:text-vibrant-purple transition-colors duration-200"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-coral transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapPin size={20} className="mt-1 text-muted-purple flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </li>

              <li className="flex items-start gap-3">
                <BsTwitterX size={20} className="mt-1 text-muted-purple flex-shrink-0" />
                <Link href="https://x.com/mofar7">
                  <span>حساب رئيس الفريق اكس</span>

                </Link>
              </li>

            </ul>
          </div>



        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-700/50 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} فريق خادم ضيف الرحمن. جميع الحقوق محفوظة.
            {/* Optional: Add credits */}
            {/* <span className="mx-2">|</span>
            <a href="#" className="hover:text-white">تصميم وبرمجة س</a> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;