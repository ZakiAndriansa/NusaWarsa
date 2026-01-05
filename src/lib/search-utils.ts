import { traditionsData, timelineData, regionsData } from './data';
import { culturalScenarios } from './scenarios-data';

export interface SearchResult {
  type: 'page' | 'section' | 'tradition' | 'timeline' | 'region' | 'scenario';
  title: string;
  description: string;
  href: string;
  category?: string;
}

// Static pages and sections - only searchable, not shown by default
const staticSearchItems: SearchResult[] = [
  // Pages
  { type: 'page', title: 'Temukan Tradisi', description: 'Quiz kepribadian budaya Indonesia', href: '/quiz', category: 'Fitur' },
  { type: 'page', title: 'Panduan Budaya', description: 'Panduan langkah-demi-langkah situasi budaya', href: '/scenarios', category: 'Fitur' },
  { type: 'page', title: 'AI Assistant', description: 'Chat dengan AI untuk pertanyaan mendesak', href: '/scenarios/emergency', category: 'Fitur' },
  { type: 'page', title: 'Quiz Budaya', description: 'Quiz kepribadian untuk menemukan tradisi yang cocok', href: '/quiz', category: 'Fitur' },
  // Sections
  { type: 'section', title: 'Timeline Sejarah', description: 'Jelajahi perjalanan sejarah Indonesia', href: '/#timeline', category: 'Navigasi' },
  { type: 'section', title: 'Linimasa', description: 'Jelajahi perjalanan sejarah Indonesia', href: '/#timeline', category: 'Navigasi' },
  { type: 'section', title: 'Peta Indonesia', description: 'Eksplorasi tradisi per provinsi', href: '/#peta', category: 'Navigasi' },
  { type: 'section', title: 'Galeri Tradisi', description: 'Lihat koleksi tradisi Nusantara', href: '/#galeri', category: 'Navigasi' },
  { type: 'section', title: 'Galeri', description: 'Koleksi lengkap tradisi Indonesia', href: '/#galeri', category: 'Navigasi' },
  { type: 'section', title: 'Layanan Kami', description: 'Fitur-fitur interaktif kami', href: '/#layanan', category: 'Navigasi' },
  { type: 'section', title: 'Layanan', description: 'Temukan tradisi dan panduan budaya', href: '/#layanan', category: 'Navigasi' },
  { type: 'section', title: 'Tentang Kami', description: 'Pelajari lebih lanjut tentang platform', href: '/#tentang', category: 'Navigasi' },
  { type: 'section', title: 'Tentang', description: 'Visi, misi, dan nilai kami', href: '/#tentang', category: 'Navigasi' },
  { type: 'section', title: 'FAQ', description: 'Pertanyaan yang sering diajukan', href: '/#faq', category: 'Navigasi' },
];

// Generate search data from traditions
function getTraditionsSearchData(): SearchResult[] {
  return traditionsData.map(tradition => ({
    type: 'tradition' as const,
    title: tradition.name,
    description: `${tradition.category} dari ${tradition.region}`,
    href: `/explore/${tradition.id}`,
    category: tradition.category
  }));
}

// Generate search data from timeline
function getTimelineSearchData(): SearchResult[] {
  return timelineData.map(event => {
    const desc = event.description || '';
    const truncatedDesc = desc.length > 80 ? desc.substring(0, 80) + '...' : desc;
    return {
      type: 'timeline' as const,
      title: event.title,
      description: `${event.year} - ${truncatedDesc}`,
      href: `/timeline/${event.slug}`,
      category: event.era
    };
  });
}

// Generate search data from regions
function getRegionsSearchData(): SearchResult[] {
  return regionsData.map(region => {
    const desc = region.description || region.name;
    const slug = region.id;
    return {
      type: 'region' as const,
      title: region.name,
      description: desc.substring(0, 100) + (desc.length > 100 ? '...' : ''),
      href: `/explore/${slug}`,
      category: 'Wilayah'
    };
  });
}

// Generate search data from scenarios
function getScenariosSearchData(): SearchResult[] {
  return culturalScenarios.map(scenario => {
    const desc = scenario.description || '';
    const truncatedDesc = desc.length > 70 ? desc.substring(0, 70) + '...' : desc;
    return {
      type: 'scenario' as const,
      title: scenario.title,
      description: `${scenario.region} - ${truncatedDesc}`,
      href: `/scenarios/${scenario.id}`,
      category: scenario.category
    };
  });
}

// Cached search data - only generated once (cleared in dev mode for hot reload)
let cachedSearchData: SearchResult[] | null = null;

export function getAllSearchData(): SearchResult[] {
  // In development, always regenerate to handle hot reloads
  if (process.env.NODE_ENV === 'development') {
    cachedSearchData = null;
  }

  if (cachedSearchData) {
    return cachedSearchData;
  }

  const traditionsItems = getTraditionsSearchData();
  const timelineItems = getTimelineSearchData();
  const regionsItems = getRegionsSearchData();
  const scenariosItems = getScenariosSearchData();

  cachedSearchData = [
    ...staticSearchItems,
    ...traditionsItems,
    ...timelineItems,
    ...regionsItems,
    ...scenariosItems
  ];

  return cachedSearchData;
}

// Fuzzy search function with optimization
export function searchItems(query: string, limit = 50): SearchResult[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const normalizedQuery = query.toLowerCase().trim();
  const allData = getAllSearchData();

  // Score each item based on relevance
  const scoredResults = allData
    .map(item => {
      const titleLower = item.title.toLowerCase();
      const descLower = item.description.toLowerCase();

      let score = 0;

      // Exact match in title gets highest score
      if (titleLower === normalizedQuery) {
        score += 100;
      }
      // Title starts with query
      else if (titleLower.startsWith(normalizedQuery)) {
        score += 50;
      }
      // Title contains query
      else if (titleLower.includes(normalizedQuery)) {
        score += 30;
      }

      // Description contains query
      if (descLower.includes(normalizedQuery)) {
        score += 10;
      }

      // Category match
      if (item.category?.toLowerCase().includes(normalizedQuery)) {
        score += 15;
      }

      return { item, score };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(result => result.item);

  return scoredResults;
}

// Group results by type
export function groupSearchResults(results: SearchResult[]) {
  const grouped: Record<string, SearchResult[]> = {
    page: [],
    section: [],
    tradition: [],
    timeline: [],
    region: [],
    scenario: []
  };

  results.forEach(item => {
    if (grouped[item.type]) {
      grouped[item.type].push(item);
    }
  });

  return grouped;
}
