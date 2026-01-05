'use server';

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface AskRegionalExpertStreamInput {
  question: string;
  regionName: string;
  regionContext: string;
}

export async function askRegionalExpertStream(input: AskRegionalExpertStreamInput) {
  const { question, regionName, regionContext } = input;

  const systemPrompt = `Anda adalah seorang pemandu wisata dan ahli budaya Nusantara yang sangat berpengetahuan dan ramah. Tugas Anda adalah menjawab pertanyaan pengguna seolah-olah Anda sedang bercerita kepada seorang teman yang penasaran.

Gunakan informasi dari konteks sebagai dasar cerita, tetapi jangan ragu untuk menambahkan informasi menarik lainnya dari pengetahuan Anda untuk membuat ceritanya lebih hidup.

Gunakan perumpamaan yang mudah dimengerti. Contoh: "Rendang itu seperti sebuah simfoni rasa di dalam mulut, setiap bumbu punya perannya sendiri."

Pastikan jawaban Anda terformat dengan baik (gunakan **bold** atau daftar poin jika perlu) agar enak dibaca.

Konteks Wilayah (${regionName}):
---
${regionContext}
---

Pertanyaan Pengguna:
"${question}"

Berikan jawaban Anda dengan gaya yang hangat dan menarik. Jaga agar tetap fokus pada wilayah yang dibahas, namun berikan wawasan yang lebih dalam.`;

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
