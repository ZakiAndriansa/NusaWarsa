'use client';

import { useState } from 'react';
import type { CulturalScenario } from '@/lib/types-user';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  Lightbulb,
  AlertTriangle,
  Target,
  Volume2,
  CheckCircle2
} from 'lucide-react';
import AnimatedWrapper from '../ui/animated-wrapper';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface ScenarioPlayerProps {
  scenario: CulturalScenario;
}

export default function ScenarioPlayer({ scenario }: ScenarioPlayerProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const currentStep = scenario.steps[currentStepIndex];
  const progress = ((currentStepIndex + 1) / scenario.steps.length) * 100;
  const isLastStep = currentStepIndex === scenario.steps.length - 1;
  const isFirstStep = currentStepIndex === 0;

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (!isFirstStep) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const handleComplete = () => {
    setCompletedSteps(prev => new Set([...prev, currentStepIndex]));
    if (!isLastStep) {
      handleNext();
    }
  };

  const getDifficultyColor = (difficulty: CulturalScenario['difficulty']) => {
    const colors = {
      beginner: 'bg-green-500',
      intermediate: 'bg-yellow-500',
      advanced: 'bg-red-500'
    };
    return colors[difficulty];
  };

  const getDifficultyLabel = (difficulty: CulturalScenario['difficulty']) => {
    const labels = {
      beginner: 'Pemula',
      intermediate: 'Menengah',
      advanced: 'Mahir'
    };
    return labels[difficulty];
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
      {/* Header */}
      <AnimatedWrapper animationId={`scenario-header-${scenario.id}`}>
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
          <Link href="/scenarios">
            <Button variant="ghost" className="mb-3 sm:mb-4 gap-1 text-sm sm:text-base h-9 sm:h-10">
              <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Kembali ke Daftar Panduan
            </Button>
          </Link>

          <div className="flex items-start justify-between mb-4 sm:mb-6">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                <Badge variant="outline" className="text-xs sm:text-sm">{scenario.region}</Badge>
                <div className="flex items-center gap-1">
                  <div className={`h-2 w-2 rounded-full ${getDifficultyColor(scenario.difficulty)}`} />
                  <span className="text-xs sm:text-sm font-medium">{getDifficultyLabel(scenario.difficulty)}</span>
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold mb-2 sm:mb-3">
                {scenario.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-3 sm:mb-4">
                {scenario.description}
              </p>
            </div>
          </div>

          {/* Context Card */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Situasi
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <p className="text-xs sm:text-sm leading-relaxed">{scenario.context}</p>
            </CardContent>
          </Card>
        </div>
      </AnimatedWrapper>

      {/* Progress */}
      <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
        <div className="flex justify-between text-xs sm:text-sm mb-2">
          <span className="text-muted-foreground">
            Langkah {currentStepIndex + 1} dari {scenario.steps.length}
          </span>
          <span className="font-medium">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-1.5 sm:h-2" />

        {/* Step indicators */}
        <div className="flex justify-between mt-3 sm:mt-4 gap-1 sm:gap-2">
          {scenario.steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setCurrentStepIndex(index)}
              className={`flex flex-col items-center gap-1 transition-colors ${
                index === currentStepIndex ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                completedSteps.has(index)
                  ? 'bg-primary border-primary'
                  : index === currentStepIndex
                  ? 'border-primary'
                  : 'border-border'
              }`}>
                {completedSteps.has(index) ? (
                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                ) : (
                  <span className="text-[10px] sm:text-xs font-medium">{index + 1}</span>
                )}
              </div>
              <span className="text-[9px] sm:text-xs hidden md:block max-w-[80px] text-center line-clamp-1">{step.title.split(':')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Current Step Content */}
      <AnimatedWrapper key={currentStepIndex} animationId={`scenario-step-${scenario.id}-${currentStepIndex}`}>
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {/* Step Header */}
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl md:text-2xl">{currentStep.title}</CardTitle>
              <CardDescription className="text-xs sm:text-sm">{currentStep.description}</CardDescription>
            </CardHeader>
          </Card>

          {/* Do List */}
          <Card className="border-green-500/20 bg-green-50/50 dark:bg-green-950/20">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2 text-green-700 dark:text-green-400">
                <Check className="h-4 w-4 sm:h-5 sm:w-5" />
                Yang Harus Dilakukan
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <ul className="space-y-2 sm:space-y-3">
                {currentStep.doList.map((item, index) => (
                  <AnimatedWrapper key={index} delay={index * 50} animationId={`scenario-do-${scenario.id}-${currentStepIndex}-${index}`}>
                    <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                      <div className="mt-0.5 flex-shrink-0">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500 flex items-center justify-center">
                          <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                        </div>
                      </div>
                      <span>{item}</span>
                    </li>
                  </AnimatedWrapper>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Don't List */}
          <Card className="border-red-500/20 bg-red-50/50 dark:bg-red-950/20">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2 text-red-700 dark:text-red-400">
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
                Yang Harus Dihindari
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <ul className="space-y-2 sm:space-y-3">
                {currentStep.dontList.map((item, index) => (
                  <AnimatedWrapper key={index} delay={index * 50} animationId={`scenario-dont-${scenario.id}-${currentStepIndex}-${index}`}>
                    <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                      <div className="mt-0.5 flex-shrink-0">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-500 flex items-center justify-center">
                          <X className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                        </div>
                      </div>
                      <span>{item}</span>
                    </li>
                  </AnimatedWrapper>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Key Phrases */}
          {currentStep.keyPhrases && currentStep.keyPhrases.length > 0 && (
            <Card className="border-blue-500/20 bg-blue-50/50 dark:bg-blue-950/20">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg flex items-center gap-2 text-blue-700 dark:text-blue-400">
                  <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  Ucapan & Frasa Penting
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-3 sm:space-y-4">
                  {currentStep.keyPhrases.map((phrase, index) => (
                    <AnimatedWrapper key={index} delay={index * 100} animationId={`scenario-phrase-${scenario.id}-${currentStepIndex}-${index}`}>
                      <div className="p-3 sm:p-4 rounded-lg bg-background border">
                        <p className="font-semibold text-base sm:text-lg mb-1">{phrase.phrase}</p>
                        {phrase.pronunciation && (
                          <p className="text-xs sm:text-sm text-muted-foreground italic mb-2">
                            Pengucapan: {phrase.pronunciation}
                          </p>
                        )}
                        <p className="text-xs sm:text-sm mb-2">
                          <span className="font-medium">Arti:</span> {phrase.meaning}
                        </p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">
                          <span className="font-medium">Kapan digunakan:</span> {phrase.whenToUse}
                        </p>
                      </div>
                    </AnimatedWrapper>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-0 pt-3 sm:pt-4">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={isFirstStep}
              className="w-full sm:w-auto text-sm sm:text-base h-9 sm:h-10"
            >
              <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" />
              Sebelumnya
            </Button>

            <div className="flex gap-2 w-full sm:w-auto">
              {!completedSteps.has(currentStepIndex) && (
                <Button variant="outline" onClick={handleComplete} className="gap-2 flex-1 sm:flex-initial text-sm sm:text-base h-9 sm:h-10">
                  <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Tandai Selesai</span>
                  <span className="sm:hidden">Selesai</span>
                </Button>
              )}
              <Button onClick={handleNext} disabled={isLastStep} className="flex-1 sm:flex-initial text-sm sm:text-base h-9 sm:h-10">
                Selanjutnya
                <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </AnimatedWrapper>

      {/* Additional Info - Accordion */}
      <div className="max-w-4xl mx-auto mt-8 sm:mt-10 md:mt-12">
        <Accordion type="single" collapsible className="w-full">
          {/* Tips */}
          <AccordionItem value="tips">
            <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                <span>Tips & Trik ({scenario.tips.length})</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {scenario.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs sm:text-sm">
                    <Lightbulb className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Common Mistakes */}
          <AccordionItem value="mistakes">
            <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                <span>Kesalahan yang Sering Terjadi ({scenario.commonMistakes.length})</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {scenario.commonMistakes.map((mistake, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs sm:text-sm">
                    <AlertTriangle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Learning Objectives */}
          <AccordionItem value="objectives">
            <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span>Tujuan Pembelajaran ({scenario.learningObjectives.length})</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {scenario.learningObjectives.map((obj, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs sm:text-sm">
                    <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Completion Card */}
      {isLastStep && completedSteps.has(currentStepIndex) && (
        <AnimatedWrapper delay={300} animationId={`scenario-completion-${scenario.id}`}>
          <Card className="max-w-4xl mx-auto mt-6 sm:mt-8 bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/20">
            <CardContent className="p-6 sm:p-8 text-center">
              <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
              <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Selamat! Anda Sudah Siap</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-2">
                Anda telah menyelesaikan semua langkah. Sekarang Anda siap menghadapi situasi ini dengan percaya diri!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link href="/scenarios" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto text-sm sm:text-base h-9 sm:h-10">
                    Lihat Panduan Lain
                  </Button>
                </Link>
                <Button
                  onClick={() => {
                    setCurrentStepIndex(0);
                    setCompletedSteps(new Set());
                  }}
                  className="w-full sm:w-auto text-sm sm:text-base h-9 sm:h-10"
                >
                  Ulangi Panduan
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedWrapper>
      )}
    </div>
  );
}
