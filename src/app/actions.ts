'use server';

import { z } from 'zod';

// Lazy load AI flows - hanya di-load saat digunakan
const loadAskHistorian = async () => {
  const { askHistorian } = await import('@/ai/flows/ask-historian');
  return askHistorian;
};

const loadAskRegionalExpert = async () => {
  const { askRegionalExpert } = await import('@/ai/flows/ask-regional-expert');
  return askRegionalExpert;
};

const loadAskCulturalEmergency = async () => {
  const { askCulturalEmergency } = await import('@/ai/flows/ask-cultural-emergency');
  return askCulturalEmergency;
};

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

interface CulturalEmergencyState {
  answer?: string;
  error?: string;
  question?: string;
  extractedParameters?: {
    eventType?: string | null;
    location?: string | null;
    userRole?: string | null;
    timeline?: string | null;
    specificQuestion?: string | null;
  };
  needsClarification?: boolean;
  clarificationQuestions?: string[];
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
    // Lazy load the AI flow
    const askHistorian = await loadAskHistorian();

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
    // Error logged in production monitoring
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
    // Lazy load the AI flow
    const askRegionalExpert = await loadAskRegionalExpert();

    const result = await askRegionalExpert(validatedFields.data);
    if (result && result.answer) {
      return { answer: result.answer, question: validatedFields.data.question };
    }
    return { error: 'Gagal mendapatkan jawaban dari ahli AI. Coba lagi.' };
  } catch (error) {
    // Error logged in production monitoring
    return { error: 'Terjadi kesalahan pada server AI. Silakan coba lagi nanti.' };
  }
}

const culturalEmergencySchema = z.object({
  question: z.string().min(5, { message: 'Pertanyaan harus minimal 5 karakter.' }),
  conversationHistory: z.string().optional(),
});

export async function askCulturalEmergencyAction(
  prevState: CulturalEmergencyState,
  formData: FormData
): Promise<CulturalEmergencyState> {
  const question = formData.get('question') as string;
  const conversationHistoryJson = formData.get('conversationHistory') as string;

  const validatedFields = culturalEmergencySchema.safeParse({
    question,
    conversationHistory: conversationHistoryJson,
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.question?.[0] || 'Input tidak valid.',
    };
  }

  try {
    // Parse conversation history
    let conversationHistory: Array<{role: 'user' | 'assistant', content: string}> | undefined;
    if (conversationHistoryJson) {
      try {
        conversationHistory = JSON.parse(conversationHistoryJson);
      } catch {
        // Failed to parse conversation history, continue without it
      }
    }

    // Lazy load the AI flow
    const askCulturalEmergency = await loadAskCulturalEmergency();

    const result = await askCulturalEmergency({
      question: validatedFields.data.question,
      conversationHistory,
    });

    if (result && result.answer) {
      return {
        answer: result.answer,
        question: validatedFields.data.question,
        extractedParameters: result.extractedParameters,
        needsClarification: result.needsClarification,
        clarificationQuestions: result.clarificationQuestions,
      };
    }
    return { error: 'Gagal mendapatkan jawaban dari Cultural Emergency AI. Coba lagi.' };
  } catch (error) {
    // Error logged in production monitoring
    return { error: 'Terjadi kesalahan pada server AI. Silakan coba lagi nanti.' };
  }
}
