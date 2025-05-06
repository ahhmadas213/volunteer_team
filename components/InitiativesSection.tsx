'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InitiativeCard from './InitiativeCard';
import InitiativeDialog from './InitiativeDialog';
import ViewAllCard from './ViewAllCard'; // Import the new card

// --- Import or define types and data ---
interface InitiativeImage {
  src: string;
  alt: string;
}

export interface Initiative { // Export if needed by child components
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images: InitiativeImage[];
  // gridSpan property is kept for potential future use or different layouts,
  // but we will override based on index to match the static example precisely.
  gridSpan?: {
    col?: number;
    row?: number;
  };
}

const allInitiativesData: Initiative[] = [
  {
    id: 'initiative-1',
    title: 'ضيافة ضيوف الرحمن عند مسجد عائشة',
    shortDescription: 'من الله على فريق خادم ضيف',
    fullDescription: 'من الله على فريق خادم ضيف الرحمن بمبادرة ضيافة ضيوف الرحمن عند مسجد السيدة عائشة كل يوم جمعة منذ نشأت الفريق وحتى اليوم وفيه يتم استقبال الزوار والمعتمرين وقاصدي البلد الحرام بالضيافة السعودية العريقة',
    thumbnail: '/images/ini-1.png',
    images: [
      { src: '/images/ini-1.png', alt: 'استقبال الزوار و المعتمرين' },

    ],
  },
  {
    id: 'initiative-2',
    title: 'معايدة األيتام',
    shortDescription: 'معايدة األيتام واالحتفال معهم في المناسبات الوطنية',
    fullDescription: 'من المبادرات المهمة التي يحرص عليها فريق خادم ضيف الرحمن هي المبادرات التي تخص أيتام البلد الحرام .. فمنذ نشأت الفريق وهم حريصين على هده الفئة سواء في العياد أو في المناسبات الوطنية ',
    thumbnail: '/images/ini-2.png',
    images: [
      { src: '/images/ini-2_2.png', alt: 'معايدة الايتام' },
      { src: '/images/ini-2_3.png', alt: 'معايدة الايتام' },
    ],
  },
  {
    id: 'initiative-3',
    title: 'توزيع وجبات الإفطار',
    shortDescription: 'مبادرة توزيع وجبات الإفطار على الاسر المحتاجة في جميع أحياء مكة',
    fullDescription: 'كانت مبادرة مميزة تم اطالقها في شهر رمضان المبارك لهذا العام ١٤٤٦ وهي عبارة عن توزيع وجبات الإفطار الساخنة على الاسر المحتاجة في جميع أحياء مكة المكرمة واستمرت المبادرة طوال شهر رمضان المبارك.',
    thumbnail: '/images/ini-3.png',
    images: [
      { src: '/images/ini-3_2.png', alt: 'توزيع وجبات الإفطار' },
      { src: '/images/ini-3_3.png', alt: 'توزيع وجبات الإفطار' },
      { src: '/images/ini-3_4.png', alt: 'توزيع وجبات الإفطار' },
      
    ],
  },


];
// -------------------------------------

// Decide how many initiatives to show in the bento grid before the "View All" card.
// Let's match the number of static examples + View All = 5 items total in the grid.
const MAX_FEATURED_INITIATIVES = 4; // Show first 4 initiatives
const featuredInitiatives = allInitiativesData.slice(0, MAX_FEATURED_INITIATIVES);


const InitiativesSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);

  const openDialog = (initiative: Initiative) => {
    setSelectedInitiative(initiative);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedInitiative(null), 300);
  };

  // Helper function to determine grid classes based on the item's index
  // This function mimics the static example's layout precisely.
  const getGridClassesByIndex = (index: number): string => {
    switch (index) {
      case 0: // First item (like static div 1)
        return 'col-span-1 sm:col-span-2 md:col-span-3 row-span-1'; // Full width on sm, 3 cols on md+
      case 1: // Second item (like static div 2)
        return 'col-span-1 row-span-2'; // Always 1 column wide, but 2 rows tall
      case 2: // Third item (like static div 3)
        return 'col-span-1 md:col-span-2 row-span-1'; // Standard 1x1
      default: // Fallback for any potential extra items (though we sliced)
        return 'col-span-1 row-span-1';
    }
  };


  return (
    <section className="section py-16 md:py-24" dir="rtl">
      <div className="section_container ">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-vibrant-purple mb-10 md:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          أبرز مبادراتنا
        </motion.h2>

        {/* Bento Grid Layout - Using the same responsive setup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  auto-rows-[250px] sm:auto-rows-[280px] md:auto-rows-[250px] lg:auto-rows-[280px] gap-4 md:gap-6">

          {/* --- Map Initiatives Data to InitiativeCards --- */}
          {featuredInitiatives.map((initiative, index) => (
            <InitiativeCard
              key={initiative.id} // Use a unique key
              initiative={initiative}
              onClick={() => openDialog(initiative)}
              // Apply responsive span classes based on the index to match the static example
              className={getGridClassesByIndex(index)}
            />
          ))}

          {/* --- Add the "View All" Card --- */}
          {/* It needs to occupy the next available slot, typically a 1x1 */}
          <ViewAllCard
            // Ensures it's 1x1 unless the grid forces it elsewhere
            className="col-span-1 row-span-1"
            href="/initiatives" // Link to your full initiatives page
          />

        </div>
      </div>

      {/* Dialog Component (Remains the same) */}
      <InitiativeDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        initiative={selectedInitiative}
      />
    </section>
  );
};

export default InitiativesSection;