import type { CulturalQuiz } from './types-user';

/**
 * Cultural Match Quiz - Personality & Interest Assessment
 */
export const culturalMatchQuiz: CulturalQuiz = {
  id: 'cultural-match-main',
  type: 'personality',
  title: 'Temukan Tradisi yang Cocok untuk Anda',
  description: 'Jawab beberapa pertanyaan untuk menemukan tradisi budaya Indonesia yang paling sesuai dengan kepribadian dan minat Anda',
  questions: [
    {
      id: 'q1-weekend',
      question: 'Bagaimana Anda biasanya menghabiskan akhir pekan yang ideal?',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: 'Berkumpul dengan teman dan keluarga, ngobrol dan makan bersama',
          image: '/images/quiz/social.jpg',
          scores: { social: 5, practical: 3 }
        },
        {
          id: 'b',
          text: 'Mengerjakan proyek kreatif atau kerajinan tangan',
          image: '/images/quiz/craft.jpg',
          scores: { artistic: 5, patient: 4 }
        },
        {
          id: 'c',
          text: 'Mencoba hal baru atau mengeksplorasi tempat baru',
          image: '/images/quiz/adventure.jpg',
          scores: { adventurous: 5, social: 2 }
        },
        {
          id: 'd',
          text: 'Merenung, meditasi, atau kegiatan spiritual',
          image: '/images/quiz/spiritual.jpg',
          scores: { spiritual: 5, patient: 3 }
        }
      ]
    },
    {
      id: 'q2-learning-style',
      question: 'Cara belajar yang paling Anda sukai?',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: 'Langsung praktik hands-on',
          scores: { practical: 5, adventurous: 3 }
        },
        {
          id: 'b',
          text: 'Belajar teori dulu, praktik kemudian',
          scores: { patient: 5, practical: 2 }
        },
        {
          id: 'c',
          text: 'Belajar bersama teman dalam grup',
          scores: { social: 5, adventurous: 2 }
        },
        {
          id: 'd',
          text: 'Mengamati dan merenungkan maknanya',
          scores: { spiritual: 5, patient: 4 }
        }
      ]
    },
    {
      id: 'q3-patience',
      question: 'Seberapa sabar Anda dengan proses yang memakan waktu lama?',
      type: 'scale',
      scaleRange: {
        min: 1,
        max: 5,
        minLabel: 'Tidak sabaran, suka yang cepat',
        maxLabel: 'Sangat sabar, nikmati prosesnya'
      }
    },
    {
      id: 'q4-social',
      question: 'Seberapa nyaman Anda tampil atau berinteraksi di depan banyak orang?',
      type: 'scale',
      scaleRange: {
        min: 1,
        max: 5,
        minLabel: 'Lebih suka sendirian/kelompok kecil',
        maxLabel: 'Sangat nyaman dengan keramaian'
      }
    },
    {
      id: 'q5-interests',
      question: 'Pilih kategori budaya yang menarik bagi Anda (boleh lebih dari 1)',
      type: 'multi_select',
      options: [
        { id: 'tarian', text: 'Tarian & Seni Pertunjukan', image: '/images/quiz/dance.jpg' },
        { id: 'kerajinan', text: 'Kerajinan & Seni Rupa', image: '/images/quiz/craft-tradition.jpg' },
        { id: 'upacara', text: 'Upacara & Ritual Tradisional', image: '/images/quiz/ceremony.jpg' },
        { id: 'kuliner', text: 'Kuliner & Makanan Tradisional', image: '/images/quiz/food.jpg' },
        { id: 'musik', text: 'Musik & Alat Musik Tradisional', image: '/images/quiz/music.jpg' }
      ]
    },
    {
      id: 'q6-spiritual',
      question: 'Seberapa penting makna spiritual/filosofis dalam hidup Anda?',
      type: 'scale',
      scaleRange: {
        min: 1,
        max: 5,
        minLabel: 'Tidak terlalu penting',
        maxLabel: 'Sangat penting'
      }
    },
    {
      id: 'q7-artistic',
      question: 'Apakah Anda menganggap diri sebagai orang yang artistik/kreatif?',
      type: 'scale',
      scaleRange: {
        min: 1,
        max: 5,
        minLabel: 'Tidak terlalu',
        maxLabel: 'Sangat artistik'
      }
    },
    {
      id: 'q8-goals',
      question: 'Apa tujuan utama Anda dalam mempelajari budaya Indonesia?',
      type: 'multiple_choice',
      options: [
        {
          id: 'a',
          text: 'Mengenal akar dan warisan keluarga saya',
          scores: { spiritual: 4, patient: 3 }
        },
        {
          id: 'b',
          text: 'Mencari hobi atau keterampilan baru',
          scores: { practical: 5, artistic: 3 }
        },
        {
          id: 'c',
          text: 'Bertemu dan terhubung dengan komunitas',
          scores: { social: 5, adventurous: 3 }
        },
        {
          id: 'd',
          text: 'Memahami filosofi dan kearifan lokal',
          scores: { spiritual: 5, patient: 4 }
        }
      ]
    }
  ],
  resultTypes: [
    {
      id: 'social-explorer',
      title: 'Penjelajah Sosial',
      description: 'Anda adalah orang yang energik dan suka berinteraksi! Tradisi yang melibatkan komunitas dan kebersamaan sangat cocok untuk Anda.',
      recommendations: ['tari-saman', 'tari-kecak', 'gamelan', 'rendang'],
      personalityMatch: { social: 5, adventurous: 4 },
      icon: '🎭'
    },
    {
      id: 'patient-artisan',
      title: 'Pengrajin Sabar',
      description: 'Anda memiliki kesabaran dan ketelitian tinggi. Kerajinan tangan yang detail dan membutuhkan waktu adalah passion Anda.',
      recommendations: ['batik', 'tenun', 'ukiran-asmat', 'wayang'],
      personalityMatch: { patient: 5, artistic: 4 },
      icon: '🎨'
    },
    {
      id: 'spiritual-seeker',
      title: 'Pencari Makna',
      description: 'Anda tertarik pada filosofi dan nilai-nilai mendalam. Tradisi dengan makna spiritual kuat akan resonan dengan Anda.',
      recommendations: ['ngaben', 'wayang', 'sekaten', 'kasada'],
      personalityMatch: { spiritual: 5, patient: 4 },
      icon: '🕉️'
    },
    {
      id: 'practical-foodie',
      title: 'Praktisi Kuliner',
      description: 'Anda adalah orang praktis yang suka hal-hal yang bisa langsung diterapkan, terutama di dapur!',
      recommendations: ['rendang', 'gudeg', 'pempek', 'soto-banjar'],
      personalityMatch: { practical: 5, social: 3 },
      icon: '🍜'
    },
    {
      id: 'artistic-performer',
      title: 'Seniman Pertunjukan',
      description: 'Anda kreatif dan ekspresif. Seni pertunjukan dan musik adalah canvas ekspresi Anda.',
      recommendations: ['tari-piring', 'tari-pendet', 'angklung', 'gamelan'],
      personalityMatch: { artistic: 5, social: 4 },
      icon: '💃'
    },
    {
      id: 'balanced-learner',
      title: 'Pembelajar Seimbang',
      description: 'Anda memiliki minat yang seimbang di berbagai aspek budaya. Fleksibilitas adalah kekuatan Anda!',
      recommendations: ['batik', 'rendang', 'gamelan', 'tari-kecak'],
      personalityMatch: { social: 3, practical: 3, artistic: 3 },
      icon: '⚖️'
    }
  ]
};

