'use client';

import { motion } from 'framer-motion';
import { CalendarIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { Certificate } from '@/utils/certificates';

interface CertificateCardProps {
  certificate: Certificate;
  onClick: () => void;
  index: number;
}

export function CertificateCard({ certificate, onClick, index }: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        y: -8,
      }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="h-full glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-primary-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/20 backdrop-blur-xl">
        {/* Category Badge */}
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <span className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-primary-500/20 text-primary-300 border border-primary-400/30">
            {certificate.category}
          </span>
          <div className="w-2 h-2 rounded-full bg-primary-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse"></div>
        </div>

        {/* Certificate Preview */}
        <div className="relative mb-4 sm:mb-6 rounded-lg overflow-hidden bg-white aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-300">
          {/* PDF Preview */}
          <iframe
            src={`${certificate.thumbnailUrl}#toolbar=0&navpanes=0&scrollbar=0&page=1&zoom=FitH`}
            className="w-full h-full border-0 pointer-events-none"
            title={`${certificate.title} Preview`}
            loading="lazy"
            style={{
              objectFit: 'contain',
              transform: 'scale(0.95)', // Slight scale to ensure no cropping
              transformOrigin: 'center'
            }}
          />
          
          {/* Overlay for click detection */}
          <div className="absolute inset-0 bg-transparent cursor-pointer"></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* View Badge */}
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="px-2 py-1 text-xs font-medium rounded-md bg-black/50 text-white backdrop-blur-sm">
              Click to view
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2 sm:space-y-3">
          <h3 className="font-semibold text-white group-hover:text-primary-300 transition-colors duration-300 text-base sm:text-lg leading-tight">
            {certificate.title}
          </h3>
          
          {certificate.description && (
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed line-clamp-2 group-hover:text-white/70 transition-colors duration-300">
              {certificate.description}
            </p>
          )}

          {/* Meta Information */}
          <div className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2">
            <div className="flex items-center gap-2 text-white/50 text-xs sm:text-sm">
              <BuildingOfficeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="group-hover:text-white/60 transition-colors duration-300 truncate">
                {certificate.issuer}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-white/50 text-xs sm:text-sm">
              <CalendarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="group-hover:text-white/60 transition-colors duration-300">
                {certificate.date}
              </span>
            </div>
          </div>
        </div>

        {/* Hover Effect Lines */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
          <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-primary-400 to-transparent"></div>
          <div className="absolute right-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-primary-400 to-transparent"></div>
        </div>
      </div>
    </motion.div>
  );
}