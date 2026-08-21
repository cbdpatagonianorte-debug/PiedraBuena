import React from 'react';
import { Compass, ChevronDown } from 'lucide-react';
import { ComicDataDTO, ComicPanelDTO } from '../types/comic';

interface ComicHeroProps {
  data: ComicDataDTO;
  onOpenModal: (panel: ComicPanelDTO) => void;
}

/**
 * Portada Principal de la Novela Gráfica Interactiva PIEDRABUENA
 */
export const ComicHero: React.FC<ComicHeroProps> = ({ data, onOpenModal }) => {
  const coverPanel = data.episodes[0]?.panels[0];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto text-center z-10">
        
        {/* Insignia de Encabezado */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-amber-500 text-black font-extrabold border-2 border-black rounded-full shadow-comic-sm mb-6 uppercase text-sm font-heading">
          <Compass className="w-5 h-5 text-black" />
          <span>{data.period}</span>
        </div>

        {/* Títulos Principales */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-amber-400 font-epic uppercase tracking-tight drop-shadow-[0_5px_5px_rgba(0,0,0,1)] leading-none mb-4">
          {data.title}
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-slate-200 uppercase tracking-widest mb-8">
          {data.subtitle}
        </h2>

        {/* Viñeta de Portada Ilustrada Principal */}
        {coverPanel && (
          <div
            onClick={() => onOpenModal(coverPanel)}
            className="group relative max-w-4xl mx-auto rounded-3xl border-4 border-black bg-slate-900 shadow-comic-xl overflow-hidden cursor-pointer mb-10"
          >
            <img
              src={coverPanel.imageUrl}
              alt={coverPanel.altText}
              className="w-full h-[380px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Cartela de Introducción Narrativa */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-slate-950/90 backdrop-blur-sm border-3 border-black p-4 shadow-comic-sm text-left rounded-xl">
              <p className="text-base sm:text-lg font-bold font-comic text-white leading-snug">
                <span className="text-red-500 font-heading text-xl uppercase mr-2">
                  PATAGONIA, SIGLO XIX.
                </span>
                En las latitudes donde el océano colisiona con el hielo, un hombre convirtió su vida en un baluarte de soberanía y auxilio para los marinos de todo el mundo.
              </p>
            </div>
          </div>
        )}

        {/* Botón de Inicio de Lectura */}
        <div className="flex justify-center font-heading text-lg">
          <a
            href="#episodio-1"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-extrabold border-4 border-black rounded-2xl shadow-comic-md hover:-translate-y-1 transition-all flex items-center gap-3"
          >
            <span>COMENZAR LECTURA DE VIÑETAS</span>
            <ChevronDown className="w-6 h-6 stroke-[3]" />
          </a>
        </div>

      </div>
    </section>
  );
};
