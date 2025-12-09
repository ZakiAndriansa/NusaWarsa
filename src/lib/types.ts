export type TimelineEra = 'kerajaan' | 'kolonial' | 'kemerdekaan' | 'modern';

export interface TimelineEvent {
  id: string;
  year: number;
  era: TimelineEra;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  keyFigures: string[];
  relatedEvents: string[];
  imageId: string;
}

export interface Region {
  id: string;
  name: string;
  description: string;
  imageId: string;
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
