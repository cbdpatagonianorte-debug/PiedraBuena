/**
 * Domain Transfer Objects (DTO) y tipos estrictos para la Novela Gráfica PIEDRABUENA
 * Definición supervisada por Science & Technical Advisor y Lead Architect.
 */

export type BubbleType = 'speech' | 'thought' | 'whisper' | 'shout';

export type BubblePosition = 
  | 'top-left' 
  | 'top-right' 
  | 'bottom-left' 
  | 'bottom-right'
  | 'center';

export interface SpeechBubbleDTO {
  id: string;
  characterName?: string;
  text: string;
  position: BubblePosition;
  type?: BubbleType;
  delayMs?: number;
}

export interface NarratorBoxDTO {
  id: string;
  locationHeader?: string;
  text: string;
  position?: 'top' | 'bottom';
  delayMs?: number;
}

export interface OnomatopoeiaDTO {
  id: string;
  text: string;
  topPercent: number;
  leftPercent: number;
  rotationDegrees?: number;
  delayMs?: number;
}

export interface ComicPanelDTO {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  altText: string;
  narratorBox?: NarratorBoxDTO;
  speechBubbles?: SpeechBubbleDTO[];
  onomatopoeias?: OnomatopoeiaDTO[];
  isFeatured?: boolean;
}

export interface EpisodeDTO {
  id: string;
  romanNumber: string;
  title: string;
  locationDate: string;
  summary: string;
  panels: ComicPanelDTO[];
}

export interface ComicDataDTO {
  title: string;
  subtitle: string;
  period: string;
  episodes: EpisodeDTO[];
}
