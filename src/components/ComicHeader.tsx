import React from 'react';
import { Anchor } from 'lucide-react';
import { EpisodeDTO } from '../types/comic';

interface ComicHeaderProps {
  episodes: EpisodeDTO[];
}

/**
 * Encabezado Flotante Glassmorphic con Navegación por Episodios
 */
export const ComicHeader: React.FC<ComicHeaderProps> = ({ episodes }) => {
  return (
    <header className="fixed top-5 right-5 left-5 md:left-auto md:w-auto z-40 flex items-center justify-between gap-4 p-3 rounded-2xl bg-slate-900/90 backdrop-blur-md border-4 border-black shadow-[6px_6px_0px_#000]">
      <div className="flex items-center gap-2 font-heading text-sm text-amber-400">
        <Anchor className="w-5 h-5 text-amber-400" />
        <span className="tracking-wide text-base">NOVELA GRÁFICA INTERACTIVA</span>
      </div>

      {/* Navegación por episodios */}
      <nav className="hidden md:flex items-center gap-2 font-heading text-sm text-slate-200">
        {episodes.map((ep) => (
          <a
            key={ep.id}
            href={`#${ep.id}`}
            className="px-3 py-1 bg-slate-800 hover:bg-amber-500 hover:text-black rounded-lg border-2 border-black transition-colors"
          >
            EPI. {ep.romanNumber}
          </a>
        ))}
      </nav>
    </header>
  );
};
