import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import dynamic from 'next/dynamic';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ScrollController from '@/components/ui/scroll-controller';

// Dynamically import FloatingAIAssistant to prevent chunk loading issues
const FloatingAIAssistant = dynamic(
  () => import('@/components/chat/floating-ai-assistant'),
  {
    ssr: false,
    loading: () => null,
  }
);

// Configure fonts with Next.js font optimization with fallback
const playfair = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
  fallback: ['serif'],
  preload: true,
});

const poppins = Poppins({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  fallback: ['sans-serif'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'Nusa Warsa',
  description:
    'An interactive journey through the history and culture of Indonesia.',
  icons: {
    icon: '/pictures/logo/favIcon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${playfair.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/leaflet/leaflet.css" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased'
        )}
      >
        <ScrollController />
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <FloatingAIAssistant />
      </body>
    </html>
  );
}
