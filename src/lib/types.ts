export type TimelineEra = 'kerajaan' | 'kolonial' | 'kemerdekaan' | 'modern';

export interface TimelineEvent {
  id: string;
  year: number | string;
  era: TimelineEra;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  keyFigures: string[];
  relatedEvents: string[];
  imageId: string;
}

export interface RegionFigure {
  name: string;
  description:string;
  imageId: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface RegionDetails {
  history: string;
  folklore: string;
  figures: RegionFigure[];
  cuisine: string[];
  cuisineImageId: string;
  clothing: string;
  clothingImageId: string;
  traditions: string[];
  traditionImageId: string;
  quiz: QuizQuestion[];
}

export interface Region {
  id: string;
  name: string;
  description: string;
  imageId: string;
  coordinates: [number, number];
  details: RegionDetails;
}

export type TraditionCategory = 'Tarian' | 'Kerajinan' | 'Upacara' | 'Kuliner' | 'Musik';

export interface Tradition {
  id: string;
  name: string;
  region: string;
  category: TraditionCategory;
  imageId: string;
  shortDescription: string;
  fullDescription: string;
  history: string;
  meaning: string;
}
