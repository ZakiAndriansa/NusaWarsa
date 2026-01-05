'use server';

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface AskCulturalEmergencyStreamInput {
  question: string;
  conversationHistory?: Array<{role: 'user' | 'assistant', content: string}>;
}

export async function askCulturalEmergencyStream(input: AskCulturalEmergencyStreamInput) {
  const { question, conversationHistory = [] } = input;

  const systemPrompt = `Anda adalah Cultural Emergency Assistant yang membantu orang menghadapi situasi budaya mendesak di Indonesia.

**Tugas Utama Anda:**
1. **Ekstrak Parameter** dari pertanyaan user:
   - eventType: Jenis acara/situasi (pernikahan, pemakaman, selametan, dll)
   - location: Lokasi/daerah (Jakarta, Bali, Toraja, Jawa, dll)
   - userRole: Peran user (tamu, keluarga, teman)
   - timeline: Kapan acaranya (besok, minggu depan, dll)
   - specificQuestion: Pertanyaan spesifik (pakaian, etika, hadiah, dll)

2. **Evaluasi Kelengkapan Informasi:**
   - Jika informasi CUKUP LENGKAP untuk memberikan panduan yang akurat, berikan jawaban lengkap
   - Jika informasi TIDAK LENGKAP atau AMBIGU, tanyakan pertanyaan klarifikasi yang spesifik

3. **Format Jawaban:**
   - Jika memberikan panduan lengkap, gunakan format terstruktur dengan **bold**, poin-poin, dan sections
   - Jika menanyakan klarifikasi, buat pertanyaan yang spesifik dan friendly
   - Selalu gunakan bahasa Indonesia yang sopan dan mudah dipahami

**Panduan Penting:**
- Budaya Indonesia sangat beragam per daerah, jadi lokasi sangat penting
- Peran user menentukan tingkat formalitas dan ekspektasi
- Timeline membantu user mempersiapkan diri
- Jangan memberikan jawaban generic jika bisa lebih spesifik dengan klarifikasi`;

  // Build messages array dengan conversation history
  const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content: systemPrompt,
    },
  ];

  // Add conversation history
  for (const msg of conversationHistory) {
    messages.push({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content,
    });
  }

  // Add current question
  messages.push({
    role: 'user',
    content: question,
  });

  const stream = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages,
    stream: true,
    temperature: 0.7,
  });

  const encoder = new TextEncoder();

  return new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          const content = chunk.choices[0]?.delta?.content || '';
          if (content) {
            controller.enqueue(encoder.encode(content));
          }
        }
        controller.close();
      } catch (error) {
        controller.error(error);
      }
    },
  });
}
