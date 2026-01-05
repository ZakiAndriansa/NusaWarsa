'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Bot, User, Send, ArrowDown } from 'lucide-react';
import type { Tradition } from '@/lib/types';
import { MarkdownText } from '@/lib/markdown-utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatBudayawanProps {
  tradition: Tradition;
}

export default function ChatBudayawan({ tradition }: ChatBudayawanProps) {
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const context = `
    Nama Tradisi: ${tradition.name}
    Kategori: ${tradition.category}
    Region: ${tradition.region}
    Deskripsi: ${tradition.fullDescription}
    Sejarah: ${tradition.history}
    Makna: ${tradition.meaning}
  `;

  // Initialize welcome message on client side only after mount
  useEffect(() => {
    setMounted(true);
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: `Halo! Saya adalah Budayawan AI yang siap membantu Anda memahami lebih dalam tentang '${tradition.name}'. Silakan ajukan pertanyaan Anda!`,
        timestamp: new Date()
      }
    ]);
  }, [tradition.name]);

  const handleSendMessage = async (questionText?: string) => {
    const question = questionText || inputValue.trim();
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

    // Create a placeholder message with "analyzing" text
    const assistantMessageId = (Date.now() + 1).toString();
    const assistantMessage: Message = {
      id: assistantMessageId,
      role: 'assistant',
      content: 'AI sedang menganalisis',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, assistantMessage]);

    try {
      const response = await fetch('/api/chat/regional-expert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          regionContext: context,
          regionName: tradition.name,
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

  const handleSuggestionClick = (question: string) => {
    handleSendMessage(question);
  };

  // Check if user has sent any messages (only welcome message = no user messages)
  const hasUserMessages = messages.some(msg => msg.role === 'user');

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
    // Gunakan setTimeout untuk memastikan DOM sudah terupdate
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

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <section className="mt-16">
        <Card className="shadow-2xl border-2 border-primary/10 bg-card">
          <CardHeader className="text-center border-b py-4">
            <CardTitle className="font-headline text-2xl flex items-center justify-center gap-2">
              <Bot className="text-primary h-6 w-6"/> Tanya Budayawan AI
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center">
              <div className="animate-pulse text-muted-foreground">Memuat...</div>
            </div>
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section className="mt-16">
      <Card className="shadow-2xl border-2 border-primary/10 bg-card">
        <CardHeader className="text-center border-b py-4">
          <CardTitle className="font-headline text-2xl flex items-center justify-center gap-2">
            <Bot className="text-primary h-6 w-6"/> Tanya Budayawan AI
          </CardTitle>
        </CardHeader>
        <CardContent className="border-t">
          {/* Chat Messages */}
          <div className="relative">
            <div
              ref={messagesContainerRef}
              onScroll={handleScroll}
              className="space-y-4 mb-4 max-h-[350px] overflow-y-auto pr-2 pt-4 px-4"
            >
            {messages.map((message) => (
                  <div key={message.id} className={`flex gap-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {message.role === 'assistant' && (
                      <div className="flex-shrink-0">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                    )}

                    <div className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}>
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

            {/* Suggestion Questions - Show only when no user messages yet */}
            {!hasUserMessages && tradition.suggestionQuestions && tradition.suggestionQuestions.length > 0 && (
              <div className="flex flex-col gap-2 mt-3">
                <p className="text-[10px] text-muted-foreground px-1">
                  Pertanyaan yang disarankan:
                </p>
                {tradition.suggestionQuestions.slice(0, 2).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(question)}
                    disabled={isLoading}
                    className="text-left text-xs p-2.5 rounded-md bg-muted/50 hover:bg-primary/10 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed md:hidden"
                  >
                    <span className="text-primary font-medium mr-1.5 text-[11px]">Q{index + 1}:</span>
                    <span className="text-foreground/80">{question}</span>
                  </button>
                ))}
                {tradition.suggestionQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(question)}
                    disabled={isLoading}
                    className="hidden md:block text-left text-xs p-2.5 rounded-md bg-muted/50 hover:bg-primary/10 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="text-primary font-medium mr-1.5 text-[11px]">Q{index + 1}:</span>
                    <span className="text-foreground/80">{question}</span>
                  </button>
                ))}
              </div>
            )}

              <div ref={messagesEndRef} />
            </div>

            {/* Scroll to Bottom Button */}
            {showScrollButton && (
              <Button
                onClick={() => scrollToBottom(true)}
                size="icon"
                className="absolute bottom-4 right-6 rounded-full shadow-lg z-10 hover:scale-110 transition-transform"
                aria-label="Scroll ke bawah"
              >
                <ArrowDown className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t pt-3 pb-2">
            <div className="space-y-2 max-w-2xl mx-auto px-4">
              {/* Mobile Layout */}
              <div className="flex gap-2 items-end md:hidden">
                <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder={`Contoh: Bagaimana cara melakukan ${tradition.name}? Apa makna gerakan-gerakannya?`}
                  className="min-h-[60px] text-sm resize-none flex-1"
                  disabled={isLoading}
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isLoading}
                  size="icon"
                  className="h-[60px] w-[60px] flex-shrink-0"
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </Button>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:block space-y-2">
                <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder={`Contoh: Bagaimana cara melakukan ${tradition.name}? Apa makna gerakan-gerakannya?`}
                  className="min-h-[60px] text-sm resize-none"
                  disabled={isLoading}
                />
                <div className="flex justify-end items-center">
                  <Button
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim() || isLoading}
                    size="sm"
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
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
