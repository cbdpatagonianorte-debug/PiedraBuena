import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ComicPanelDTO } from '../types/comic';

interface ComicModalProps {
  panel: ComicPanelDTO | null;
  onClose: () => void;
}

/**
 * Visor Modal (Lightbox) para Ampliación de Viñetas de Cómic
 */
export const ComicModal: React.FC<ComicModalProps> = ({ panel, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onClose();
    };
    if (panel) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [panel, onClose]);

  return (
    <AnimatePresence>
      {panel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 border-4 border-black rounded-3xl shadow-comic-xl overflow-hidden"
          >
            {/* Botón de Cierre */}
            <button
              onClick={onClose}
              aria-label="Cerrar visor de viñeta"
              className="absolute top-4 right-4 z-30 p-2 bg-amber-500 hover:bg-amber-400 text-black border-2 border-black rounded-full shadow-comic-sm transition-transform hover:scale-110"
            >
              <X className="w-6 h-6 stroke-[3]" />
            </button>

            {/* Imagen Ampliada */}
            <div className="max-h-[60vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={panel.imageUrl}
                alt={panel.altText}
                className="w-full h-full object-contain max-h-[60vh]"
              />
            </div>

            {/* Detalle Histórico y Resumen Narrativo */}
            <div className="p-6 bg-slate-900 border-t-4 border-black">
              <div className="inline-block px-3 py-1 bg-amber-500 text-black font-heading text-xs uppercase border border-black rounded-md mb-2">
                DETALLE DE VIÑETA
              </div>
              <h4 className="font-epic text-2xl text-amber-400 mb-2">
                {panel.title}
              </h4>
              <p className="font-comic text-lg text-slate-200 leading-relaxed">
                {panel.summary}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
