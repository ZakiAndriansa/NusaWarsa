import type {
  UserCulturalProfile,
  UserHeritage,
  TraditionRecommendation,
  PersonalityTraits,
  CulturalInterest
} from './types-user';
import type { Tradition } from './types';
import { traditionsData } from './data';

/**
 * Cultural Matching Algorithm
 * Recommends traditions based on user's heritage, interests, and personality
 */

export class CulturalMatcher {

  /**
   * Get personalized tradition recommendations
   */
  static getRecommendations(
    userProfile: UserCulturalProfile,
    userHeritage: UserHeritage,
    limit = 10
  ): TraditionRecommendation[] {
    const scores = traditionsData.map(tradition => ({
      tradition: tradition.id,
      score: this.calculateMatchScore(tradition, userProfile, userHeritage),
      tradition_obj: tradition
    }));

    // Sort by score descending
    scores.sort((a, b) => b.score - a.score);

    // Convert top matches to recommendations
    return scores.slice(0, limit).map(match =>
      this.createRecommendation(match.tradition_obj, match.score, userProfile, userHeritage)
    );
  }

  /**
   * Calculate match score for a tradition (0-100)
   */
  private static calculateMatchScore(
    tradition: Tradition,
    profile: UserCulturalProfile,
    heritage: UserHeritage
  ): number {
    let score = 0;

    // 1. Heritage Connection (40 points max)
    const heritageScore = this.calculateHeritageScore(tradition, heritage);
    score += heritageScore * 0.4;

    // 2. Interest Match (30 points max)
    const interestScore = this.calculateInterestScore(tradition, profile.interests);
    score += interestScore * 0.3;

    // 3. Personality Fit (20 points max)
    const personalityScore = this.calculatePersonalityScore(tradition, profile.personality);
    score += personalityScore * 0.2;

    // 4. Learning Goals Alignment (10 points max)
    const goalScore = this.calculateGoalScore(tradition, profile.learningGoals);
    score += goalScore * 0.1;

    return Math.round(score);
  }

  /**
   * Calculate heritage connection score (0-100)
   */
  private static calculateHeritageScore(tradition: Tradition, heritage: UserHeritage): number {
    const userRegions = heritage.regions.map(r => r.region.toLowerCase());
    const traditionRegion = tradition.region.toLowerCase();

    // Direct match
    if (userRegions.some(region => traditionRegion.includes(region) || region.includes(traditionRegion))) {
      return 100;
    }

    // Same island/cultural area
    const culturalAreas = this.getCulturalArea(tradition.region);
    const userAreas = heritage.regions.flatMap(r => this.getCulturalArea(r.region));

    if (culturalAreas.some(area => userAreas.includes(area))) {
      return 60;
    }

    return 0;
  }

  /**
   * Calculate interest alignment score (0-100)
   */
  private static calculateInterestScore(
    tradition: Tradition,
    interests: CulturalInterest[]
  ): number {
    const categoryInterest = interests.find(i => i.category === tradition.category);

    if (!categoryInterest) return 0;

    // Convert 1-5 scale to 0-100
    return (categoryInterest.level / 5) * 100;
  }

  /**
   * Calculate personality fit score (0-100)
   */
  private static calculatePersonalityScore(
    tradition: Tradition,
    personality: PersonalityTraits
  ): number {
    // Map tradition categories to personality traits
    const categoryTraits: Record<string, (keyof PersonalityTraits)[]> = {
      'Tarian': ['social', 'artistic', 'adventurous'],
      'Kerajinan': ['patient', 'artistic', 'practical'],
      'Upacara': ['spiritual', 'social', 'patient'],
      'Kuliner': ['practical', 'social', 'adventurous'],
      'Musik': ['artistic', 'patient', 'social']
    };

    const relevantTraits = categoryTraits[tradition.category] || [];

    if (relevantTraits.length === 0) return 50; // neutral

    const avgTraitScore = relevantTraits.reduce((sum, trait) =>
      sum + (personality[trait] || 3), 0
    ) / relevantTraits.length;

    return (avgTraitScore / 5) * 100;
  }

  /**
   * Calculate learning goals alignment (0-100)
   */
  private static calculateGoalScore(
    tradition: Tradition,
    goals: any[]
  ): number {
    const hasRelatedGoal = goals.some(goal =>
      goal.targetId === tradition.id ||
      goal.type === 'learn_tradition'
    );

    return hasRelatedGoal ? 100 : 50;
  }

