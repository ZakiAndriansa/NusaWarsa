'use server';

import { suggestRegionalSoundscapes } from '@/ai/flows/suggest-regional-soundscapes';
import { z } from 'zod';

const formSchema = z.object({
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
  const validatedFields = formSchema.safeParse({
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
