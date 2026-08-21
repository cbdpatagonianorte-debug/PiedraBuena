import React, { useEffect, useState } from 'react';

/**
 * Componente de Barra de Progreso de Lectura de la Novela Gráfica
 * Muestra el porcentaje de scroll completado en la parte superior fija de la pantalla.
 */
export const ReadingProgressBar: React.FC = () => {
  const [progressPercent, setProgressPercent] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const currentScroll = window.scrollY;
      const calculated = (currentScroll / scrollHeight) * 100;
      setProgressPercent(Math.min(100, Math.max(0, calculated)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-slate-900 z-50 border-b border-black">
      <div
        className="h-full bg-amber-500 transition-all duration-150 ease-out shadow-[0_0_8px_#f59e0b]"
        style={{ width: `${progressPercent}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progressPercent)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};
