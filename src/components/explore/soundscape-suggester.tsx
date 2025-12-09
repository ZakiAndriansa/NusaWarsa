'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { suggestSoundscapeAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, Loader2, Wand2 } from 'lucide-react';

const initialState = {
  suggestion: '',
  error: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Meminta...
        </>
      ) : (
        <>
         <Wand2 className="mr-2 h-4 w-4" />
          Dapatkan Sugesti
        </>
      )}
    </Button>
  );
}

export default function SoundscapeSuggester() {
  const [state, formAction] = useActionState(suggestSoundscapeAction, initialState);

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-3xl">
        <Card className="shadow-lg border-2 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl">Sugesti Musik Daerah</CardTitle>
            <CardDescription>
              Tidak yakin harus mulai dari mana? Masukkan nama wilayah atau provinsi di Indonesia untuk mendapatkan sugesti musik tradisional yang cocok dari AI kami.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  name="region"
                  placeholder="Contoh: Jawa Barat, Toraja, Bali"
                  required
                  className="flex-grow"
                />
                <SubmitButton />
              </div>
              
              {state?.error && (
                <p className="text-sm text-destructive">{state.error}</p>
              )}
            </form>

            {state?.suggestion && (
              <div className="mt-6 p-4 bg-muted rounded-lg border">
                <h4 className="font-semibold flex items-center gap-2"><Music className="h-5 w-5 text-primary"/> Sugesti untuk Anda:</h4>
                <p className="text-foreground/90 mt-2 pl-7">{state.suggestion}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
