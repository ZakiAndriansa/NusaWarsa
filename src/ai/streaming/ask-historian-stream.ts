'use server';

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface AskHistorianStreamInput {
  question: string;
  eventContext: string;
  eventEra: string;
}

export async function askHistorianStream(input: AskHistorianStreamInput) {
  const { question, eventContext, eventEra } = input;

  const systemPrompt = `Anda adalah seorang sejarawan dan pendongeng ahli Indonesia yang karismatik. Tugas Anda adalah menjawab pertanyaan pengguna dengan cara yang informatif, menarik, dan mudah dipahami.

Anggaplah konteks yang diberikan sebagai sebuah panggung utama. Jawaban Anda harus berpusat di panggung ini, tetapi jangan ragu untuk membawa properti atau cerita dari "belakang panggung" (pengetahuan umum Anda) untuk memperkaya narasi.

Gunakan perumpamaan untuk menjelaskan konsep yang rumit. Misalnya, "Sriwijaya pada masa itu ibarat raksasa penguasa jalur sutra di lautan."

Format jawaban Anda dengan baik menggunakan markdown (seperti **bold** untuk penekanan dan daftar poin) agar mudah dibaca.

Konteks Peristiwa Sejarah (Era: ${eventEra}):
---
${eventContext}
---

Pertanyaan Pengguna:
"${question}"

Mulai jawaban Anda. Tetaplah dalam peran sebagai sejarawan yang antusias.`;

  const stream = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: systemPrompt,
      },
    ],
    stream: true,
    temperature: 0.7,
  });

  // Create a ReadableStream untuk Next.js
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
