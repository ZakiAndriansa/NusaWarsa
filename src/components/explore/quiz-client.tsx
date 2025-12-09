'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle, RotateCw, Award, Target } from 'lucide-react';
import { cn } from '@/lib/utils';
import Confetti from 'react-dom-confetti';
import AnimatedWrapper from '../ui/animated-wrapper';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizClientProps {
  quizData: Question[];
}

export default function QuizClient({ quizData }: QuizClientProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(Array(quizData.length).fill(null));
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    if (isFinished) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
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
  };
  
  const handleRestart = () => {
    // This will just reset the state. To get new questions, the page needs to be reloaded.
    window.location.reload();
  };

  const currentQuestion = quizData[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];

  if (isFinished) {
    return (
      <AnimatedWrapper>
        <div className="text-center p-8 max-w-lg mx-auto relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Confetti active={showConfetti} config={{
                angle: 90,
                spread: 360,
                startVelocity: 40,
                elementCount: 100,
                decay: 0.9,
            }}/>
          </div>
          <Award className="h-20 w-20 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold font-headline">Kuis Selesai!</h2>
          <p className="text-5xl font-bold my-4 text-foreground">{score}<span className="text-2xl text-muted-foreground">/100</span></p>
          <p className="text-muted-foreground mb-6">
            {score === 100 ? "Luar biasa! Anda benar-benar seorang ahli Nusantara." : "Kerja bagus! Teruslah belajar untuk menjadi seorang ahli."}
          </p>
          <Button onClick={handleRestart}>
            <RotateCw className="mr-2" />
            Coba Lagi dengan Soal Baru
          </Button>
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
        <CardContent className="p-6">
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

      <div className="mt-6 flex justify-center">
        {currentQuestionIndex < quizData.length - 1 ? (
          <Button onClick={handleNext} disabled={!selectedAnswer}>Selanjutnya</Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!selectedAnswer}>Selesaikan Kuis</Button>
        )}
      </div>
    </div>
  );
}
