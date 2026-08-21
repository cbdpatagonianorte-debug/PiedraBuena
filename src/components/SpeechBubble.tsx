import React from 'react';
import { motion } from 'framer-motion';
import { SpeechBubbleDTO } from '../types/comic';

interface SpeechBubbleProps {
  data: SpeechBubbleDTO;
}

/**
 * Globo de Diálogo de Cómic (Speech Bubble)
 * Incluye variantes de posición, estilos de bocadillo e interacción spring de Framer Motion.
 */
export const SpeechBubble: React.FC<SpeechBubbleProps> = ({ data }) => {
  const getPositionClasses = (pos: SpeechBubbleDTO['position']): string => {
    switch (pos) {
      case 'top-left':
        return 'top-4 left-4 sm:top-6 sm:left-6 max-w-xs sm:max-w-md';
      case 'top-right':
        return 'top-4 right-4 sm:top-6 sm:right-6 max-w-xs sm:max-w-md';
      case 'bottom-left':
        return 'bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-xs sm:max-w-md';
      case 'bottom-right':
        return 'bottom-4 right-4 sm:bottom-6 sm:right-6 max-w-xs sm:max-w-md';
      case 'center':
        return 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-xs sm:max-w-lg';
      default:
        return 'bottom-4 right-4 max-w-xs sm:max-w-md';
    }
  };

  const getTypeClasses = (type?: SpeechBubbleDTO['type']): string => {
    switch (type) {
      case 'shout':
        return 'border-amber-400 bg-black/95 text-amber-300 font-extrabold uppercase tracking-wide border-4 shadow-comic-md';
      case 'whisper':
        return 'border-slate-400 bg-slate-900/90 text-slate-200 font-normal italic border-2 border-dashed shadow-comic-sm';
      case 'thought':
        return 'border-slate-300 bg-slate-950/95 text-slate-100 font-bold border-3 rounded-3xl shadow-comic-sm';
      default:
        return 'border-slate-200 bg-slate-950/90 text-slate-100 font-bold border-3 shadow-comic-sm';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: (data.delayMs || 0) / 1000,
      }}
      className={`absolute z-20 p-3 sm:p-4 rounded-2xl ${getPositionClasses(
        data.position
      )} ${getTypeClasses(data.type)}`}
    >
      {data.characterName && (
        <span className="block text-xs sm:text-sm font-heading text-amber-400 uppercase tracking-widest mb-1">
          {data.characterName}:
        </span>
      )}
      <p className="text-sm sm:text-base md:text-lg font-comic leading-tight">
        {data.text}
      </p>
    </motion.div>
  );
};
