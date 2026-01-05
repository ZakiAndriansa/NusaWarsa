// User Profile & Heritage Types

export interface UserHeritage {
  id: string;
  userId: string;
  regions: HeritageRegion[];
  familyStories: FamilyStory[];
  createdAt: Date;
  updatedAt: Date;
}

export interface HeritageRegion {
  id: string;
  region: string; // e.g., "Jawa Tengah", "Sumatera Barat"
  relation: 'father' | 'mother' | 'grandfather_paternal' | 'grandmother_paternal' | 'grandfather_maternal' | 'grandmother_maternal' | 'other';
  relationDetails?: string; // for 'other' type
  traditions?: string[]; // tradition IDs they know/practice
}

export interface FamilyStory {
  id: string;
  title: string;
  content: string;
  region?: string;
  relatedTraditions?: string[];
  media?: StoryMedia[];
  isPublic: boolean;
  createdAt: Date;
}

export interface StoryMedia {
  type: 'image' | 'audio' | 'video';
  url: string;
  caption?: string;
}

// Cultural Match Types

export interface UserCulturalProfile {
  id: string;
  userId: string;
  interests: CulturalInterest[];
  personality: PersonalityTraits;
  learningGoals: LearningGoal[];
  completedChallenges: string[]; // tradition IDs
  achievements: Achievement[];
  culturalTwin?: string; // region ID
  createdAt: Date;
  updatedAt: Date;
}

export interface CulturalInterest {
  category: 'Tarian' | 'Kerajinan' | 'Upacara' | 'Kuliner' | 'Musik';
  level: 1 | 2 | 3 | 4 | 5; // 1 = not interested, 5 = very interested
}

export interface PersonalityTraits {
  adventurous: number; // 1-5
  artistic: number;
  social: number;
  spiritual: number;
  practical: number;
  patient: number;
}

export interface LearningGoal {
  type: 'learn_tradition' | 'visit_place' | 'master_skill' | 'connect_community';
  targetId?: string; // tradition ID or region ID
  description: string;
  progress: number; // 0-100
  deadline?: Date;
  completed: boolean;
}

export interface Achievement {
  id: string;
  type: 'tradition_learned' | 'story_shared' | 'quiz_completed' | 'connection_made' | 'milestone';
  title: string;
  description: string;
  icon: string;
  earnedAt: Date;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

// Interactive Scenario Types

export interface CulturalScenario {
  id: string;
  title: string;
  description: string;
  region: string;
  category: 'wedding' | 'funeral' | 'religious' | 'festival' | 'daily_life';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  context: string; // scenario setup
  learningObjectives: string[];
  steps: ScenarioStep[];
  tips: string[];
  commonMistakes: string[];
  relatedTraditions: string[];
}

export interface ScenarioStep {
  id: string;
  order: number;
  title: string;
  description: string;
  doList: string[]; // things to do
  dontList: string[]; // things to avoid
  keyPhrases?: KeyPhrase[];
  visualAid?: string; // image or video URL
}

export interface KeyPhrase {
  phrase: string;
  meaning: string;
  pronunciation?: string;
  audioUrl?: string;
  whenToUse: string;
}

// Recommendation Types

export interface TraditionRecommendation {
  tradition: string; // tradition ID
  score: number; // 0-100
  reasons: string[];
  learningPath: LearningPathStep[];
  estimatedTime: string; // e.g., "2 weeks", "1 month"
  difficulty: 'easy' | 'medium' | 'hard';
  connections: {
    toUserHeritage: string[];
    toUserInterests: string[];
    toUserPersonality: string[];
  };
}

export interface LearningPathStep {
  order: number;
  title: string;
  description: string;
  type: 'read' | 'watch' | 'practice' | 'quiz' | 'scenario' | 'connect';
  resourceUrl?: string;
  estimatedDuration: string; // e.g., "15 min"
  completed: boolean;
}

// Cultural Calendar Types

export interface CulturalEvent {
  id: string;
  title: string;
  region: string;
  date: Date; // or recurring pattern
  type: 'festival' | 'ceremony' | 'commemoration';
  description: string;
  relatedTraditions: string[];
  participationGuide?: string;
  isRecurring: boolean;
  recurrencePattern?: RecurrencePattern;
}

export interface RecurrencePattern {
  type: 'yearly' | 'monthly' | 'lunar_calendar';
  details: string; // e.g., "Every Sya'ban (Islamic calendar)"
}

// Connection & Community Types

export interface CulturalConnection {
  id: string;
  userId: string;
  connectedUserId: string;
  sharedInterests: string[]; // tradition IDs
  sharedHeritage: string[]; // region names
  connectionType: 'learning_buddy' | 'cultural_twin' | 'mentor' | 'mentee';
  status: 'pending' | 'active' | 'inactive';
  createdAt: Date;
}

// Quiz & Assessment Types

export interface CulturalQuiz {
  id: string;
  type: 'personality' | 'knowledge' | 'heritage_discovery';
  title: string;
  description: string;
  questions: QuizQuestion[];
  resultTypes: QuizResult[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple_choice' | 'scale' | 'multi_select' | 'text';
  options?: QuizOption[];
  scaleRange?: { min: number; max: number; minLabel: string; maxLabel: string };
}

export interface QuizOption {
  id: string;
  text: string;
  image?: string;
  scores?: Record<string, number>; // trait/category -> score mapping
}

export interface QuizResult {
  id: string;
  title: string;
  description: string;
  recommendations: string[]; // tradition IDs
  personalityMatch?: Partial<PersonalityTraits>;
  icon: string;
}
