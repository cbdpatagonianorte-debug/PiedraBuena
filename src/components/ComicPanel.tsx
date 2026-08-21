import React from 'react';
import { motion } from 'framer-motion';
import { ComicPanelDTO } from '../types/comic';
import { NarratorBox } from './NarratorBox';
import { SpeechBubble } from './SpeechBubble';
import { Onomatopoeia } from './Onomatopoeia';

interface ComicPanelProps {
  panel: ComicPanelDTO;
  onOpenModal: (panel: ComicPanelDTO) => void;
}

/**
 * Viñeta de Cómic Interactiva
 * Marco rectangular con bordes negros gruesos (border-4 border-black) y sombra cómic.
 */
export const ComicPanel: React.FC<ComicPanelProps> = ({ panel, onOpenModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      onClick={() => onOpenModal(panel)}
      className={`group relative overflow-hidden rounded-3xl border-4 border-black bg-slate-900 shadow-comic-lg hover:shadow-comic-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
        panel.isFeatured ? 'max-w-4xl mx-auto' : 'w-full'
      }`}
    >
      {/* Imagen Principal de la Viñeta */}
      <div className="relative w-full h-[360px] sm:h-[480px] overflow-hidden">
        <img
          src={panel.imageUrl}
          alt={panel.altText}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Overlay Gradiente de Sombra Oceánica */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none" />

        {/* Cartela de Narrador */}
        {panel.narratorBox && (
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <NarratorBox data={panel.narratorBox} />
          </div>
        )}

        {/* Globos de Diálogo */}
        {panel.speechBubbles?.map((bubble) => (
          <SpeechBubble key={bubble.id} data={bubble} />
        ))}

        {/* Onomatopeyas */}
        {panel.onomatopoeias?.map((ono) => (
          <Onomatopoeia key={ono.id} data={ono} />
        ))}

        {/* Indicador de Ampliación al Clic */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-amber-500 text-black px-3 py-1 rounded-full font-heading text-xs border-2 border-black shadow-comic-sm z-30 pointer-events-none">
          AMPLIAR VIÑETA 🔍
        </div>
      </div>
    </motion.div>
  );
};
