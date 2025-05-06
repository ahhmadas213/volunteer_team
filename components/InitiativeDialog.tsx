'use client';
import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Initiative } from './InitiativesSection';

interface InitiativeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  initiative: Initiative | null;
}

// Simple image gallery variants
const galleryVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};


const InitiativeDialog: React.FC<InitiativeDialogProps> = ({ isOpen, onClose, initiative }) => {
  const [[imagePage, direction], setImagePage] = useState([0, 0]);

  // Reset image index when dialog opens or initiative changes
  React.useEffect(() => {
    if (isOpen) {
      setImagePage([0, 0]);
    }
  }, [isOpen, initiative]);

  if (!initiative) return null; // Don't render if no initiative selected

  const imageIndex = wrap(0, initiative.images.length, imagePage);

  const paginateImage = (newDirection: number) => {
    setImagePage([imagePage + newDirection, newDirection]);
  };


  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 font-cairo" onClose={onClose} dir="rtl">
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl lg:max-w-4xl transform overflow-hidden rounded-2xl md:rounded-4xl bg-white p-6 md:p-8 text-right align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl sm:text-3xl font-bold leading-tight text-vibrant-purple mb-4 flex justify-between items-center"
                >
                  {initiative.title}
                  <button
                    onClick={onClose}
                    className="p-1 rounded-full text-gray-500 hover:bg-gray-100 hover:text-near-black transition-colors focus:outline-none focus:ring-2 focus:ring-vibrant-purple focus:ring-offset-2"
                    aria-label="إغلاق النافذة"
                  >
                    <X size={24} />
                  </button>
                </Dialog.Title>

                {/* Content Area */}
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  {/* Text Details */}
                  <div className='order-2 lg:order-1'>
                    <h4 className="text-lg font-semibold text-muted-purple mb-2">الوصف الكامل</h4>
                    <p className="text-base md:text-lg text-near-black leading-relaxed whitespace-pre-line">
                      {initiative.fullDescription}
                    </p>
                    {/* Add more details here if needed (e.g., goals, impact) */}
                  </div>

                  {/* Image Gallery */}
                  <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-inner order-1 lg:order-2 bg-gray-100">
                    {initiative.images && initiative.images.length > 0 ? (
                      <>
                        <AnimatePresence initial={false} custom={direction}>
                          <motion.div
                            key={imagePage}
                            className="absolute inset-0 w-full h-full"
                            custom={direction}
                            variants={galleryVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                          >
                            <Image
                              src={initiative.images[imageIndex].src}
                              alt={initiative.images[imageIndex].alt}
                              fill
                              sizes="(max-width: 1024px) 90vw, 45vw"
                              className="object-cover"
                              priority={imageIndex === 0}
                              quality={80}
                            />
                          </motion.div>
                        </AnimatePresence>

                        {/* Gallery Navigation */}
                        {initiative.images.length > 1 && (
                          <div className="absolute top-1/2 left-3 right-3 z-10 flex justify-between transform -translate-y-1/2">
                            <button
                              onClick={() => paginateImage(-1)}
                              aria-label="الصورة السابقة"
                              className="bg-black/40 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-black/60 transition-colors focus:outline-none focus:ring-1 focus:ring-white"
                            >
                              <ChevronRight size={20} />
                            </button>
                            <button
                              onClick={() => paginateImage(1)}
                              aria-label="الصورة التالية"
                              className="bg-black/40 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-black/60 transition-colors focus:outline-none focus:ring-1 focus:ring-white"
                            >
                              <ChevronLeft size={20} />
                            </button>
                          </div>
                        )}

                        {/* Dot Indicators */}
                        {initiative.images.length > 1 && (
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                            {initiative.images.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setImagePage([i, i > imageIndex ? 1 : -1])}
                                className={`w-2 h-2 rounded-full transition-colors ${i === imageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}`}
                                aria-label={`الانتقال للصورة ${i + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        لا توجد صور لهذه المبادرة
                      </div>
                    )}
                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default InitiativeDialog;