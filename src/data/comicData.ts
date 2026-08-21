import { ComicDataDTO } from '../types/comic';

export const PIEDRABUENA_COMIC_DATA: ComicDataDTO = {
  title: 'PIEDRA BUENA',
  subtitle: 'EL GUARDIÁN DEL MAR PATAGÓNICO',
  period: 'Novela Gráfica Histórica • 1833–1883',
  episodes: [
    {
      id: 'episodio-1',
      romanNumber: 'I',
      title: 'JUVENTUD EN LAS COSTAS DEL SUR',
      locationDate: 'Carmen de Patagones (1843)',
      summary: 'Los primeros años del joven Luis Piedra Buena en el río Negro y su fascinación inquebrantable por el mar austral.',
      panels: [
        {
          id: 'panel-1-1',
          title: 'Juventud en el Río Negro',
          summary: 'Luis Piedra Buena de niño observando el horizonte náutico frente a la desembocadura del Río Negro.',
          imageUrl: './assets/cover.jpg',
          altText: 'El joven Luis Piedra Buena frente al mar patagónico',
          isFeatured: true,
          narratorBox: {
            id: 'n-1-1',
            locationHeader: 'PATAGONIA, 1843',
            text: 'Desde muy pequeño, el mar patagónico llamó a Luis con una voz ineludible. En las frías corrientes del Sur, forjó su temple y su juramento de auxilio permanente.',
          },
          speechBubbles: [
            {
              id: 'b-1-1',
              characterName: 'Luis Piedra Buena (Joven)',
              text: '¡Algún día comandaré un cúter y este mar guardará la soberanía de nuestra patria!',
              position: 'bottom-right',
              type: 'shout',
              delayMs: 300,
            },
          ],
          onomatopoeias: [
            {
              id: 'o-1-1',
              text: 'WHISHHH!',
              topPercent: 20,
              leftPercent: 80,
              rotationDegrees: -15,
            },
          ],
        },
      ],
    },
    {
      id: 'episodio-2',
      romanNumber: 'II',
      title: 'NAUFRAGIOS Y SALVAMENTOS EN EL OCÉANO AUSTRAL',
      locationDate: 'Isla de los Estados y Cabo de Hornos (1859-1873)',
      summary: 'El coraje del comandante Piedra Buena arriesgando su propia vida para rescatar a cientos de marineros de buques extranjeros varados en la tormenta.',
      panels: [
        {
          id: 'panel-2-1',
          title: 'Rescate en el Cúter Luisito',
          summary: 'Don Luis Piedra Buena maniobrando en medio de una feroz marejada patagónica para salvar a marinos naufragados.',
          imageUrl: './assets/cover.jpg',
          altText: 'El cúter Luisito desafiando el oleaje tormentoso',
          isFeatured: false,
          narratorBox: {
            id: 'n-2-1',
            locationHeader: 'ISLA DE LOS ESTADOS',
            text: 'En el tempestuoso Estrecho de Le Maire, Piedra Buena no distinguía banderas ni nacionalidades. Toda vida humana en el mar era su deber inviolable.',
          },
          speechBubbles: [
            {
              id: 'b-2-1',
              characterName: 'Comandante Luis Piedra Buena',
              text: '¡Firmes al timón! ¡Nadie queda atrás mientras haya un soplo de vida en estas aguas!',
              position: 'top-left',
              type: 'shout',
              delayMs: 400,
            },
          ],
          onomatopoeias: [
            {
              id: 'o-2-1',
              text: 'ROAAAR!',
              topPercent: 15,
              leftPercent: 10,
              rotationDegrees: -8,
            },
            {
              id: 'o-2-2',
              text: 'CRACK!',
              topPercent: 70,
              leftPercent: 75,
              rotationDegrees: 12,
            },
          ],
        },
      ],
    },
    {
      id: 'episodio-3',
      romanNumber: 'III',
      title: 'LA BANDERA EN ISLA DE LOS ESTADOS Y PAVÓN',
      locationDate: 'Puerto Cook e Isla Pavón (1868)',
      summary: 'Establecimiento del puesto de salvamento y la afirmación pacífica pero inquebrantable de la soberanía nacional en la Patagonia austral.',
      panels: [
        {
          id: 'panel-3-1',
          title: 'El Izamiento de la Bandera',
          summary: 'Luis Piedra Buena izando el pabellón argentino en las gélidas tierras australes.',
          imageUrl: './assets/cover.jpg',
          altText: 'Luis Piedra Buena junto al mástil de la bandera argentina',
          isFeatured: false,
          narratorBox: {
            id: 'n-3-1',
            locationHeader: 'ISLA PAVÓN • RÍO SANTA CRUZ',
            text: 'Donde otros veían solo desierto e infierno helado, Luis Piedra Buena sembró un refugio de humanidad y bandera soberana.',
          },
          speechBubbles: [
            {
              id: 'b-3-1',
              characterName: 'Luis Piedra Buena',
              text: 'Esta tierra y este mar son argentinos, defendidos no con las armas sino con el amparo y el trabajo.',
              position: 'bottom-left',
              type: 'speech',
              delayMs: 300,
            },
          ],
        },
      ],
    },
    {
      id: 'episodio-4',
      romanNumber: 'IV',
      title: 'EL LEGADO ETERNO DEL GUARDIÁN',
      locationDate: 'Mar Argentino (1883 - Presente)',
      summary: 'El legado imperecedero del prócer marino que custodió los mares del Sur sin esperar recompensa alguna.',
      panels: [
        {
          id: 'panel-4-1',
          title: 'El Guardián Eterno',
          summary: 'Retrato de honor al Comandante Don Luis Piedra Buena.',
          imageUrl: './assets/cover.jpg',
          altText: 'Retrato de honor del Comandante Don Luis Piedra Buena',
          isFeatured: true,
          narratorBox: {
            id: 'n-4-1',
            locationHeader: 'MEMORIA ETERNA',
            text: 'Más de 300 vidas salvadas del abismo oceánico. Su nombre permanece grabado en cada faro, cabo e isla de la Patagonia argentina.',
          },
          speechBubbles: [
            {
              id: 'b-4-1',
              characterName: 'Homenaje Nacional',
              text: '«Es bueno que sepan los marinos del mundo que en estas solitarias latitudes vela un guardián constante.»',
              position: 'center',
              type: 'whisper',
              delayMs: 200,
            },
          ],
        },
      ],
    },
  ],
};