/**
 * Heritage Discovery Quiz
 */
export const heritageDiscoveryQuiz: CulturalQuiz = {
  id: 'heritage-discovery',
  type: 'heritage_discovery',
  title: 'Jejak Warisan Anda',
  description: 'Mari petakan asal-usul dan warisan budaya keluarga Anda',
  questions: [
    {
      id: 'father-region',
      question: 'Dari daerah mana ayah Anda berasal?',
      type: 'text'
    },
    {
      id: 'mother-region',
      question: 'Dari daerah mana ibu Anda berasal?',
      type: 'text'
    },
    {
      id: 'grandfather-paternal-region',
      question: 'Dari daerah mana kakek Anda (dari pihak ayah) berasal? (Opsional)',
      type: 'text'
    },
    {
      id: 'grandmother-paternal-region',
      question: 'Dari daerah mana nenek Anda (dari pihak ayah) berasal? (Opsional)',
      type: 'text'
    },
    {
      id: 'grandfather-maternal-region',
      question: 'Dari daerah mana kakek Anda (dari pihak ibu) berasal? (Opsional)',
      type: 'text'
    },
    {
      id: 'grandmother-maternal-region',
      question: 'Dari daerah mana nenek Anda (dari pihak ibu) berasal? (Opsional)',
      type: 'text'
    },
    {
      id: 'known-traditions',
      question: 'Tradisi apa saja yang Anda tahu dipraktikkan oleh keluarga Anda?',
      type: 'text'
    },
    {
      id: 'languages-spoken',
      question: 'Bahasa daerah apa yang digunakan di keluarga Anda?',
      type: 'text'
    }
  ],
  resultTypes: []
};

/**
 * Scenario Difficulty Assessment Quiz
 */
export const scenarioReadinessQuiz: CulturalQuiz = {
  id: 'scenario-readiness',
  type: 'knowledge',
  title: 'Seberapa Siap Anda?',
  description: 'Tes pengetahuan Anda tentang etika budaya Indonesia',
  questions: [
    {
      id: 'basic-etiquette',
      question: 'Saat bertamu ke rumah orang Jawa, apa yang sebaiknya dilakukan?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Langsung masuk tanpa permisi' },
        { id: 'b', text: 'Mengucapkan salam dan membungkuk sedikit' },
        { id: 'c', text: 'Mengetuk pintu keras-keras' },
        { id: 'd', text: 'Menunggu di luar sampai dipersilakan' }
      ]
    },
    // Add more questions...
  ],
  resultTypes: [
    {
      id: 'beginner',
      title: 'Pemula',
      description: 'Anda baru memulai perjalanan belajar budaya. Mari mulai dari dasar!',
      recommendations: [],
      icon: '🌱'
    },
    {
      id: 'intermediate',
      title: 'Menengah',
      description: 'Anda sudah memiliki pemahaman dasar yang baik. Saatnya eksplorasi lebih dalam!',
      recommendations: [],
      icon: '🌿'
    },
    {
      id: 'advanced',
      title: 'Mahir',
      description: 'Anda sangat paham tentang budaya Indonesia. Luar biasa!',
      recommendations: [],
      icon: '🌳'
    }
  ]
};
