'use server';
/**
 * @fileOverview This file defines a Genkit flow for answering user questions about a specific historical event.
 *
 * - askHistorian - A function that takes a question and a historical context, and returns an answer from an AI historian.
 * - AskHistorianInput - The input type for the askHistorian function.
 * - AskHistorianOutput - The return type for the askHistorian function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskHistorianInputSchema = z.object({
  question: z.string().describe('The user\'s question about the historical event.'),
  eventContext: z.string().describe('The full description of the historical event to provide context.'),
  eventEra: z.string().describe('The name of the historical era.'),
});
export type AskHistorianInput = z.infer<typeof AskHistorianInputSchema>;

const AskHistorianOutputSchema = z.object({
  answer: z.string().describe('The AI historian\'s answer to the user\'s question, in Indonesian.'),
});
export type AskHistorianOutput = z.infer<typeof AskHistorianOutputSchema>;

export async function askHistorian(input: AskHistorianInput): Promise<AskHistorianOutput> {
  return askHistorianFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askHistorianPrompt',
  input: {schema: AskHistorianInputSchema},
  output: {schema: AskHistorianOutputSchema},
  prompt: `Anda adalah seorang sejarawan ahli Indonesia. Tugas Anda adalah menjawab pertanyaan pengguna dengan akurat dan mendalam, berdasarkan konteks peristiwa sejarah yang diberikan.

Konteks Peristiwa Sejarah (Era: {{{eventEra}}}):
{{{eventContext}}}

Pertanyaan Pengguna:
"{{{question}}}"

Gunakan konteks di atas untuk merumuskan jawaban Anda. Jelaskan dengan gaya bahasa yang informatif dan mudah dipahami. Jawaban Anda harus tetap fokus pada topik dan era yang dibahas.`,
});

const askHistorianFlow = ai.defineFlow(
  {
    name: 'askHistorianFlow',
    inputSchema: AskHistorianInputSchema,
    outputSchema: AskHistorianOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
