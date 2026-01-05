'use client';

import { useState, useEffect, useCallback } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, Bot } from 'lucide-react';
import QuizClient from './quiz-client';
import ChatExpert from './chat-expert';
import type { QuizQuestion } from '@/lib/types';

interface InteractiveZoneProps {
  regionName: string;
  context: string;
  quizData: QuizQuestion[];
  suggestionQuestions?: string[];
}

// Function to shuffle and select random questions
function getRandomQuestions(questions: QuizQuestion[], count: number = 5): QuizQuestion[] {
  // Create a copy to avoid mutating the original array
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function InteractiveZone({ regionName, context, quizData, suggestionQuestions }: InteractiveZoneProps) {
  const [activeTab, setActiveTab] = useState('quiz');
  const [quizKey, setQuizKey] = useState(0);
  const [randomQuestions, setRandomQuestions] = useState<QuizQuestion[]>([]);

  // Generate random questions on client side only to avoid hydration errors
  useEffect(() => {
    setRandomQuestions(getRandomQuestions(quizData, 5));
  }, [quizData, quizKey]);

  // Function to regenerate quiz (called from QuizClient via callback)
  const handleQuizRestart = useCallback(() => {
    setQuizKey(prev => prev + 1);
  }, []);

  return (
    <Card className="shadow-2xl border-2 border-primary/10 bg-card max-w-4xl mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <CardHeader className="border-b">
          <TabsList className="grid grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="quiz" className="gap-2">
              <HelpCircle className="h-5 w-5" /> Uji Pengetahuan
            </TabsTrigger>
            <TabsTrigger value="ai-chat" className="gap-2">
              <Bot className="h-5 w-5" /> Tanya Ahli AI
            </TabsTrigger>
          </TabsList>
        </CardHeader>

        <TabsContent value="quiz" className="px-6 pb-6">
          <div className="text-center mb-6">
            <CardTitle className="font-headline text-3xl mt-6">
              Uji Pengetahuan Anda!
            </CardTitle>
            <CardDescription className="max-w-2xl mx-auto mt-2">
              Jawab 5 pertanyaan berikut untuk menguji seberapa baik Anda mengenal {regionName}. Setiap jawaban benar bernilai 20 poin.
            </CardDescription>
          </div>
          {randomQuestions.length > 0 && (
            <QuizClient key={quizKey} quizData={randomQuestions} onRestart={handleQuizRestart} />
          )}
        </TabsContent>
        <TabsContent value="ai-chat" className="m-0 p-0">
          <ChatExpert regionName={regionName} context={context} suggestionQuestions={suggestionQuestions} />
        </TabsContent>
      </Tabs>
    </Card>
  );
}
