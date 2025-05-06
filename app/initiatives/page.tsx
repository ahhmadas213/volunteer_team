'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BasicInitiative } from '@/types';
import { initiativesData } from '@/data/initiativesData';

const InitiativesPage = () => {
  const tableHeaders = [
    { key: 'initiative_name', label: 'اسم المبادرة' },
    { key: 'type', label: 'النوع' },
    { key: 'location', label: 'الموقع' },
    { key: 'number_of_participants', label: 'عدد المشاركين' },
  ];

  return (
    <div className="min-h-screen section bg-gray-50 py-8 px-4 sm:px-6 font-cairo" dir="rtl">
      {/* Page Header */}
      <motion.div
        className="text-center mb-8 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-vibrant-purple mb-3">
          مبادرات فريق خادم ضيف الرحمن
        </h1>
        <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-coral to-vibrant-purple mx-auto rounded-full mb-4"></div>
        <p className="text-sm sm:text-base text-near-black max-w-md sm:max-w-xl md:max-w-3xl mx-auto">
          نستعرض هنا أبرز المبادرات التي قام بها الفريق لخدمة المجتمع وضيوف الرحمن.
        </p>
      </motion.div>

      {/* Initiatives Display */}
      <div className="max-w-7xl mx-auto">
        {/* Desktop Table View */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block overflow-x-auto bg-white shadow-md rounded-lg"
        >
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-muted-purple text-white">
              <tr>
                {tableHeaders.map(header => (
                  <th 
                    key={header.key} 
                    scope="col" 
                    className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider"
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-near-black">
              {initiativesData.map((initiative: BasicInitiative, index: number) => (
                <motion.tr
                  key={`${initiative.initiative_name}-${index}-desktop`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`${index % 2 === 0 ? 'bg-cream' : 'bg-white'} hover:bg-lavender-gray/20`}
                >
                  <td className="px-4 py-3 whitespace-normal text-sm font-medium max-w-xs">
                    {initiative.initiative_name}
                  </td>
                  <td className="px-4 py-3 whitespace-normal text-sm">
                    {initiative.type}
                  </td>
                  <td className="px-4 py-3 whitespace-normal text-sm">
                    {initiative.location}
                  </td>
                  <td className="px-4 py-3 whitespace-normal text-sm text-center">
                    {initiative.number_of_participants}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {initiativesData.map((initiative: BasicInitiative, index: number) => (
            <motion.div
              key={`${initiative.initiative_name}-${index}-mobile`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`${index % 2 === 0 ? 'bg-cream' : 'bg-white'} shadow-md rounded-lg p-4 border-l-4 border-vibrant-purple`}
            >
              <h3 className="text-base font-semibold text-vibrant-purple mb-2">
                {initiative.initiative_name}
              </h3>
              <div className="space-y-1.5 text-xs sm:text-sm text-near-black">
                <div className="flex flex-wrap">
                  <span className="font-semibold text-muted-purple min-w-[80px]">
                    {tableHeaders.find(h => h.key === 'type')?.label}:
                  </span>
                  <span className="flex-1">{initiative.type}</span>
                </div>
                <div className="flex flex-wrap">
                  <span className="font-semibold text-muted-purple min-w-[80px]">
                    {tableHeaders.find(h => h.key === 'location')?.label}:
                  </span>
                  <span className="flex-1">{initiative.location}</span>
                </div>
                <div className="flex flex-wrap">
                  <span className="font-semibold text-muted-purple min-w-[80px]">
                    {tableHeaders.find(h => h.key === 'number_of_participants')?.label}:
                  </span>
                  <span className="flex-1">{initiative.number_of_participants}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InitiativesPage;