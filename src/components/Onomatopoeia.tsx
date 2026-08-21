import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { OnomatopoeiaDTO } from '../types/comic';

interface OnomatopoeiaProps {
  data: OnomatopoeiaDTO;
}

/**
 * Onomatopeya Estilo Cómic Interactiva
 * Muestra texto tipográfico "Bangers" con pulso y respuesta al clic.
 */
export const Onomatopoeia: React.FC<OnomatopoeiaProps> = ({ data }) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setClicked(true);
    setTimeout(() => setClicked(false), 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, rotate: data.rotationDegrees || -12 }}
      whileInView={{ opacity: 1, scale: 1, rotate: data.rotationDegrees || -8 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 15,
        delay: (data.delayMs || 0) / 1000,
      }}
      onClick={handleClick}
      style={{
        top: `${data.topPercent}%`,
        left: `${data.leftPercent}%`,
      }}
      animate={clicked ? { scale: 1.5, rotate: 0 } : { scale: 1 }}
      className="absolute z-30 cursor-pointer select-none font-heading text-3xl sm:text-4xl text-amber-300 drop-shadow-[3px_3px_0px_#000] hover:scale-110 transition-transform"
    >
      {data.text}
    </motion.div>
  );
};