  /**
   * Get cultural area/island grouping
   */
  private static getCulturalArea(region: string): string[] {
    const regionLower = region.toLowerCase();

    const areas: Record<string, string[]> = {
      'sumatera': ['aceh', 'sumatera utara', 'sumatera barat', 'riau', 'jambi', 'bengkulu', 'sumatera selatan', 'lampung', 'bangka belitung'],
      'jawa': ['dki jakarta', 'jawa barat', 'jawa tengah', 'diy', 'yogyakarta', 'jawa timur', 'banten'],
      'kalimantan': ['kalimantan barat', 'kalimantan tengah', 'kalimantan selatan', 'kalimantan timur', 'kalimantan utara'],
      'sulawesi': ['sulawesi utara', 'sulawesi tengah', 'sulawesi selatan', 'sulawesi tenggara', 'gorontalo', 'sulawesi barat'],
      'nusa_tenggara': ['bali', 'ntt', 'ntb', 'nusa tenggara timur', 'nusa tenggara barat'],
      'maluku': ['maluku', 'maluku utara'],
      'papua': ['papua', 'papua barat', 'papua tengah', 'papua pegunungan']
    };

    const matchedAreas: string[] = [];

    for (const [area, regions] of Object.entries(areas)) {
      if (regions.some(r => regionLower.includes(r) || r.includes(regionLower))) {
        matchedAreas.push(area);
      }
    }

    return matchedAreas;
  }

  /**
   * Create detailed recommendation object
   */
  private static createRecommendation(
    tradition: Tradition,
    score: number,
    profile: UserCulturalProfile,
    heritage: UserHeritage
  ): TraditionRecommendation {
    const reasons = this.generateReasons(tradition, score, profile, heritage);
    const learningPath = this.generateLearningPath(tradition);
    const difficulty = this.assessDifficulty(tradition, profile);

    return {
      tradition: tradition.id,
      score,
      reasons,
      learningPath,
      estimatedTime: this.estimateLearningTime(tradition, difficulty),
      difficulty,
      connections: {
        toUserHeritage: heritage.regions
          .filter(r => tradition.region.toLowerCase().includes(r.region.toLowerCase()))
          .map(r => r.region),
        toUserInterests: profile.interests
          .filter(i => i.category === tradition.category && i.level >= 3)
          .map(i => i.category),
        toUserPersonality: this.getRelevantPersonalityTraits(tradition, profile.personality)
      }
    };
  }

  /**
   * Generate recommendation reasons
   */
  private static generateReasons(
    tradition: Tradition,
    score: number,
    profile: UserCulturalProfile,
    heritage: UserHeritage
  ): string[] {
    const reasons: string[] = [];

    // Heritage connection
    const heritageMatch = heritage.regions.find(r =>
      tradition.region.toLowerCase().includes(r.region.toLowerCase())
    );
    if (heritageMatch) {
      const relationMap: Record<string, string> = {
        'father': 'ayah',
        'mother': 'ibu',
        'grandfather_paternal': 'kakek dari pihak ayah',
        'grandmother_paternal': 'nenek dari pihak ayah',
        'grandfather_maternal': 'kakek dari pihak ibu',
        'grandmother_maternal': 'nenek dari pihak ibu'
      };
      reasons.push(`Berasal dari daerah ${heritageMatch.region}, sama dengan ${relationMap[heritageMatch.relation] || 'leluhur'} Anda`);
    }

    // Interest match
    const categoryInterest = profile.interests.find(i => i.category === tradition.category);
    if (categoryInterest && categoryInterest.level >= 4) {
      reasons.push(`Sesuai dengan minat tinggi Anda terhadap ${tradition.category}`);
    }

    // Personality fit
    const personalityReasons = this.getPersonalityMatchReason(tradition, profile.personality);
    if (personalityReasons) {
      reasons.push(personalityReasons);
    }

    // Popularity/significance
    if (tradition.id.includes('batik') || tradition.id.includes('wayang') || tradition.id.includes('rendang')) {
      reasons.push('Warisan budaya yang diakui UNESCO');
    }

    // Default reason
    if (reasons.length === 0) {
      reasons.push(`Tradisi ${tradition.category} yang menarik untuk dipelajari`);
    }

    return reasons;
  }

  /**
   * Get personality-based recommendation reason
   */
  private static getPersonalityMatchReason(
    tradition: Tradition,
    personality: PersonalityTraits
  ): string | null {
    const { category } = tradition;

    if (category === 'Tarian' && personality.social >= 4) {
      return 'Cocok dengan kepribadian Anda yang sosial dan suka berinteraksi';
    }
    if (category === 'Kerajinan' && personality.patient >= 4) {
      return 'Sesuai dengan kesabaran dan ketelitian Anda';
    }
    if (category === 'Upacara' && personality.spiritual >= 4) {
      return 'Sejalan dengan nilai spiritual Anda';
    }
    if (category === 'Kuliner' && personality.practical >= 4) {
      return 'Praktis dan bisa langsung diterapkan dalam kehidupan sehari-hari';
    }

    return null;
  }

