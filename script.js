/**
 * PIEDRA BUENA: NOVELA GRÁFICA INTERACTIVA - LÓGICA DE INTERACCIÓN (script.js)
 * Manejo de desplazamiento vertical, animaciones de viñetas y visor modal
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de componentes interactivos
  iniciarObservadorDeScroll();
  iniciarVisorModal();
  iniciarProgresoDeLectura();
});

/* ==========================================================================
   1. OBSERVADOR DE DESPLAZAMIENTO - ANIMACIÓN DE GLOBOS Y NARRACIÓN
   ========================================================================== */
function iniciarObservadorDeScroll() {
  const opcionesObservador = {
    root: null,
    rootMargin: '0px 0px -15% 0px',
    threshold: 0.25
  };

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        const vineta = entrada.target;
        vineta.classList.add('vineta-activa');

        // Animación progresiva de las cartelas de narrador
        const cartelas = vineta.querySelectorAll('.narrator-box');
        cartelas.forEach((cartela, indice) => {
          setTimeout(() => {
            cartela.classList.add('narrator-visible');
          }, indice * 200);
        });

        // Animación progresiva de los globos de diálogo
        const globos = vineta.querySelectorAll('.speech-bubble');
        globos.forEach((globo, indice) => {
          setTimeout(() => {
            globo.classList.add('bubble-visible');
          }, 350 + (indice * 300));
        });

        // Animación de las onomatopeyas visuales
        const onomatopeyas = vineta.querySelectorAll('.onomatopeya');
        onomatopeyas.forEach((ono, indice) => {
          setTimeout(() => {
            ono.classList.add('onomatopeya-visible');
          }, 500 + (indice * 250));
        });
      }
    });
  }, opcionesObservador);

  // Observar cada viñeta del cómic
  const vinetas = document.querySelectorAll('.vineta-comic');
  vinetas.forEach((vineta) => observador.observe(vineta));
}

/* ==========================================================================
   2. VISOR MODAL (LIGHTBOX) - AMPLIACIÓN DE VIÑETAS
   ========================================================================== */
function iniciarVisorModal() {
  const modal = document.getElementById('visor-modal');
  const imagenModal = document.getElementById('imagen-modal');
  const tituloModal = document.getElementById('titulo-modal');
  const descripcionModal = document.getElementById('descripcion-modal');
  const botonCerrar = document.getElementById('cerrar-modal');

  if (!modal) return;

  const vinetas = document.querySelectorAll('.vineta-comic');

  vinetas.forEach((vineta) => {
    vineta.addEventListener('click', (evento) => {
      if (evento.target.closest('button')) return;

      const imagen = vineta.querySelector('img');
      const titulo = vineta.getAttribute('data-capitulo') || 'Viñeta de Novela Gráfica';
      const descripcion = vineta.getAttribute('data-resumen') || 'Detalle histórico de la expedición marítima de Don Luis Piedra Buena.';

      if (imagen) {
        imagenModal.src = imagen.src;
        tituloModal.textContent = titulo;
        descripcionModal.textContent = descripcion;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const cerrarVisor = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  };

  if (botonCerrar) botonCerrar.addEventListener('click', cerrarVisor);
  modal.addEventListener('click', (evento) => {
    if (evento.target === modal) cerrarVisor();
  });
}

/* ==========================================================================
   3. BARRA DE PROGRESO DE LECTURA Y EFECTOS EN ONOMATOPEYAS
   ========================================================================== */
function iniciarProgresoDeLectura() {
  const barraProgreso = document.getElementById('barra-progreso-lectura');
  if (!barraProgreso) return;

  window.addEventListener('scroll', () => {
    const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
    const posicionScroll = window.scrollY;
    const progreso = (posicionScroll / alturaTotal) * 100;
    barraProgreso.style.width = `${Math.min(100, Math.max(0, progreso))}%`;
  });

  // Animación interactiva al hacer clic en las onomatopeyas
  const onomatopeyas = document.querySelectorAll('.onomatopeya');
  onomatopeyas.forEach((ono) => {
    ono.style.cursor = 'pointer';
    ono.addEventListener('click', (evento) => {
      evento.stopPropagation();
      ono.style.transform = 'scale(1.5) rotate(0deg)';
      setTimeout(() => {
        ono.style.transform = '';
      }, 300);
    });
  });
}
