import React, { useState } from 'react';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { ComicHeader } from './components/ComicHeader';
import { ComicHero } from './components/ComicHero';
import { ComicPanel } from './components/ComicPanel';
import { ComicModal } from './components/ComicModal';
import { PIEDRABUENA_COMIC_DATA } from './data/comicData';
import { ComicPanelDTO } from './types/comic';

export const App: React.FC = () => {
  const [selectedPanel, setSelectedPanel] = useState<ComicPanelDTO | null>(null);

  const handleOpenModal = (panel: ComicPanelDTO): void => {
    setSelectedPanel(panel);
  };

  const handleCloseModal = (): void => {
    setSelectedPanel(null);
  };

  return (
    <div className="min-h-screen bg-ocean-950 text-slate-100 trama-imprenta selection:bg-amber-500 selection:text-black">
      {/* Barra Fija de Progreso de Lectura */}
      <ReadingProgressBar />

      {/* Encabezado Flotante Glassmorphic */}
      <ComicHeader episodes={PIEDRABUENA_COMIC_DATA.episodes} />

      {/* Secciones Principales */}
      <main>
        {/* Portada Hero */}
        <ComicHero data={PIEDRABUENA_COMIC_DATA} onOpenModal={handleOpenModal} />

        {/* Sección de Episodios & Viñetas */}
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-24">
          {PIEDRABUENA_COMIC_DATA.episodes.map((episode) => (
            <section
              key={episode.id}
              id={episode.id}
              className="space-y-8 scroll-mt-24"
            >
              {/* Encabezado del Episodio */}
              <div className="flex items-center gap-4 border-b-2 border-slate-800 pb-4">
                <div className="w-12 h-12 bg-amber-500 border-4 border-black flex items-center justify-center font-heading text-2xl text-black shadow-comic-sm">
                  {episode.romanNumber}
                </div>
                <div>
                  <h3 className="text-3xl font-black font-epic text-amber-400">
                    {episode.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-comic">
                    {episode.locationDate}
                  </p>
                </div>
              </div>

              {/* Viñetas del Episodio */}
              <div className="grid grid-cols-1 gap-12">
                {episode.panels.map((panel) => (
                  <ComicPanel
                    key={panel.id}
                    panel={panel}
                    onOpenModal={handleOpenModal}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Visor Modal de Ampliación de Viñeta */}
      <ComicModal panel={selectedPanel} onClose={handleCloseModal} />

      {/* Pie de Página Cómic */}
      <footer className="border-t-4 border-black bg-slate-950 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="font-heading text-xl text-amber-400">
            PIEDRA BUENA: EL GUARDIÁN DEL MAR PATAGÓNICO
          </p>
          <p className="text-sm text-slate-400 font-comic">
            Homenaje a Don Luis Piedra Buena (1833-1883) • Desarrollado con React 19, TypeScript & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
