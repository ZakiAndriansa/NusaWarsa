'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, X, Send, Loader2, User, Sparkles, Minimize2, Maximize2, ArrowDown } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { MarkdownText } from '@/lib/markdown-utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function FloatingAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const websiteContext = `
Anda adalah AI Assistant untuk website Nusa Warsa, sebuah platform digital interaktif untuk eksplorasi sejarah dan budaya Indonesia.

VISI & MISI:
- Visi: Menjadi platform terdepan untuk edukasi budaya Indonesia yang mudah diakses dan menyenangkan bagi semua kalangan
- Misi: Melestarikan dan memperkenalkan kekayaan budaya Indonesia kepada generasi muda melalui teknologi interaktif dan AI
- Nilai: Menghormati keberagaman, menjaga autentisitas budaya, dan membangun jembatan antara tradisi dengan modernitas

FITUR-FITUR UTAMA WEBSITE:

1. BERANDA (Hero Section)
   - Landing page dengan tagline "Jejak Waktu Nusantara"
   - Ajakan untuk memulai penjelajahan sejarah dan budaya Indonesia

2. TENTANG KAMI
   - Penjelasan visi, misi, dan nilai platform
   - Fokus pada edukasi budaya melalui teknologi dan AI

3. TIMELINE SEJARAH INDONESIA
   - Perjalanan sejarah Indonesia dari masa kerajaan hingga modern
   - Dibagi menjadi 4 era:
     * Era Kejayaan Kerajaan (Kutai, Sriwijaya, Majapahit, dll)
     * Era Perdagangan & Akulturasi (Maluku Spice Islands, Aceh Sultanate)
     * Era Kolonial & Perjuangan (VOC, Perlawanan Kolonial, Proklamasi)
     * Era Modern & Digital
   - Setiap periode dilengkapi:
     * Deskripsi lengkap peristiwa sejarah
     * Tokoh-tokoh penting (Key Figures/Peninggalan Utama)
     * Peristiwa terkait (Related Events/Highlight Budaya)
     * Chat dengan Sejarawan AI untuk tanya jawab mendalam

4. PETA INDONESIA INTERAKTIF
   - Eksplorasi 34 provinsi Indonesia
   - Setiap provinsi menampilkan:
     * Sejarah singkat daerah
     * Dongeng/cerita rakyat lokal
     * Tokoh terkenal dari daerah tersebut
     * Kuliner khas dengan gambar
     * Pakaian adat tradisional
     * Tradisi unik daerah
     * Quiz interaktif tentang budaya daerah
     * Chat dengan Ahli Regional untuk tanya jawab

5. GALERI TRADISI (200+ Tradisi)
   - Koleksi lengkap tradisi Nusantara dari seluruh Indonesia
   - Kategori tradisi:
     * Tarian (Tari Piring, Tari Kecak, Tari Saman, dll)
     * Kerajinan (Tenun, Batik, Ukiran, dll)
     * Upacara (Upacara adat, ritual tradisional)
     * Kuliner (Makanan tradisional)
     * Musik (Alat musik tradisional, gamelan, dll)
   - Setiap tradisi memiliki:
     * Deskripsi singkat dan lengkap
     * Sejarah dan asal usul
     * Makna dan filosofi
     * Asal daerah/provinsi
     * Pop-up preview dengan 3 poin ringkasan
     * Halaman detail lengkap dengan Chat Budayawan AI

6. LAYANAN INTERAKTIF:

   a) TEMUKAN TRADISI (Quiz Kepribadian)
      - Quiz interaktif untuk menemukan tradisi yang cocok dengan kepribadian user
      - Berdasarkan preferensi budaya dan minat personal
      - 8 pertanyaan kuis kepribadian
      - Rekomendasi tradisi personal berdasarkan hasil
      - 6 tipe kepribadian budaya

   b) PANDUAN BUDAYA (Cultural Scenarios)
      - Panduan step-by-step untuk berbagai situasi budaya
      - Membantu user menghadapi situasi budaya yang tidak familiar
      - AI Assistant untuk pertanyaan mendesak
      - Kategori: Pernikahan, Pemakaman, Festival, Keagamaan, Kehidupan sehari-hari
      - Do & Don't lists untuk setiap situasi
      - Frasa penting dengan pengucapan

7. AI ASSISTANT FEATURES:
   - Sejarawan AI: Menjawab pertanyaan tentang timeline sejarah Indonesia
   - Ahli Regional AI: Menjawab pertanyaan tentang budaya dan tradisi provinsi
   - Budayawan AI: Menjawab pertanyaan detail tentang tradisi spesifik
   - AI Assistant Umum (ini): Menjawab pertanyaan tentang website dan konten keseluruhan

8. PENCARIAN GLOBAL:
   - Fitur pencarian komprehensif yang mencakup:
     * Semua 200+ tradisi
     * Semua timeline sejarah
     * Semua 34 provinsi
     * Panduan budaya (scenarios)
     * Halaman-halaman website
   - Pencarian dengan debouncing dan caching untuk performa optimal

INFORMASI TEKNIS:
- Built dengan Next.js 14 dan TypeScript
- Menggunakan AI (OpenAI GPT-4o) untuk fitur interaktif
- Design responsif untuk mobile dan desktop
- Dark mode support
- Animasi smooth untuk UX yang lebih baik

CARA MENGGUNAKAN WEBSITE:
1. Mulai dari Beranda, pilih "Mulai Penjelajahan"
2. Eksplorasi Timeline Sejarah untuk memahami perjalanan Indonesia
3. Klik Peta Indonesia untuk eksplorasi budaya per provinsi
4. Lihat Galeri Tradisi untuk koleksi lengkap tradisi Nusantara
5. Gunakan fitur Layanan untuk pengalaman interaktif:
   - Quiz untuk menemukan tradisi yang cocok dengan kepribadian
   - Panduan Budaya untuk situasi praktis sehari-hari
6. Gunakan Search (Cmd/Ctrl + K) untuk cari konten spesifik
7. Gunakan AI Assistant di setiap halaman untuk bertanya lebih dalam

KONTEN TRADISI YANG TERSEDIA:
Website ini memiliki 200+ tradisi dari seluruh Indonesia mencakup:
- Tarian tradisional (Tari Piring, Kecak, Saman, Pendet, Jaipong, dll)
- Kerajinan (Tenun NTT, Batik, Ukiran Asmat, dll)
- Upacara adat dari berbagai suku
- Kuliner khas setiap daerah
- Musik tradisional dan alat musik

PERIODE SEJARAH YANG DICAKUP:
- Kerajaan Kutai (400 M) - Kerajaan Hindu tertua
- Kerajaan Sriwijaya (671-1377) - Pusat maritim dan pendidikan Buddha
- Pembangunan Borobudur (750-850) - Candi Buddha terbesar
- Kerajaan Majapahit (1293-1527) - Kejayaan nusantara
- Masuknya Islam (abad 13-16)
- Kesultanan Aceh, Maluku Spice Islands
- Era VOC dan Kolonial Belanda
- Perlawanan kemerdekaan
- Kebangkitan Nasional (Budi Utomo 1908)
- Proklamasi Kemerdekaan 1945
- Era Modern hingga Digital

Jawab pertanyaan user dengan detail, informatif, dan ramah. Jika user bertanya tentang tradisi atau sejarah spesifik, berikan informasi yang ada di website. Jika user bertanya cara menggunakan fitur, jelaskan dengan jelas step-by-stepnya.
`;

  const handleSendMessage = async () => {
    const question = inputValue.trim();
    if (!question || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: question,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Create a placeholder message with "thinking" text
    const assistantMessageId = (Date.now() + 1).toString();
    const assistantMessage: Message = {
      id: assistantMessageId,
      role: 'assistant',
      content: 'AI sedang menganalisis',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, assistantMessage]);

    try {
      const response = await fetch('/api/chat/historian', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          context: websiteContext,
          era: 'Nusa Warsa Website',
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error('Failed to get response');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        accumulatedContent += chunk;

        setMessages(prev =>
          prev.map(msg =>
            msg.id === assistantMessageId
              ? { ...msg, content: accumulatedContent }
              : msg
          )
        );
      }
    } catch (error) {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === assistantMessageId
            ? { ...msg, content: 'Terjadi kesalahan pada server AI. Silakan coba lagi nanti.' }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToBottom = (smooth = false) => {
    if (messagesContainerRef.current) {
      if (smooth) {
        messagesContainerRef.current.scrollTo({
          top: messagesContainerRef.current.scrollHeight,
          behavior: 'smooth'
        });
      } else {
        messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
      }
    }
  };

  const handleScroll = () => {
    if (!messagesContainerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;

    setShowScrollButton(!isNearBottom);
  };

  // Auto-scroll ke bawah saat ada pesan baru atau loading
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!messagesContainerRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 150;

      // Auto-scroll only if user is near bottom (hasn't manually scrolled up)
      if (isNearBottom) {
        scrollToBottom();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [messages, isLoading]);

  // Show notification on every visit/refresh
  useEffect(() => {
    // Show notification after 2 seconds
    const showTimer = setTimeout(() => {
      setShowNotification(true);
      // Hide notification after 10 seconds
      const hideTimer = setTimeout(() => {
        setShowNotification(false);
      }, 10000);

      return () => clearTimeout(hideTimer);
    }, 2000);

    return () => clearTimeout(showTimer);
  }, []);

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Notification Tooltip */}
          {showNotification && (
            <div className="absolute bottom-full right-0 mb-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="relative bg-card border-2 border-primary/20 rounded-lg shadow-2xl px-4 py-2 whitespace-nowrap">
                <button
                  onClick={() => setShowNotification(false)}
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close notification"
                >
                  <X className="h-3 w-3" />
                </button>
                <p className="text-xs font-medium text-foreground">Tanya seputar web di sini</p>
                {/* Arrow pointing down */}
                <div className="absolute -bottom-2 right-4 w-4 h-4 bg-card border-r-2 border-b-2 border-primary/20 transform rotate-45"></div>
              </div>
            </div>
          )}

          <Button
            onClick={() => {
              setIsOpen(true);
              setShowNotification(false);
            }}
            className="h-12 w-12 rounded-full shadow-2xl hover:scale-110 transition-all bg-primary hover:bg-primary/90 p-0"
            aria-label="Open AI Assistant"
          >
            <Bot className="h-5 w-5" />
          </Button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card
          className={`fixed ${
            isMinimized
              ? 'bottom-6 right-6 w-80'
              : 'bottom-6 right-6 w-[380px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)]'
          } shadow-2xl z-50 flex flex-col border-2 border-primary/20 transition-all duration-300`}
        >
          {/* Header */}
          <CardHeader className="pb-2 pt-3 border-b bg-primary/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-primary/10">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-sm">AI Assistant</CardTitle>
                  <CardDescription className="text-xs">Tanya tentang Nusa Warsa</CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setIsMinimized(!isMinimized)}
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Chat Content */}
          {!isMinimized && (
            <div className="flex flex-col flex-1 min-h-0">
              <CardContent className="flex-1 min-h-0 overflow-hidden p-0">
                <div className="relative h-full">
                  <div
                    ref={messagesContainerRef}
                    onScroll={handleScroll}
                    className="h-full overflow-y-auto p-4 space-y-4"
                  >
                    {messages.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <div className="p-3 rounded-full bg-primary/10 mb-3">
                          <Sparkles className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-base mb-2">Halo! 👋</h3>
                        <p className="text-xs text-muted-foreground mb-3">
                          Saya AI Assistant Nusa Warsa. Tanya saya tentang:
                        </p>
                        <ul className="text-xs text-muted-foreground text-left space-y-1">
                          <li>• Tradisi dan budaya Indonesia</li>
                          <li>• Timeline sejarah Nusantara</li>
                          <li>• Fitur-fitur di website ini</li>
                          <li>• Cara menggunakan platform</li>
                        </ul>
                      </div>
                    ) : (
                      <>
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex gap-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            {message.role === 'assistant' && (
                              <div className="flex-shrink-0">
                                <div className="p-2 rounded-full bg-primary/10">
                                  <Bot className="h-4 w-4 text-primary" />
                                </div>
                              </div>
                            )}

                            <div
                              className={`max-w-[80%] rounded-lg p-3 ${
                                message.role === 'user'
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-muted'
                              }`}
                            >
                              {message.role === 'assistant' && message.content === 'AI sedang menganalisis' ? (
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                  <span>{message.content}</span>
                                </div>
                              ) : (
                                <div className="text-sm whitespace-pre-line">
                                  <MarkdownText text={message.content} />
                                </div>
                              )}
                            </div>

                            {message.role === 'user' && (
                              <div className="flex-shrink-0">
                                <div className="p-2 rounded-full bg-secondary">
                                  <User className="h-4 w-4 text-secondary-foreground" />
                                </div>
                              </div>
                            )}
                          </div>
                        ))}

                        <div ref={messagesEndRef} />
                      </>
                    )}
                  </div>

                  {/* Scroll to Bottom Button */}
                  {showScrollButton && (
                    <Button
                      onClick={() => scrollToBottom(true)}
                      size="icon"
                      className="absolute bottom-4 right-4 h-8 w-8 rounded-full shadow-lg z-10 hover:scale-110 transition-transform"
                      aria-label="Scroll ke bawah"
                    >
                      <ArrowDown className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>

              <Separator />

              {/* Input Form */}
              <div className="p-3">
                <div className="space-y-2">
                  <Textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ketik pertanyaan Anda..."
                    className="min-h-[50px] text-xs resize-none"
                    disabled={isLoading}
                  />

                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    size="sm"
                    className="w-full"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Menganalisis...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Kirim
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Card>
      )}
    </>
  );
}