  /**
   * Generate learning path
   */
  private static generateLearningPath(tradition: Tradition): any[] {
    return [
      {
        order: 1,
        title: 'Kenali Sejarah',
        description: `Pelajari latar belakang dan sejarah ${tradition.name}`,
        type: 'read',
        estimatedDuration: '10 menit',
        completed: false
      },
      {
        order: 2,
        title: 'Pahami Makna',
        description: 'Mengerti filosofi dan nilai yang terkandung',
        type: 'read',
        estimatedDuration: '10 menit',
        completed: false
      },
      {
        order: 3,
        title: 'Lihat Demonstrasi',
        description: 'Tonton video atau visualisasi',
        type: 'watch',
        estimatedDuration: '15 menit',
        completed: false
      },
      {
        order: 4,
        title: 'Uji Pemahaman',
        description: `Quiz tentang ${tradition.name}`,
        type: 'quiz',
        estimatedDuration: '5 menit',
        completed: false
      },
      {
        order: 5,
        title: 'Praktik atau Kunjungi',
        description: tradition.category === 'Kuliner'
          ? 'Coba buat sendiri di rumah'
          : 'Cari komunitas atau tempat untuk mengalami langsung',
        type: 'practice',
        estimatedDuration: 'Bervariasi',
        completed: false
      }
    ];
  }

  /**
   * Assess difficulty level
   */
  private static assessDifficulty(tradition: Tradition, profile: UserCulturalProfile): 'easy' | 'medium' | 'hard' {
    const categoryDifficulty: Record<string, number> = {
      'Kuliner': 1,
      'Musik': 2,
      'Kerajinan': 2,
      'Tarian': 3,
      'Upacara': 3
    };

    const baseDifficulty = categoryDifficulty[tradition.category] || 2;
    const hasExperience = profile.completedChallenges.length > 0;

    if (baseDifficulty === 1 || hasExperience) return 'easy';
    if (baseDifficulty === 2) return 'medium';
    return 'hard';
  }

  /**
   * Estimate learning time
   */
  private static estimateLearningTime(tradition: Tradition, difficulty: string): string {
    const timeMap: Record<string, Record<string, string>> = {
      'Kuliner': { easy: '1 hari', medium: '3 hari', hard: '1 minggu' },
      'Musik': { easy: '2 minggu', medium: '1 bulan', hard: '3 bulan' },
      'Kerajinan': { easy: '1 minggu', medium: '2 minggu', hard: '1 bulan' },
      'Tarian': { easy: '2 minggu', medium: '1 bulan', hard: '3 bulan' },
      'Upacara': { easy: '1 minggu', medium: '2 minggu', hard: '1 bulan' }
    };

    return timeMap[tradition.category]?.[difficulty] || '2 minggu';
  }

  /**
   * Get relevant personality traits for a tradition
   */
  private static getRelevantPersonalityTraits(
    tradition: Tradition,
    personality: PersonalityTraits
  ): string[] {
    const relevantTraits: string[] = [];

    if (tradition.category === 'Tarian' && personality.social >= 4) relevantTraits.push('Sosial');
    if (tradition.category === 'Kerajinan' && personality.patient >= 4) relevantTraits.push('Sabar');
    if (tradition.category === 'Upacara' && personality.spiritual >= 4) relevantTraits.push('Spiritual');

    return relevantTraits;
  }

  /**
   * Find cultural twin region
   */
  static findCulturalTwin(userProfile: UserCulturalProfile, userHeritage: UserHeritage): string | null {
    // Get user's top interest category
    const topInterest = [...userProfile.interests]
      .sort((a, b) => b.level - a.level)[0];

    if (!topInterest) return null;

    // Find regions with similar cultural profile
    const regionScores = new Map<string, number>();

    traditionsData.forEach(tradition => {
      if (tradition.category === topInterest.category) {
        const score = regionScores.get(tradition.region) || 0;
        regionScores.set(tradition.region, score + 1);
      }
    });

    // Exclude user's own heritage regions
    const heritageRegions = userHeritage.regions.map(r => r.region.toLowerCase());

    const sortedRegions = Array.from(regionScores.entries())
      .filter(([region]) => !heritageRegions.some(hr =>
        region.toLowerCase().includes(hr) || hr.includes(region.toLowerCase())
      ))
      .sort((a, b) => b[1] - a[1]);

    return sortedRegions[0]?.[0] || null;
  }
}
