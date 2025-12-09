'use client';

import { useActionState, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { askHistorianAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Loader2, Bot, User } from 'lucide-react';
import type { TimelineEvent } from '@/lib/types';
import { Separator } from '../ui/separator';

const initialState = {
  answer: '',
  error: '',
  question: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Bertanya...
        </>
      ) : (
        <>
         <Sparkles className="mr-2 h-4 w-4" />
          Tanya Sejarawan AI
        </>
      )}
    </Button>
  );
}

interface ChatSejarawanProps {
    event: Omit<TimelineEvent, "colorClass">;
}

export default function ChatSejarawan({ event }: ChatSejarawanProps) {
  const [state, formAction] = useActionState(askHistorianAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const questionRef = useRef<HTMLTextAreaElement>(null);

  const handleFormAction = (formData: FormData) => {
    formAction(formData);
    // Don't reset formRef.current.reset() as it clears hidden inputs
    if (questionRef.current) {
      questionRef.current.value = '';
    }
  };

  return (
    <section className="mt-16">
      <Card className="shadow-2xl border-2 border-primary/10 bg-card">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl flex items-center justify-center gap-3"><Bot className="text-primary"/> Tanya Sejarawan AI</CardTitle>
          <CardDescription className="max-w-2xl mx-auto">
            Punya pertanyaan lebih lanjut tentang era '{event.title}'? Tanyakan langsung kepada sejarawan AI kami.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={handleFormAction} className="space-y-4 max-w-2xl mx-auto">
            <input type="hidden" name="context" value={event.fullDescription} />
            <input type="hidden" name="era" value={event.title} />
            <Textarea
              ref={questionRef}
              name="question"
              placeholder={`Contoh: Siapa saja tokoh lain yang berpengaruh pada masa ${event.era}?`}
              required
              minLength={5}
              className="min-h-[100px] text-base"
            />
            <div className="flex justify-center">
              <SubmitButton />
            </div>
            {state?.error && (
              <p className="text-sm text-destructive text-center">{state.error}</p>
            )}
          </form>

          {state?.answer && state.question && (
            <div className="mt-8 max-w-3xl mx-auto">
                <Separator />
                <div className="mt-6 p-6 bg-muted/50 rounded-lg border">
                    <h4 className="font-bold text-lg flex items-center gap-2 mb-4"><User className="h-5 w-5 text-muted-foreground"/> Pertanyaan Anda:</h4>
                    <p className="text-foreground/80 italic mb-6 ml-7">{state.question}</p>

                    <h4 className="font-bold text-lg flex items-center gap-2 mb-4"><Bot className="h-5 w-5 text-primary"/> Jawaban Sejarawan AI:</h4>
                    <div 
                        className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-foreground/90 ml-7"
                        dangerouslySetInnerHTML={{ __html: state.answer.replace(/\n/g, '<br />') }}
                    />
                </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
