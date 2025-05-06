'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface ValueCardProps {
  title: string;
  description: string;
  delay: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: delay * 0.2,
        ease: "easeOut"
      }}
      className="bg-white text-near-black p-6 rounded-4xl border-4 border-near-black flex flex-col items-center text-center min-h-[200px]"
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-base">{description}</p>
    </motion.div>
  );
};

const ValuesSection = () => {
  const values = [
    {
      title: "التعاون",
      description: "نؤمن بأن العمل الجماعي هو سر النجاح، ونعمل كعائلة واحدة لتحقيق هدفنا المشترك."
    },
    {
      title: "المسؤولية",
      description: "نحمل مسؤولياتنا بوعي وجدية، ونعمل بروح المبادرة لخدمة ضيوف الرحمن."
    },
    {
      title: "الإتقان",
      description: "نسعى لتقديم أفضل ما لدينا بكل دقة واحترافية، لنكون قدوة في العطاء."
    }
  ];

  return (
    <section className="section bg-muted-purple" dir="rtl">
      <div className="section_container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard 
              key={index} 
              title={value.title} 
              description={value.description} 
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;