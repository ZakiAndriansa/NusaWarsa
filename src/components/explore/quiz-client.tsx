'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RotateCw, Award, Target, CheckCircle2, XCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import Confetti from '@/components/ui/confetti';
import AnimatedWrapper from '../ui/animated-wrapper';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizClientProps {
  quizData: Question[];
  onRestart?: () => void;
}

export default function QuizClient({ quizData, onRestart }: QuizClientProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(Array(quizData.length).fill(null));
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showRecap, setShowRecap] = useState(false);

  const handleAnswerSelect = useCallback((answer: string) => {
    if (isFinished) return;
    setSelectedAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = answer;
      return newAnswers;
    });
  }, [isFinished, currentQuestionIndex]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }, [currentQuestionIndex, quizData.length]);

  const handleSubmit = useCallback(() => {
    let finalScore = 0;
    quizData.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        finalScore += 20;
      }
    });
    setScore(finalScore);
    setIsFinished(true);
    if (finalScore === 100) {
        setTimeout(() => setShowConfetti(true), 300);
    }
  }, [quizData, selectedAnswers]);

  const handleRestart = useCallback(() => {
    // Call the parent's onRestart to regenerate questions
    if (onRestart) {
      onRestart();
    }
    // Reset local state
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(quizData.length).fill(null));
    setIsFinished(false);
    setScore(0);
    setShowConfetti(false);
    setShowRecap(false);
  }, [quizData.length, onRestart]);

  const currentQuestion = quizData[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];

  if (isFinished) {
    return (
      <AnimatedWrapper>
        <div className="max-w-3xl mx-auto relative">
          {score === 100 && <Confetti active={showConfetti} />}

          {/* Score Summary */}
          <div className="text-center pt-8 pb-1">
            <Award className="h-20 w-20 text-primary mx-auto mb-4 -mt-6" />
            <h2 className="text-3xl font-bold font-headline">Kuis Selesai!</h2>
            <p className="text-5xl font-bold my-4 text-foreground">{score}<span className="text-2xl text-muted-foreground">/100</span></p>
            <p className="text-muted-foreground mb-8">
              {score === 100 ? "Luar biasa! Anda benar-benar seorang ahli Nusantara." : "Kerja bagus! Teruslah belajar untuk menjadi seorang ahli."}
            </p>
          </div>

          {/* Answer Recap - Collapsible */}
          <div className="mb-8">
            <button
              onClick={() => setShowRecap(!showRecap)}
              className="w-full flex items-center justify-center gap-3 py-2 hover:opacity-70 transition-opacity duration-200 cursor-pointer group"
            >
              <span className="text-2xl font-headline font-semibold text-amber-800 dark:text-amber-600">Rekap Jawaban</span>
              {showRecap ? (
                <ChevronUp className="h-6 w-6 text-amber-800 dark:text-amber-600 group-hover:scale-110 transition-transform" />
              ) : (
                <ChevronDown className="h-6 w-6 text-amber-800 dark:text-amber-600 group-hover:scale-110 transition-transform" />
              )}
            </button>

            {showRecap && (
              <div className="space-y-4 animate-in slide-in-from-top-2 duration-200">
                {quizData.map((question, index) => {
                  const userAnswer = selectedAnswers[index];
                  const isCorrect = userAnswer === question.correctAnswer;

                  return (
                    <Card key={index} className={cn(
                      "border-2",
                      isCorrect ? "border-green-500/20 bg-green-50/50 dark:bg-green-950/20" : "border-red-500/20 bg-red-50/50 dark:bg-red-950/20"
                    )}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          {isCorrect ? (
                            <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                          )}
                          <div className="flex-1 space-y-2">
                            <p className="font-semibold text-sm">
                              Pertanyaan {index + 1}: {question.question}
                            </p>

                            {!isCorrect && (
                              <>
                                <div className="text-sm">
                                  <span className="text-red-600 dark:text-red-400 font-medium">Jawaban Anda: </span>
                                  <span className="text-red-700 dark:text-red-300">{userAnswer}</span>
                                </div>
                                <div className="text-sm">
                                  <span className="text-green-600 dark:text-green-400 font-medium">Jawaban Benar: </span>
                                  <span className="text-green-700 dark:text-green-300">{question.correctAnswer}</span>
                                </div>
                              </>
                            )}

                            {isCorrect && (
                              <div className="text-sm">
                                <span className="text-green-600 dark:text-green-400 font-medium">Jawaban Benar: </span>
                                <span className="text-green-700 dark:text-green-300">{question.correctAnswer}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>

          {/* Restart Button */}
          <div className="text-center pb-4">
            <Button onClick={handleRestart} size="lg" className="bg-amber-800 hover:bg-amber-900 text-white">
              <RotateCw className="mr-2" />
              Coba Lagi dengan Soal Baru
            </Button>
          </div>
        </div>
      </AnimatedWrapper>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-4 text-center">
        <p className="text-sm text-muted-foreground">
          Pertanyaan {currentQuestionIndex + 1} dari {quizData.length}
        </p>
        <div className="w-full bg-muted rounded-full h-2.5 mt-2">
            <div className="bg-primary h-2.5 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%` }}></div>
        </div>
      </div>

      <Card className="border-0 shadow-none">
        <CardContent className="">
          <h3 className="text-lg font-semibold leading-relaxed text-center mb-6 min-h-[56px] flex items-center justify-center">
            <Target className="w-5 h-5 mr-3 text-primary shrink-0"/> {currentQuestion.question}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option;
              return (
                <Button
                  key={option}
                  variant="outline"
                  size="lg"
                  className={cn(
                    "justify-start h-auto py-3 text-wrap whitespace-normal",
                    isSelected && 'ring-2 ring-primary border-primary'
                  )}
                  onClick={() => handleAnswerSelect(option)}
                >
                  {option}
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 pt-6 border-t flex justify-center">
        {currentQuestionIndex < quizData.length - 1 ? (
          <Button onClick={handleNext} disabled={!selectedAnswer}>Selanjutnya</Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!selectedAnswer}>Selesaikan Kuis</Button>
        )}
      </div>
    </div>
  );
}
