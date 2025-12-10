'use client';

import { useState } from 'react';
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
}

export default function InteractiveZone({ regionName, context, quizData }: InteractiveZoneProps) {
  const [activeTab, setActiveTab] = useState('quiz');
  
  // By passing a key to QuizClient that changes when the tab changes, we force it to re-mount and reset its state.
  const quizKey = `${activeTab}-quiz-${quizData[0].question}`;

  return (
    <Card className="shadow-2xl border-2 border-primary/10 bg-card">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
          <QuizClient key={quizKey} quizData={quizData} />
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
