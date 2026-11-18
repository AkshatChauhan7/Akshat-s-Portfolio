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
    }, 5000);

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
      if (!containerRef.current?.contains(e.target as Node)) return;

      const deltaX = Math.abs(e.deltaX);
      const deltaY = Math.abs(e.deltaY);

      if (deltaX > deltaY && deltaX > 30) {
        e.preventDefault();

        if (e.deltaX > 0) {
          goToNext();
        } else {
          goToPrevious();
        }
      }
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

      if (diffX > diffY && diffX > 20) {
        isHorizontalScroll = true;
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!containerRef.current?.contains(e.target as Node) || !isHorizontalScroll) return;

      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
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
      container.addEventListener('wheel', handleWheel, { passive: false });
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
      className="py-20 md:py-28 lg:py-36 relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container-editorial">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-baseline gap-4 mb-6">
            <span className="caption text-accent">06</span>
            <h2 className="heading-1">
              Certificates <span className="text-accent">& Achievements</span>
            </h2>
          </div>
          <p className="body-lg text-fg-secondary max-w-xl leading-relaxed">
            Professional certifications and achievements across AI/ML, software engineering, and cloud technologies
          </p>
          <p className="caption text-fg-muted mt-4">
            Swipe horizontally or use arrow keys to navigate • Click to view full certificates
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-10">
            <motion.button
              onClick={goToPrevious}
              disabled={certificates.length <= cardsPerView}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-card border border-border text-fg-secondary hover:text-accent hover:border-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Previous certificates"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </motion.button>

            {/* Progress Dots */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i);
                    setIsAutoPlaying(false);
                  }}
                  whileHover={{ scale: 1.2 }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === i
                      ? 'bg-accent w-6'
                      : 'bg-border-light hover:bg-border w-1.5'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={goToNext}
              disabled={certificates.length <= cardsPerView}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-card border border-border text-fg-secondary hover:text-accent hover:border-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Next certificates"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Certificates Grid/Slider */}
          <div className="overflow-hidden rounded-2xl">
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
                  <div className="px-3">
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
            className="absolute -top-10 right-0 flex items-center gap-2 text-xs text-fg-muted"
          >
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
            Auto-playing
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <div className="card-editorial p-6 md:p-10 rounded-2xl max-w-sm mx-auto border-accent/30">
            <div className="heading-1 font-bold text-accent mb-2">
              {certificates.length}+
            </div>
            <p className="body-md text-fg-secondary">
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