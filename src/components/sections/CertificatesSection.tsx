'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { certificates, Certificate } from '@/utils/certificates';
import { CertificateCard } from './CertificateCard';
import { LightboxModal } from './LightboxModal';

export function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive cards per view
  const [cardsPerView, setCardsPerView] = useState(3);

  // Handle responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, certificates.length - cardsPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, cardsPerView]);

  const maxIndex = Math.max(0, certificates.length - cardsPerView);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    setIsAutoPlaying(false);
  }, [maxIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setIsAutoPlaying(false);
  }, [maxIndex]);

  const handleCertificateClick = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  // Only horizontal interactions for slider navigation
  useEffect(() => {
    let isHorizontalScroll = false;
    let touchStartX = 0;
    let touchStartY = 0;
    
    const handleWheel = (e: WheelEvent) => {
      // Check if the mouse is over the certificates section
      if (!containerRef.current?.contains(e.target as Node)) return;
      
      // Only handle horizontal scroll events (trackpad swipe)
      const deltaX = Math.abs(e.deltaX);
      const deltaY = Math.abs(e.deltaY);
      
      // Only intercept if it's clearly a horizontal gesture
      if (deltaX > deltaY && deltaX > 30) {
        e.preventDefault();
        
        if (e.deltaX > 0) {
          goToNext();
        } else {
          goToPrevious();
        }
      }
      // Let all vertical scrolling pass through normally
    };
    
    const handleTouchStart = (e: TouchEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) return;
      
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      isHorizontalScroll = false;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) return;
      
      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;
      const diffX = Math.abs(touchX - touchStartX);
      const diffY = Math.abs(touchY - touchStartY);
      
      // Determine if this is a horizontal swipe
      if (diffX > diffY && diffX > 20) {
        isHorizontalScroll = true;
        e.preventDefault(); // Only prevent default for horizontal swipes
      }
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      if (!containerRef.current?.contains(e.target as Node) || !isHorizontalScroll) return;
      
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          goToNext();
        } else {
          goToPrevious();
        }
      }
      
      isHorizontalScroll = false;
    };

    const container = containerRef.current;
    if (container) {
      // Use passive: false only for wheel to allow preventDefault when needed
      container.addEventListener('wheel', handleWheel, { passive: false });
      
      // Touch events with passive: false only for touchmove to allow conditional preventDefault
      container.addEventListener('touchstart', handleTouchStart, { passive: true });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchend', handleTouchEnd, { passive: true });
      
      return () => {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [goToNext, goToPrevious]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'Escape' && isModalOpen) {
        handleModalClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext, isModalOpen]);

  return (
    <section 
      ref={containerRef}
      id="certificates" 
      className="py-24 relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <AcademicCapIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">
              Certificates
            </h2>
          </div>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-3 sm:mb-4 px-4">
            Professional Certifications & Achievements
          </p>
          <p className="text-white/40 text-xs sm:text-sm px-4">
            Swipe horizontally or use arrow keys to navigate • Click to view full certificates
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-6 sm:mb-8 px-2 sm:px-0">
            <button
              onClick={goToPrevious}
              disabled={certificates.length <= cardsPerView}
              className="glass-button p-2 sm:p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 transition-all duration-200 touch-manipulation"
              aria-label="Previous certificates"
            >
              <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Progress Dots */}
            <div className="flex gap-1.5 sm:gap-2">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i);
                    setIsAutoPlaying(false);
                  }}
                  className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                    currentIndex === i 
                      ? 'bg-primary-400 w-6 sm:w-8' 
                      : 'bg-white/20 hover:bg-white/40 w-2.5 sm:w-3'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              disabled={certificates.length <= cardsPerView}
              className="glass-button p-2 sm:p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 transition-all duration-200 touch-manipulation"
              aria-label="Next certificates"
            >
              <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>

          {/* Certificates Grid/Slider */}
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <motion.div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {certificates.map((certificate, index) => (
                <div
                  key={certificate.id}
                  className="flex-none"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="px-2 sm:px-3">
                    <CertificateCard
                      certificate={certificate}
                      onClick={() => handleCertificateClick(certificate)}
                      index={index}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Auto-play Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isAutoPlaying ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-4 right-0 flex items-center gap-2 text-sm text-white/40"
          >
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
            Auto-playing
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md mx-auto">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
              {certificates.length}+
            </div>
            <p className="text-white/60 text-sm sm:text-base">
              Professional Certifications Earned
            </p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        certificate={selectedCertificate}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </section>
  );
}