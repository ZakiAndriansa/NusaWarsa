'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Loader2, Bot, User, Send, ArrowDown, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { MarkdownText } from '@/lib/markdown-utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  extractedParameters?: {
    eventType?: string | null;
    location?: string | null;
    userRole?: string | null;
    timeline?: string | null;
    specificQuestion?: string | null;
  };
  needsClarification?: boolean;
  clarificationQuestions?: string[];
}

const SUGGESTION_QUESTIONS = [
  'Saya diundang ke pernikahan Jawa besok, apa yang harus saya pakai?',
  'Bagaimana cara memberi salam yang sopan kepada orang tua teman di Bali?',
  'Saya akan menghadiri pemakaman di Toraja, apa yang harus saya bawa?',
];

export default function ChatBudayawan() {
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message on client side only after mount
  useEffect(() => {
    setMounted(true);
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: 'Halo! Saya adalah Asisten Darurat Kebudayaan. Saya siap membantu Anda dengan pertanyaan budaya yang mendesak. Apa yang bisa saya bantu hari ini?',
        timestamp: new Date()
      }
    ]);
  }, []);

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
    const currentQuestion = question;
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
      // Prepare conversation history (exclude the current question)
      const conversationHistory = messages
        .filter(m => m.role === 'user' || m.role === 'assistant')
        .map(m => ({ role: m.role, content: m.content }));

      const response = await fetch('/api/chat/cultural-emergency', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: currentQuestion,
          conversationHistory,
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
      // Error logged in production monitoring
      setMessages(prev =>
        prev.map(msg =>
          msg.id === assistantMessageId
            ? { ...msg, content: 'Maaf, terjadi kesalahan saat menghubungi AI. Silakan coba lagi.' }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (question: string) => {
    handleSendMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
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
      <section className="mt-8 sm:mt-12 md:mt-16">
        <Card className="shadow-2xl border-2 border-primary/10 bg-card">
          <CardHeader className="text-center border-b py-3 sm:py-4">
            <CardTitle className="font-headline text-lg sm:text-xl md:text-2xl flex items-center justify-center gap-1.5 sm:gap-2">
              <Sparkles className="text-primary h-5 w-5 sm:h-6 sm:w-6"/> Asisten Darurat Kebudayaan
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 md:p-8 text-center">
            <div className="flex items-center justify-center">
              <div className="animate-pulse text-muted-foreground text-sm sm:text-base">Memuat...</div>
            </div>
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section className="mt-8 sm:mt-12 md:mt-16">
      <Card className="shadow-2xl border-2 border-primary/10 bg-card">
        <CardHeader className="text-center border-b py-3 sm:py-4">
          <CardTitle className="font-headline text-lg sm:text-xl md:text-2xl flex items-center justify-center gap-1.5 sm:gap-2">
            <Sparkles className="text-primary h-5 w-5 sm:h-6 sm:w-6"/> Asisten Darurat Kebudayaan
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

                  <div className="flex-1 max-w-[80%]">
                    <div className={`rounded-lg p-3 ${
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

                    {/* Extracted Parameters Badge (for assistant messages) */}
                    {message.role === 'assistant' && message.extractedParameters && (
                      <div className="mt-2 p-2 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <Info className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                          <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                            Parameter yang terdeteksi:
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {message.extractedParameters.eventType && (
                            <Badge variant="secondary" className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">
                              Acara: {message.extractedParameters.eventType}
                            </Badge>
                          )}
                          {message.extractedParameters.location && (
                            <Badge variant="secondary" className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">
                              Lokasi: {message.extractedParameters.location}
                            </Badge>
                          )}
                          {message.extractedParameters.userRole && (
                            <Badge variant="secondary" className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">
                              Peran: {message.extractedParameters.userRole}
                            </Badge>
                          )}
                          {message.extractedParameters.timeline && (
                            <Badge variant="secondary" className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">
                              Waktu: {message.extractedParameters.timeline}
                            </Badge>
                          )}
                          {message.extractedParameters.specificQuestion && (
                            <Badge variant="secondary" className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">
                              Topik: {message.extractedParameters.specificQuestion}
                            </Badge>
                          )}
                        </div>
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
              {!hasUserMessages && SUGGESTION_QUESTIONS && SUGGESTION_QUESTIONS.length > 0 && (
                <div className="flex flex-col gap-2 mt-3">
                  <p className="text-[10px] text-muted-foreground px-1">
                    Pertanyaan yang disarankan:
                  </p>
                  {SUGGESTION_QUESTIONS.slice(0, 2).map((question, index) => (
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
                  {SUGGESTION_QUESTIONS.map((question, index) => (
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
            <div className="max-w-2xl mx-auto px-4">
              {/* Mobile Layout - Icon button beside input */}
              <div className="flex gap-2 items-end md:hidden">
                <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Tanyakan tentang etika budaya, pakaian adat..."
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

              {/* Desktop Layout - Original with text button below */}
              <div className="hidden md:block space-y-2">
                <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Tanyakan tentang etika budaya, pakaian adat, atau persiapan menghadiri acara budaya..."
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
