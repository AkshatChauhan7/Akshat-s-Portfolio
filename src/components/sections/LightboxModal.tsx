'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Certificate } from '@/utils/certificates';

interface LightboxModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

export function LightboxModal({ certificate, isOpen, onClose }: LightboxModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  if (!certificate) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={handleBackdropClick}
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] glass-card rounded-2xl sm:rounded-2xl rounded-t-2xl overflow-hidden mx-2 sm:mx-0"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 truncate">
                  {certificate.title}
                </h3>
                <p className="text-primary-300 text-sm sm:text-base truncate">
                  {certificate.issuer} • {certificate.date}
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 ml-4">
                {/* Open in New Tab Button */}
                <button
                  onClick={() => window.open(certificate.fullImageUrl, '_blank')}
                  className="glass-button p-2 rounded-lg hover:scale-105 transition-all duration-200 touch-manipulation"
                  aria-label="Open certificate in new tab"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="glass-button p-2 rounded-lg hover:scale-105 transition-all duration-200 touch-manipulation"
                  aria-label="Close modal"
                >
                  <XMarkIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-3 sm:p-6">
              <div className="relative">
                {/* Loading Spinner */}
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-glass-dark rounded-lg">
                    <div className="w-8 h-8 border-2 border-primary-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}

                {/* Certificate Viewer */}
                <div className="relative rounded-lg overflow-hidden bg-white">
                  <iframe
                    src={`${certificate.fullImageUrl}#toolbar=0&navpanes=0&scrollbar=0&page=1&zoom=FitH`}
                    className="w-full border-0"
                    title={`${certificate.title} Certificate`}
                    onLoad={() => setIsLoading(false)}
                    style={{ 
                      height: window.innerWidth < 768 ? '50vh' : '70vh',
                      minHeight: window.innerWidth < 768 ? '300px' : '500px',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* Certificate Info */}
                {certificate.description && (
                  <div className="mt-3 sm:mt-4 p-3 sm:p-4 glass-card rounded-lg">
                    <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                      {certificate.description}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="px-3 pb-3 sm:px-6 sm:pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary-500/20 text-primary-300 border border-primary-400/30">
                    {certificate.category}
                  </span>
                </div>
                
                <button
                  onClick={() => window.open(certificate.fullImageUrl, '_blank')}
                  className="glass-button px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-primary-500/20 transition-all duration-200 touch-manipulation"
                >
                  Download Certificate
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}