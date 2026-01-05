'use client';

import { useState } from 'react';
import { culturalMatchQuiz } from '@/lib/quiz-data';
import type { PersonalityTraits, CulturalInterest, UserCulturalProfile, QuizResult } from '@/lib/types-user';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, ChevronLeft, Sparkles, Heart, Target } from 'lucide-react';
import AnimatedWrapper from '../ui/animated-wrapper';
import { CulturalMatcher } from '@/lib/cultural-matcher';
import { traditionsData } from '@/lib/data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function CulturalQuizClient() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResults, setShowResults] = useState(false);
  const [scaleValues, setScaleValues] = useState<Record<string, number>>({});

  const quiz = culturalMatchQuiz;
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;
  const isLastQuestion = currentQuestion === quiz.questions.length - 1;

  const handleMultipleChoice = (questionId: string, optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handleMultiSelect = (questionId: string, optionId: string) => {
    setAnswers(prev => {
      const current = prev[questionId] || [];
      const isSelected = current.includes(optionId);

      return {
        ...prev,
        [questionId]: isSelected
          ? current.filter((id: string) => id !== optionId)
          : [...current, optionId]
      };
    });
  };

  const handleScaleChange = (questionId: string, value: number) => {
    setScaleValues(prev => ({ ...prev, [questionId]: value }));
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      calculateResults();
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    setShowResults(true);
  };

  const getPersonalityTraits = (): PersonalityTraits => {
    const traits: PersonalityTraits = {
      adventurous: 3,
      artistic: 3,
      social: 3,
      spiritual: 3,
      practical: 3,
      patient: 3
    };

    // Calculate from answers
    quiz.questions.forEach(question => {
      const answer = answers[question.id];

      if (question.type === 'multiple_choice' && answer) {
        const selectedOption = question.options?.find(opt => opt.id === answer);
        if (selectedOption?.scores) {
          Object.entries(selectedOption.scores).forEach(([trait, score]) => {
            if (trait in traits) {
              traits[trait as keyof PersonalityTraits] = Math.min(5,
                (traits[trait as keyof PersonalityTraits] + score) / 2
              );
            }
          });
        }
      }

      if (question.type === 'scale' && answer) {
        // Map specific questions to traits
        if (question.id === 'q3-patience') traits.patient = answer;
        if (question.id === 'q4-social') traits.social = answer;
        if (question.id === 'q6-spiritual') traits.spiritual = answer;
        if (question.id === 'q7-artistic') traits.artistic = answer;
      }
    });

    return traits;
  };

  const getCulturalInterests = (): CulturalInterest[] => {
    const q5Answer = answers['q5-interests'] || [];

    const categoryMap: Record<string, CulturalInterest['category']> = {
      'tarian': 'Tarian',
      'kerajinan': 'Kerajinan',
      'upacara': 'Upacara',
      'kuliner': 'Kuliner',
      'musik': 'Musik'
    };

    return Object.entries(categoryMap).map(([key, category]) => ({
      category,
      level: (q5Answer.includes(key) ? 5 : 2) as 1 | 2 | 3 | 4 | 5
    }));
  };

  const getBestMatchResult = (): QuizResult | null => {
    const personality = getPersonalityTraits();

    // Find the result type that matches best
    let bestMatch: QuizResult | null = null;
    let bestScore = 0;

    quiz.resultTypes.forEach(result => {
      if (!result.personalityMatch) return;

      let score = 0;
      let count = 0;

      Object.entries(result.personalityMatch).forEach(([trait, value]) => {
        if (trait in personality && value) {
          const diff = Math.abs(personality[trait as keyof PersonalityTraits] - value);
          score += (5 - diff);
          count++;
        }
      });

      const avgScore = count > 0 ? score / count : 0;

      if (avgScore > bestScore) {
        bestScore = avgScore;
        bestMatch = result;
      }
    });

    return bestMatch;
  };

  const getRecommendations = () => {
    const personality = getPersonalityTraits();
    const interests = getCulturalInterests();

    const mockProfile: UserCulturalProfile = {
      id: 'temp',
      userId: 'temp',
      interests,
      personality,
      learningGoals: [],
      completedChallenges: [],
      achievements: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const mockHeritage = {
      id: 'temp',
      userId: 'temp',
      regions: [],
      familyStories: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return CulturalMatcher.getRecommendations(mockProfile, mockHeritage, 6);
  };

  const currentQ = quiz.questions[currentQuestion];
  const currentAnswer = answers[currentQ.id];
  const canProceed = currentAnswer !== undefined && currentAnswer !== null &&
    (currentQ.type !== 'multi_select' || currentAnswer.length > 0);

  if (showResults) {
    const result = getBestMatchResult();
    const recommendations = getRecommendations();

    return (
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <AnimatedWrapper>
          <div className="max-w-4xl mx-auto">
            {/* Result Card */}
            <Card className="mb-6 sm:mb-8 border-2 border-primary shadow-xl">
              <CardHeader className="text-center pb-4 px-4 sm:px-6">
                <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">{result?.icon || '✨'}</div>
                <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-headline mb-2 sm:mb-3 px-2">
                  {result?.title || 'Hasil Anda'}
                </CardTitle>
                <CardDescription className="text-base sm:text-lg px-2">
                  {result?.description}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Personality Traits */}
            <Card className="mb-6 sm:mb-8">
              <CardHeader className="px-4 sm:px-6">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Profil Kepribadian Anda
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(getPersonalityTraits()).map(([trait, value]) => {
                    const traitLabels: Record<string, string> = {
                      adventurous: 'Petualang',
                      artistic: 'Artistik',
                      social: 'Sosial',
                      spiritual: 'Spiritual',
                      practical: 'Praktis',
                      patient: 'Sabar'
                    };

                    return (
                      <div key={trait} className="space-y-2">
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="font-medium">{traitLabels[trait]}</span>
                          <span className="text-muted-foreground">{value.toFixed(1)}/5</span>
                        </div>
                        <Progress value={(value / 5) * 100} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card>
              <CardHeader className="px-4 sm:px-6">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Target className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Tradisi yang Direkomendasikan untuk Anda
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Berdasarkan kepribadian dan minat Anda, berikut tradisi yang cocok untuk dipelajari
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {recommendations.map((rec, index) => {
                    const tradition = traditionsData.find(t => t.id === rec.tradition);
                    if (!tradition) return null;

                    const image = PlaceHolderImages.find(img => img.id === tradition.imageId);

                    return (
                      <AnimatedWrapper key={rec.tradition} delay={index * 100}>
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                          {image && (
                            <div className="relative h-40 sm:h-48 w-full">
                              <Image
                                src={image.imageUrl}
                                alt={tradition.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, 50vw"
                                loading="lazy"
                              />
                              <div className="absolute top-2 right-2">
                                <Badge variant="secondary" className="bg-primary text-white text-xs">
                                  Match: {rec.score}%
                                </Badge>
                              </div>
                            </div>
                          )}
                          <CardContent className="p-3 sm:p-4">
                            <h3 className="font-bold text-base sm:text-lg mb-2">{tradition.name}</h3>
                            <Badge variant="outline" className="mb-2 sm:mb-3 text-xs">{tradition.category}</Badge>

                            <div className="space-y-2 text-sm">
                              <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">{tradition.shortDescription}</p>

                              <div className="pt-2 border-t">
                                <p className="font-medium mb-1 text-xs sm:text-sm">Mengapa cocok:</p>
                                <ul className="space-y-1">
                                  {rec.reasons.slice(0, 2).map((reason, i) => (
                                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
                                      <span className="text-primary mt-0.5">•</span>
                                      <span>{reason}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2 text-xs text-muted-foreground">
                                <span className="truncate">Waktu belajar: {rec.estimatedTime}</span>
                                <Badge variant="outline" className="text-xs w-fit">
                                  {rec.difficulty === 'easy' ? 'Mudah' : rec.difficulty === 'medium' ? 'Sedang' : 'Menantang'}
                                </Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </AnimatedWrapper>
                    );
                  })}
                </div>

                <div className="mt-6 sm:mt-8 text-center">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    <Sparkles className="h-4 w-4" />
                    Mulai Perjalanan Budaya Saya
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 text-center pb-4">
              <Button variant="outline" className="w-full sm:w-auto" onClick={() => {
                setShowResults(false);
                setCurrentQuestion(0);
                setAnswers({});
                setScaleValues({});
              }}>
                Ulangi Quiz
              </Button>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <AnimatedWrapper>
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-bold mb-2 sm:mb-3 px-2">
              {quiz.title}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground px-4">
              {quiz.description}
            </p>
          </div>
        </AnimatedWrapper>

        {/* Progress */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between text-xs sm:text-sm mb-2">
            <span className="text-muted-foreground">
              Pertanyaan {currentQuestion + 1} dari {quiz.questions.length}
            </span>
            <span className="font-medium">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <AnimatedWrapper key={currentQuestion}>
          <Card className="mb-5">
            <CardHeader className="pb-3 pt-5 px-5">
              <CardTitle className="text-base md:text-lg leading-snug">{currentQ.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 px-5 pb-5">
              {/* Multiple Choice */}
              {currentQ.type === 'multiple_choice' && currentQ.options && (
                <div className="grid grid-cols-1 gap-2.5">
                  {currentQ.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleMultipleChoice(currentQ.id, option.id)}
                      className={`p-3 rounded-lg border-2 text-left transition-all hover:border-primary hover:bg-primary/5 ${
                        currentAnswer === option.id
                          ? 'border-primary bg-primary/10'
                          : 'border-border'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          currentAnswer === option.id ? 'border-primary' : 'border-muted-foreground'
                        }`}>
                          {currentAnswer === option.id && (
                            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                          )}
                        </div>
                        <span className="text-sm">{option.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Multi Select */}
              {currentQ.type === 'multi_select' && currentQ.options && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {currentQ.options.map((option) => {
                    const isSelected = currentAnswer?.includes(option.id);

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleMultiSelect(currentQ.id, option.id)}
                        className={`p-3 rounded-lg border-2 text-left transition-all hover:border-primary hover:bg-primary/5 ${
                          isSelected
                            ? 'border-primary bg-primary/10'
                            : 'border-border'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                            isSelected ? 'border-primary bg-primary' : 'border-muted-foreground'
                          }`}>
                            {isSelected && (
                              <svg className="w-2.5 h-2.5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M5 13l4 4L19 7"></path>
                              </svg>
                            )}
                          </div>
                          <span className="text-sm">{option.text}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Scale */}
              {currentQ.type === 'scale' && currentQ.scaleRange && (
                <div className="space-y-3 py-2">
                  <div className="flex justify-center gap-1.5 sm:gap-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        onClick={() => handleScaleChange(currentQ.id, value)}
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 font-semibold text-sm transition-all hover:border-primary hover:scale-110 ${
                          scaleValues[currentQ.id] === value
                            ? 'border-primary bg-primary text-white scale-110'
                            : 'border-border'
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground px-1">
                    <span className="max-w-[45%] text-left">{currentQ.scaleRange.minLabel}</span>
                    <span className="max-w-[45%] text-right">{currentQ.scaleRange.maxLabel}</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </AnimatedWrapper>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentQuestion === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Kembali
          </Button>

          <Button
            onClick={handleNext}
            disabled={!canProceed}
            size="lg"
            className="gap-2"
          >
            {isLastQuestion ? (
              <>
                <Sparkles className="h-4 w-4" />
                Lihat Hasil
              </>
            ) : (
              <>
                Lanjut
                <ChevronRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
