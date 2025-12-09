'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating a multiple-choice quiz based on regional information.
 *
 * - generateRegionQuiz - A function that takes a context string and returns a set of quiz questions.
 * - GenerateRegionQuizInput - The input type for the generateRegionQuiz function.
 * - GenerateRegionQuizOutput - The return type for the generateRegionQuiz function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const QuestionSchema = z.object({
  question: z.string().describe('The quiz question.'),
  options: z.array(z.string()).length(4).describe('An array of 4 possible answers.'),
  correctAnswer: z.string().describe('The correct answer from the options.'),
});

const GenerateRegionQuizInputSchema = z.object({
  context: z.string().describe('A string containing all the information about a specific region (history, folklore, food, etc.).'),
});
export type GenerateRegionQuizInput = z.infer<typeof GenerateRegionQuizInputSchema>;

const GenerateRegionQuizOutputSchema = z.object({
  quiz: z
    .array(QuestionSchema)
    .length(5)
    .describe('An array of 5 multiple-choice questions based on the provided context.'),
});
export type GenerateRegionQuizOutput = z.infer<typeof GenerateRegionQuizOutputSchema>;

export async function generateRegionQuiz(input: GenerateRegionQuizInput): Promise<GenerateRegionQuizOutput> {
  return generateRegionQuizFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateRegionQuizPrompt',
  input: { schema: GenerateRegionQuizInputSchema },
  output: { schema: GenerateRegionQuizOutputSchema },
  prompt: `You are an expert quiz maker for an educational platform about Indonesian culture.
Your task is to create a 5-question multiple-choice quiz based on the provided text about a specific Indonesian region.
The questions should be engaging, clear, and cover different aspects mentioned in the text (history, figures, food, traditions, etc.).
For each question, provide 4 distinct options, where only one is correct. Ensure the correct answer is one of the provided options.
The difficulty should be moderate, suitable for a general audience learning about the region.
The quiz must be in Indonesian.

Context:
---
{{{context}}}
---

Based on the context above, generate 5 multiple-choice questions.`,
});

const generateRegionQuizFlow = ai.defineFlow(
  {
    name: 'generateRegionQuizFlow',
    inputSchema: GenerateRegionQuizInputSchema,
    outputSchema: GenerateRegionQuizOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
