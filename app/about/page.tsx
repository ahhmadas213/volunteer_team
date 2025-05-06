'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaHeart, FaMedal, FaBullseye, FaFlag, FaHandshake, FaEye, FaCheck } from 'react-icons/fa';
import { FaXTwitter, FaSnapchat, FaTiktok } from 'react-icons/fa6'; // Corrected Snapchat icon import

const AboutSection = () => {
  // Values data
  const values = [
    { name: 'الأمانة', icon: <FaHeart className="w-6 h-6" /> },
    { name: 'المصداقية', icon: <FaMedal className="w-6 h-6" /> },
    { name: 'الإتقان', icon: <FaBullseye className="w-6 h-6" /> },
    { name: 'الابتكار والإنجاز', icon: <FaFlag className="w-6 h-6" /> },
    { name: 'المسؤولية', icon: <FaHandshake className="w-6 h-6" /> },
    { name: 'الجودة والتميز', icon: <FaMedal className="w-6 h-6" /> },
    { name: 'السلامة', icon: <FaHeart className="w-6 h-6" /> },
    { name: 'الشفافية', icon: <FaEye className="w-6 h-6" /> },
    { name: 'التعاون', icon: <FaHandshake className="w-6 h-6" /> },
  ];

  // Goals data
  const goals = [
    'إقامة أنشطة وفعاليات دينية وثقافية وترفيهية لضيوف الرحمن',
    'توعية ضيوف الرحمن بأن مكة كلها حرم وبأهمية اتباع التعليمات والإرشادات',
    'عقد ورش تدريبية للشباب والفتيات في تقديم الخدمات لضيوف الرحمن',
    'التعريف بأصالة وعبق الماضي الجميل والموروث الشعبي بالمملكة العربية السعودية',
    'احتواء الشباب والفتيات من خطر الفراغ وذلك من خلال تقديم برامج تطوعية متنوعة في خدمة ضيوف الرحمن',
  ];

  return (
    <section className="section py-16 md:py-24 bg-white" dir="rtl">
      <div className="section_container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-vibrant-purple mb-4">
            نبذة عن الفريق
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-coral to-vibrant-purple mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-12">
            {/* About Team */}
            <motion.div
              className="bg-muted-purple/10 p-8 rounded-3xl border-r-4 border-vibrant-purple"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-vibrant-purple mb-4 flex items-center gap-2">
                <span className="w-4 h-4 bg-coral rounded-full"></span>
                تأسيس الفريق
              </h3>
              <p className="text-lg text-near-black leading-relaxed">
                تأسس الفريق عام 2020 في مكة المكرمة تحت مظلة جمعية مراكز الأحياء بمكة المكرمة نسعى لتقديم أفضل الخدمات لضيوف الرحمن وقاصدي البلد الحرام من خلال البرامج والوسائل المتنوعة (الضيافة . التثقيف . التوعية . الترفيه).
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-coral"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-vibrant-purple mb-4 flex items-center gap-2">
                <span className="w-4 h-4 bg-vibrant-purple rounded-full"></span>
                رؤية الفريق
              </h3>
              <p className="text-lg text-near-black leading-relaxed italic">
                &quot;أن نعزز المشاركة الفعّالة للشباب والفتيات في خدمة ضيوف الرحمن من خلال برامج تطوعية هادفة.&quot;
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="bg-muted-purple/10 p-8 rounded-3xl border-l-4 border-vibrant-purple"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-vibrant-purple mb-4 flex items-center gap-2">
                <span className="w-4 h-4 bg-coral rounded-full"></span>
                رسالة الفريق
              </h3>
              <p className="text-lg text-near-black leading-relaxed">
                تقديم افضل البرامج التطوعية بالتفاعل والمشاركة مع الشباب والفتيات واستغلال اوقات فراغهم بالطرق السليمة لخدمة ضيوف الرحمن
              </p>
            </motion.div>

            {/* Social Links Section */}
            <motion.div
              className="p-8 rounded-3xl text-center mt-12" // Adjusted styling
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} // Adjusted viewport
              transition={{ duration: 0.6, delay: 0.3 }} // Adjusted transition
            >
              <h3 className="text-2xl font-bold text-vibrant-purple mb-6 flex items-center justify-center gap-2">
                <span className="w-4 h-4 bg-coral rounded-full"></span>
                تابعنا على
              </h3>
              <div className="flex justify-center items-center gap-6">
                <a href="https://x.com/your_handle" target="_blank" rel="noopener noreferrer" className="text-near-black hover:text-vibrant-purple transition-colors duration-300">
                  <FaXTwitter size={32} />
                </a>
                <a href="https://snapchat.com/add/your_username" target="_blank" rel="noopener noreferrer" className="text-near-black hover:text-vibrant-purple transition-colors duration-300">
                  <FaSnapchat size={32} /> {/* Corrected Snapchat icon usage */}
                </a>
                <a href="https://tiktok.com/@your_username" target="_blank" rel="noopener noreferrer" className="text-near-black hover:text-vibrant-purple transition-colors duration-300">
                  <FaTiktok size={32} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Goals & Values */}
          <div className="space-y-12">
            {/* Goals */}
            <motion.div
              className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-vibrant-purple"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-vibrant-purple mb-6 flex items-center gap-2">
                <span className="w-4 h-4 bg-coral rounded-full"></span>
                أهداف الفريق
              </h3>
              <ul className="space-y-4">
                {goals.map((goal, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <span className="text-coral mt-1">
                      <FaCheck />
                    </span>
                    <span className="text-lg text-near-black">{goal}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Values */}
            <motion.div
              className="bg-muted-purple/10 p-8 rounded-3xl" // Added padding
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-vibrant-purple mb-6 flex items-center gap-2">
                <span className="w-4 h-4 bg-vibrant-purple rounded-full"></span>
                قيم الفريق
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6"> {/* Increased gap */}
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center gap-2 border border-gray-100" // Changed shadow
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="text-vibrant-purple">
                      {value.icon}
                    </div>
                    <span className="font-medium text-near-black">{value.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Decorative Image */}
            <motion.div
              className="relative h-64 rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/about-us.jpg"
                alt="فريق خادم ضيف الرحمن"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex-col flex justify-end p-6">
                <h3 className="text-white text-xl font-bold">فريق خادم ضيف الرحمن</h3>
                <p className="text-gray-200  font-medium">
                  فريق متكامل يعمل بروح واحدة لخدمة ضيوف الرحمن
                </p>
              </div>
            </motion.div>
          </div>
        </div>



      </div>
    </section>
  );
};

export default AboutSection;