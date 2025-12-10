'use server';

import { askHistorian } from '@/ai/flows/ask-historian';
import { askRegionalExpert } from '@/ai/flows/ask-regional-expert';
import { z } from 'zod';

const historianSchema = z.object({
  question: z.string().min(5, { message: 'Pertanyaan harus minimal 5 karakter.' }),
  context: z.string(),
  era: z.string(),
});

interface ChatState {
  answer?: string;
  error?: string;
  question?: string;
}

export async function askHistorianAction(
  prevState: ChatState,
  formData: FormData
): Promise<ChatState> {
  const question = formData.get('question') as string;
  const validatedFields = historianSchema.safeParse({
    question,
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
      return { answer: result.answer, question: validatedFields.data.question };
    }
    return { error: 'Gagal mendapatkan jawaban dari sejarawan AI. Coba lagi.' };
  } catch (error) {
    console.error('Error calling askHistorian flow:', error);
    return { error: 'Terjadi kesalahan pada server AI. Silakan coba lagi nanti.' };
  }
}

const regionalExpertSchema = z.object({
  question: z.string().min(5, { message: 'Pertanyaan harus minimal 5 karakter.' }),
  regionName: z.string(),
  regionContext: z.string(),
});

export async function askRegionalExpertAction(
  prevState: ChatState,
  formData: FormData
): Promise<ChatState> {
  const question = formData.get('question') as string;
  const validatedFields = regionalExpertSchema.safeParse({
    question,
    regionName: formData.get('regionName'),
    regionContext: formData.get('regionContext'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.question?.[0] || 'Input tidak valid.',
    };
  }

  try {
    const result = await askRegionalExpert(validatedFields.data);
    if (result && result.answer) {
      return { answer: result.answer, question: validatedFields.data.question };
    }
    return { error: 'Gagal mendapatkan jawaban dari ahli AI. Coba lagi.' };
  } catch (error) {
    console.error('Error calling askRegionalExpert flow:', error);
    return { error: 'Terjadi kesalahan pada server AI. Silakan coba lagi nanti.' };
  }
}
