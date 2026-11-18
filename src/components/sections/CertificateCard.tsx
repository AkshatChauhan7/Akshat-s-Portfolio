'use client';

import { motion } from 'framer-motion';
import { CalendarIcon, BuildingOfficeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
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
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -8,
      }}
      className="group cursor-pointer h-full"
      onClick={onClick}
    >
      <div className="h-full card-editorial rounded-xl p-6 border-border hover:border-accent/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
        {/* Category Badge */}
        <div className="flex justify-between items-start mb-4">
          <span className="caption px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
            {certificate.category}
          </span>
          <div className="w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse" />
        </div>

        {/* Certificate Preview */}
        <div className="relative mb-6 rounded-lg overflow-hidden bg-card aspect-[4/3] group-hover:scale-[1.01] transition-transform duration-300">
          {/* PDF Preview */}
          <iframe
            src={`${certificate.thumbnailUrl}#toolbar=0&navpanes=0&scrollbar=0&page=1&zoom=FitH`}
            className="w-full h-full border-0 pointer-events-none"
            title={`${certificate.title} Preview`}
            loading="lazy"
            style={{
              objectFit: 'contain',
              transform: 'scale(0.95)',
              transformOrigin: 'center'
            }}
          />

          {/* Overlay for click detection */}
          <div className="absolute inset-0 bg-transparent cursor-pointer" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* View Badge */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="px-3 py-1.5 caption bg-bg-primary/90 backdrop-blur-sm text-accent border border-accent/30 rounded">
              <MagnifyingGlassIcon className="w-3 h-3 inline mr-1" />
              View Details
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="heading-4 text-fg-primary group-hover:text-accent transition-colors duration-300 leading-snug">
            {certificate.title}
          </h3>

          {certificate.description && (
            <p className="body-sm text-fg-muted leading-relaxed line-clamp-2 group-hover:text-fg-secondary transition-colors duration-300">
              {certificate.description}
            </p>
          )}

          {/* Meta Information */}
          <div className="space-y-2 pt-2 border-t border-border">
            <div className="flex items-center gap-2 text-fg-muted text-sm">
              <BuildingOfficeIcon className="w-4 h-4 flex-shrink-0" />
              <span className="group-hover:text-fg-secondary transition-colors duration-300 truncate">
                {certificate.issuer}
              </span>
            </div>

            <div className="flex items-center gap-2 text-fg-muted text-sm">
              <CalendarIcon className="w-4 h-4 flex-shrink-0" />
              <span className="group-hover:text-fg-secondary transition-colors duration-300">
                {certificate.date}
              </span>
            </div>
          </div>
        </div>

        {/* Hover Effect Lines */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-accent to-transparent" />
          <div className="absolute right-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-accent to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}