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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-primary/90 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] card-editorial rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex-1 min-w-0 pr-4">
                <h3 className="heading-3 text-fg-primary mb-1 truncate">
                  {certificate.title}
                </h3>
                <p className="body-sm text-fg-muted truncate">
                  {certificate.issuer} • {certificate.date}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {/* Open in New Tab Button */}
                <button
                  onClick={() => window.open(certificate.fullImageUrl, '_blank')}
                  className="p-2 rounded-lg bg-card border border-border text-fg-secondary hover:text-accent hover:border-accent transition-all duration-200"
                  aria-label="Open certificate in new tab"
                >
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                </button>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-card border border-border text-fg-secondary hover:text-fg-primary hover:border-border-light transition-all duration-200"
                  aria-label="Close modal"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="relative">
                {/* Loading Spinner */}
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-card border border-border rounded-xl z-10">
                    <div className="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}

                {/* Certificate Viewer */}
                <div className="relative rounded-xl overflow-hidden bg-card">
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
                  <div className="mt-4 p-4 rounded-xl bg-card border border-border">
                    <p className="body-md text-fg-secondary leading-relaxed">
                      {certificate.description}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="caption px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                    {certificate.category}
                  </span>
                </div>

                <button
                  onClick={() => window.open(certificate.fullImageUrl, '_blank')}
                  className="btn-secondary px-6 py-2 text-sm"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
                  View Full Certificate
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}