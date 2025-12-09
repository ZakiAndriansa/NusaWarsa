'use server';
/**
 * @fileOverview This file defines a Genkit flow for suggesting traditional regional soundscapes based on the location the user is currently viewing.
 *
 * - suggestRegionalSoundscapes - A function that takes a region name as input and returns a suggestion for a relevant regional soundscape.
 * - SuggestRegionalSoundscapesInput - The input type for the suggestRegionalSoundscapes function.
 * - SuggestRegionalSoundscapesOutput - The return type for the suggestRegionalSoundscapes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRegionalSoundscapesInputSchema = z.object({
  regionName: z.string().describe('The name of the region the user is exploring.'),
});
export type SuggestRegionalSoundscapesInput = z.infer<typeof SuggestRegionalSoundscapesInputSchema>;

const SuggestRegionalSoundscapesOutputSchema = z.object({
  soundscapeSuggestion: z.string().describe('A suggestion for a traditional regional soundscape fitting for the region.'),
});
export type SuggestRegionalSoundscapesOutput = z.infer<typeof SuggestRegionalSoundscapesOutputSchema>;

export async function suggestRegionalSoundscapes(input: SuggestRegionalSoundscapesInput): Promise<SuggestRegionalSoundscapesOutput> {
  return suggestRegionalSoundscapesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRegionalSoundscapesPrompt',
  input: {schema: SuggestRegionalSoundscapesInputSchema},
  output: {schema: SuggestRegionalSoundscapesOutputSchema},
  prompt: `You are a music expert specializing in Indonesian traditional music. Based on the region the user is exploring, suggest a fitting traditional regional soundscape (music).

Region: {{{regionName}}}

Suggestion:`,
});

const suggestRegionalSoundscapesFlow = ai.defineFlow(
  {
    name: 'suggestRegionalSoundscapesFlow',
    inputSchema: SuggestRegionalSoundscapesInputSchema,
    outputSchema: SuggestRegionalSoundscapesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
