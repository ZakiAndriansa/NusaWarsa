'use client';

import { useState, useTransition } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, Bot, Loader2 } from 'lucide-react';
import QuizClient from './quiz-client';
import ChatExpert from './chat-expert';
import { generateRegionQuiz, type GenerateRegionQuizOutput } from '@/ai/flows/generate-region-quiz';

interface InteractiveZoneProps {
  regionName: string;
  context: string;
  initialQuizData: GenerateRegionQuizOutput['quiz'];
}

export default function InteractiveZone({ regionName, context, initialQuizData }: InteractiveZoneProps) {
  const [activeTab, setActiveTab] = useState('quiz');
  const [quizData, setQuizData] = useState(initialQuizData);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (value: string) => {
    if (value === 'quiz' && activeTab !== 'quiz') {
      // User is switching back to the quiz tab, let's refresh the questions.
      startTransition(async () => {
        const newQuiz = await generateRegionQuiz({ context });
        setQuizData(newQuiz.quiz);
      });
    }
    setActiveTab(value);
  };

  return (
    <Card className="shadow-2xl border-2 border-primary/10 bg-card">
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <CardHeader>
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
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
            <CardTitle className="font-headline text-3xl">
              Uji Pengetahuan Anda!
            </CardTitle>
            <CardDescription className="max-w-2xl mx-auto mt-2">
              Jawab 5 pertanyaan berikut untuk menguji seberapa baik Anda mengenal {regionName}. Setiap jawaban benar bernilai 20 poin.
            </CardDescription>
          </div>
          {isPending ? (
            <div className="flex flex-col items-center justify-center min-h-[300px] text-muted-foreground">
              <Loader2 className="h-10 w-10 animate-spin mb-4" />
              <p>Memuat kuis baru...</p>
            </div>
          ) : (
            <QuizClient key={quizData.length > 0 ? quizData[0].question : 'quiz'} quizData={quizData} />
          )}
        </TabsContent>
        <TabsContent value="ai-chat" className="px-6 pb-6">
           <div className="text-center mb-6">
            <CardTitle className="font-headline text-3xl">
              Tanya Ahli AI
            </CardTitle>
            <CardDescription className="max-w-2xl mx-auto mt-2">
              Punya pertanyaan lebih lanjut tentang {regionName}? Tanyakan langsung kepada ahli budaya AI kami.
            </CardDescription>
          </div>
          <ChatExpert regionName={regionName} context={context} />
        </TabsContent>
      </Tabs>
    </Card>
  );
}
