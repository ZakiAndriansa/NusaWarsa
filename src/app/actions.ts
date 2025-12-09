'use server';

import { suggestRegionalSoundscapes } from '@/ai/flows/suggest-regional-soundscapes';
import { askHistorian } from '@/ai/flows/ask-historian';
import { z } from 'zod';

const suggestionSchema = z.object({
  region: z.string().min(3, { message: 'Nama wilayah harus minimal 3 karakter.' }),
});

interface SuggestionState {
  suggestion?: string;
  error?: string;
}

export async function suggestSoundscapeAction(
  prevState: SuggestionState,
  formData: FormData
): Promise<SuggestionState> {
  const validatedFields = suggestionSchema.safeParse({
    region: formData.get('region'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.region?.[0] || 'Input tidak valid.',
    };
  }

  try {
    const result = await suggestRegionalSoundscapes({ regionName: validatedFields.data.region });
    if (result && result.soundscapeSuggestion) {
      return { suggestion: result.soundscapeSuggestion };
    }
    return { error: 'Gagal mendapatkan sugesti. Silakan coba lagi.' };
  } catch (error) {
    console.error('Error calling suggestRegionalSoundscapes flow:', error);
    return { error: 'Terjadi kesalahan pada server. Silakan coba lagi nanti.' };
  }
}

const historianSchema = z.object({
  question: z.string().min(5, { message: 'Pertanyaan harus minimal 5 karakter.' }),
  context: z.string(),
  era: z.string(),
});

interface ChatState {
  answer?: string;
  error?: string;
}

export async function askHistorianAction(
  prevState: ChatState,
  formData: FormData
): Promise<ChatState> {
  const validatedFields = historianSchema.safeParse({
    question: formData.get('question'),
    context: formData.get('context'),
    era: formData.get('era'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.question?.[0] || 'Input tidak valid.',
    };
  }
  
  try {
    const result = await askHistorian({
      question: validatedFields.data.question,
      eventContext: validatedFields.data.context,
      eventEra: validatedFields.data.era,
    });
    if (result && result.answer) {
      return { answer: result.answer };
    }
    return { error: 'Gagal mendapatkan jawaban dari sejarawan AI. Coba lagi.' };
  } catch (error) {
    console.error('Error calling askHistorian flow:', error);
    return { error: 'Terjadi kesalahan pada server AI. Silakan coba lagi nanti.' };
  }
}
