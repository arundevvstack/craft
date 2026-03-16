'use server';
/**
 * @fileOverview A Genkit flow for generating AI-powered content suggestions such as meta descriptions and alternative headlines.
 *
 * - generateAiContentSuggestions - A function that handles the content suggestion process.
 * - AiContentSuggestionInput - The input type for the generateAiContentSuggestions function.
 * - AiContentSuggestionOutput - The return type for the generateAiContentSuggestions function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiContentSuggestionInputSchema = z.object({
  content: z.string().describe('The main text content of the section or item for which to generate suggestions.'),
  currentTitle: z.string().optional().describe('The current title of the section or item, if available. Used to generate alternative headlines.'),
});
export type AiContentSuggestionInput = z.infer<typeof AiContentSuggestionInputSchema>;

const AiContentSuggestionOutputSchema = z.object({
  metaDescription: z.string().describe('A concise, SEO-friendly meta description for the content, typically under 160 characters.'),
  headlineSuggestions: z.array(z.string()).describe('An array of alternative headline suggestions for the content.'),
});
export type AiContentSuggestionOutput = z.infer<typeof AiContentSuggestionOutputSchema>;

export async function generateAiContentSuggestions(input: AiContentSuggestionInput): Promise<AiContentSuggestionOutput> {
  return aiContentSuggestionFlow(input);
}

const aiContentSuggestionPrompt = ai.definePrompt({
  name: 'aiContentSuggestionPrompt',
  input: { schema: AiContentSuggestionInputSchema },
  output: { schema: AiContentSuggestionOutputSchema },
  prompt: `You are an expert content optimizer and SEO specialist. Your task is to generate concise meta descriptions and alternative headline suggestions for website content.

Based on the following content:

Content: {{{content}}}

{{#if currentTitle}}
Current Title: {{{currentTitle}}}
{{/if}}

Please provide:
1. A concise, SEO-friendly meta description (under 160 characters).
2. Three alternative headline suggestions that are engaging and varied.

Ensure your response is a JSON object matching the following structure:

```json
{
  "metaDescription": "string",
  "headlineSuggestions": ["string", "string", "string"]
}
```
`,
});

const aiContentSuggestionFlow = ai.defineFlow(
  {
    name: 'aiContentSuggestionFlow',
    inputSchema: AiContentSuggestionInputSchema,
    outputSchema: AiContentSuggestionOutputSchema,
  },
  async (input) => {
    const { output } = await aiContentSuggestionPrompt(input);
    if (!output) {
      throw new Error('Failed to generate AI content suggestions.');
    }
    return output;
  }
);
