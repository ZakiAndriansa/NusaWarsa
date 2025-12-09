'use server';
/**
 * @fileOverview This file defines a Genkit flow for answering user questions about a specific region.
 *
 * - askRegionalExpert - A function that takes a question and a regional context, and returns an answer from an AI expert.
 * - AskRegionalExpertInput - The input type for the askRegionalExpert function.
 * - AskRegionalExpertOutput - The return type for the askRegionalExpert function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const AskRegionalExpertInputSchema = z.object({
  question: z.string().describe("The user's question about the specific region."),
  regionName: z.string().describe('The name of the region.'),
  regionContext: z.string().describe('The full description of the region to provide context (history, culture, food, etc.).'),
});
export type AskRegionalExpertInput = z.infer<typeof AskRegionalExpertInputSchema>;

const AskRegionalExpertOutputSchema = z.object({
  answer: z.string().describe("The AI expert's answer to the user's question, in Indonesian."),
});
export type AskRegionalExpertOutput = z.infer<typeof AskRegionalExpertOutputSchema>;

export async function askRegionalExpert(input: AskRegionalExpertInput): Promise<AskRegionalExpertOutput> {
  return askRegionalExpertFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askRegionalExpertPrompt',
  input: { schema: AskRegionalExpertInputSchema },
  output: { schema: AskRegionalExpertOutputSchema },
  prompt: `Anda adalah seorang ahli budaya dan pariwisata Nusantara. Tugas Anda adalah menjawab pertanyaan pengguna dengan akurat dan menarik, berdasarkan konteks wilayah yang diberikan.

Konteks Wilayah ({{{regionName}}}):
---
{{{regionContext}}}
---

Pertanyaan Pengguna:
"{{{question}}}"

Gunakan konteks di atas untuk merumuskan jawaban Anda. Jelaskan dengan gaya bahasa yang informatif, ramah, dan mudah dipahami. Jawaban Anda harus tetap fokus pada topik wilayah yang dibahas.`,
});

const askRegionalExpertFlow = ai.defineFlow(
  {
    name: 'askRegionalExpertFlow',
    inputSchema: AskRegionalExpertInputSchema,
    outputSchema: AskRegionalExpertOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
