import React from 'react';
import { motion } from 'framer-motion';
import { NarratorBoxDTO } from '../types/comic';

interface NarratorBoxProps {
  data: NarratorBoxDTO;
}

/**
 * Cartela del Narrador (Cuadro Rectangular Estilo Pergamino de Cómic)
 */
export const NarratorBox: React.FC<NarratorBoxProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (data.delayMs || 0) / 1000 }}
      className="narrator-box text-left bg-slate-950/90 backdrop-blur-sm border-3 border-black p-3.5 shadow-comic-sm rounded-lg"
    >
      {data.locationHeader && (
        <span className="block font-heading text-amber-400 text-lg uppercase tracking-wider mb-1">
          {data.locationHeader}
        </span>
      )}
      <p className="text-base sm:text-lg font-comic font-bold text-slate-100 leading-snug">
        {data.text}
      </p>
    </motion.div>
  );
};
