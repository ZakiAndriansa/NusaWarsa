'use server';
/**
 * @fileOverview This file defines a Genkit flow for answering cultural emergency questions.
 *
 * - askCulturalEmergency - A function that takes a question and conversation history, extracts parameters,
 *   and provides contextual answers or asks clarifying questions.
 * - CulturalParameters - Extracted parameters from user query (event type, location, role, timeline, etc.)
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// Schema untuk parameter yang diekstrak dari pertanyaan user
const CulturalParametersSchema = z.object({
  eventType: z.string().nullable().optional().describe('Jenis acara/situasi budaya (contoh: pernikahan, pemakaman, selametan, dll)'),
  location: z.string().nullable().optional().describe('Lokasi/daerah/wilayah (contoh: Jakarta, Bali, Toraja, Jawa, dll)'),
  userRole: z.string().nullable().optional().describe('Peran user dalam acara (contoh: tamu, keluarga, teman dekat, dll)'),
  timeline: z.string().nullable().optional().describe('Kapan acara berlangsung (contoh: besok, minggu depan, dll)'),
  specificQuestion: z.string().nullable().optional().describe('Pertanyaan spesifik yang ingin ditanyakan (contoh: pakaian, etika, hadiah, dll)'),
});

export type AskCulturalEmergencyInput = z.infer<typeof AskCulturalEmergencyInputSchema>;
const AskCulturalEmergencyInputSchema = z.object({
  question: z.string().describe("Pertanyaan user tentang situasi budaya"),
  conversationHistory: z.array(z.object({
    role: z.enum(['user', 'assistant']),
    content: z.string(),
  })).optional().describe('Riwayat percakapan sebelumnya untuk konteks'),
});

const AskCulturalEmergencyOutputSchema = z.object({
  answer: z.string().describe("Jawaban AI assistant dalam bahasa Indonesia yang bisa berupa panduan lengkap atau pertanyaan klarifikasi"),
  extractedParameters: CulturalParametersSchema.describe('Parameter yang berhasil diekstrak dari pertanyaan user'),
  needsClarification: z.boolean().describe('Apakah AI perlu menanyakan informasi tambahan'),
  clarificationQuestions: z.array(z.string()).optional().describe('Pertanyaan klarifikasi jika informasi tidak lengkap'),
});

export type AskCulturalEmergencyOutput = z.infer<typeof AskCulturalEmergencyOutputSchema>;

export async function askCulturalEmergency(input: AskCulturalEmergencyInput): Promise<AskCulturalEmergencyOutput> {
  return askCulturalEmergencyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askCulturalEmergencyPrompt',
  input: { schema: AskCulturalEmergencyInputSchema },
  output: { schema: AskCulturalEmergencyOutputSchema },
  model: 'openai/gpt-5.1',
  prompt: `Anda adalah Cultural Emergency Assistant yang membantu orang menghadapi situasi budaya mendesak di Indonesia.

**Tugas Utama Anda:**
1. **Ekstrak Parameter** dari pertanyaan user (gunakan null jika informasi tidak tersedia):
   - eventType: Jenis acara/situasi (pernikahan, pemakaman, selametan, dll) - gunakan null jika tidak disebutkan
   - location: Lokasi/daerah (Jakarta, Bali, Toraja, Jawa, dll) - gunakan null jika tidak disebutkan
   - userRole: Peran user (tamu, keluarga, teman) - gunakan null jika tidak disebutkan
   - timeline: Kapan acaranya (besok, minggu depan, dll) - gunakan null jika tidak disebutkan
   - specificQuestion: Pertanyaan spesifik (pakaian, etika, hadiah, dll) - gunakan null jika tidak disebutkan

2. **Evaluasi Kelengkapan Informasi:**
   - Jika informasi CUKUP LENGKAP untuk memberikan panduan yang akurat, berikan jawaban lengkap
   - Jika informasi TIDAK LENGKAP atau AMBIGU, tanyakan pertanyaan klarifikasi yang spesifik

3. **Format Jawaban:**
   - Jika memberikan panduan lengkap, gunakan format terstruktur dengan **bold**, poin-poin, dan sections
   - Jika menanyakan klarifikasi, buat pertanyaan yang spesifik dan friendly
   - Selalu gunakan bahasa Indonesia yang sopan dan mudah dipahami

**Contoh Skenario:**

**Skenario 1 - Informasi Lengkap:**
Pertanyaan: "Saya diundang ke pernikahan Jawa besok di Jakarta, apa yang harus saya pakai sebagai tamu?"

Parameters yang diekstrak:
- eventType: "pernikahan"
- location: "Jakarta, Jawa"
- userRole: "tamu"
- timeline: "besok"
- specificQuestion: "pakaian"

needsClarification: false

Jawaban: Berikan panduan lengkap tentang pakaian yang sesuai untuk pernikahan Jawa.

**Skenario 2 - Perlu Klarifikasi:**
Pertanyaan: "Bagaimana caranya agar aku bisa menghadiri acara selametan di jakarta"

Parameters yang diekstrak:
{
  "eventType": "selametan",
  "location": "jakarta",
  "userRole": null,
  "timeline": null,
  "specificQuestion": null
}

needsClarification: true
clarificationQuestions: [
  "Selametan jenis apa yang akan Anda hadiri? (misalnya: selametan 7 bulanan, selametan rumah baru, atau selametan lainnya)",
  "Apa hubungan Anda dengan tuan rumah? (keluarga dekat, teman, tetangga, atau rekan kerja)",
  "Kapan acara selametan tersebut akan berlangsung?"
]

Jawaban: Berikan penjelasan singkat tentang selametan, kemudian tanyakan pertanyaan klarifikasi dengan friendly.

**PENTING:** Selalu gunakan null (bukan string kosong atau undefined) untuk field yang tidak memiliki informasi.

**Panduan Penting:**
- Budaya Indonesia sangat beragam per daerah, jadi lokasi sangat penting
- Peran user menentukan tingkat formalitas dan ekspektasi
- Timeline membantu user mempersiapkan diri
- Jangan memberikan jawaban generic jika bisa lebih spesifik dengan klarifikasi

{{#if conversationHistory}}
**Riwayat Percakapan:**
{{#each conversationHistory}}
{{role}}: {{content}}
{{/each}}
{{/if}}

**Pertanyaan User Saat Ini:**
"{{{question}}}"

Sekarang, ekstrak parameter, evaluasi kelengkapan informasi, dan berikan respons yang sesuai.`,
});

const askCulturalEmergencyFlow = ai.defineFlow(
  {
    name: 'askCulturalEmergencyFlow',
    inputSchema: AskCulturalEmergencyInputSchema,
    outputSchema: AskCulturalEmergencyOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
