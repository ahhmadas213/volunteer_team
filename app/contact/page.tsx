'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { FaSnapchatGhost, FaTiktok } from 'react-icons/fa';
import Button from '@/components/Button';
import { BsTwitterX } from 'react-icons/bs';
import Link from 'next/link';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-12 px-4 sm:px-6 section bg-gradient-to-b from-white to-gray-50 font-cairo" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-vibrant-purple mb-3">
            تواصل معنا
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-coral to-vibrant-purple mx-auto my-4 sm:my-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            نحن هنا لمساعدتك! سواء كان لديك سؤال أو استفسار أو ترغب في الانضمام إلى فريقنا، لا تتردد في التواصل معنا.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg p-6 sm:p-8 md:p-10"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-vibrant-purple mb-6">
              معلومات التواصل
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {/* Contact Item 1: X  */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-muted-purple/10 p-2 sm:p-3 rounded-full text-vibrant-purple flex-shrink-0">
                  <BsTwitterX size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg">اكس \ تويتر رئيس الفريق</h3>
                  <Link href="https://x.com/mofar7" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-vibrant-purple transition-colors text-sm sm:text-base">
                    @مفرح عسيري
                  </Link>
                </div>
              </div>

              {/* Contact Item 2: X */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-muted-purple/10 p-2 sm:p-3 rounded-full text-vibrant-purple flex-shrink-0">
                  <BsTwitterX size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg">اكس \ تويتر الفريق</h3>
                  <Link href="https://x.com/mecca2034" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-vibrant-purple transition-colors text-sm sm:text-base">
                    @فريق خادم ضيف الرحمن التطوعي
                  </Link>
                </div>
              </div>

              {/* Contact Item 3: SnapChat */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-muted-purple/10 p-2 sm:p-3 rounded-full text-vibrant-purple flex-shrink-0">
                  <FaSnapchatGhost size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg">سناب تطوع مكة</h3>
                  <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-vibrant-purple transition-colors text-sm sm:text-base">
                    @سناب تطوع مكة
                  </Link>
                </div>
              </div>

              {/* Contact Item 3: Tiktok */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-muted-purple/10 p-2 sm:p-3 rounded-full text-vibrant-purple flex-shrink-0">
                  <FaTiktok size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg">TikTok</h3>
                  <Link href="https://www.tiktok.com/@dyfalrhman" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-vibrant-purple transition-colors text-sm sm:text-base">
                    @ضيف الرحمن
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg p-6 sm:p-8 md:p-10 relative overflow-hidden"
          >
            {/* Success Message */}
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-green-50/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-4 sm:p-6 text-center"
              >
                <div className="bg-green-100 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-1 sm:mb-2">تم إرسال رسالتك بنجاح!</h3>
                <p className="text-green-600 text-sm sm:text-base">سنقوم بالرد عليك في أقرب وقت ممكن.</p>
              </motion.div>
            )}

            <h2 className="text-xl sm:text-2xl font-bold text-vibrant-purple mb-6">
              أرسل رسالة
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:border-vibrant-purple focus:ring-2 focus:ring-vibrant-purple/20 transition-all text-sm sm:text-base"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:border-vibrant-purple focus:ring-2 focus:ring-vibrant-purple/20 transition-all text-sm sm:text-base"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:border-vibrant-purple focus:ring-2 focus:ring-vibrant-purple/20 transition-all text-sm sm:text-base"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2 sm:pt-4">
                <Button
                  type="submit"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center text-sm sm:text-base">
                      <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      جاري الإرسال...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base">
                      <Send size={16} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      إرسال الرسالة
                    </span>
                  )}
                </Button>
              </div>
            </form>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 border-t-2 border-r-2 border-coral/20 rounded-tr-2xl sm:rounded-tr-3xl opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-vibrant-purple/5 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;