import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Aura Jewels | Timeless Elegance',
  description: 'Discover our exquisite collection of handcrafted jewelry.',
  keywords: ['jewelry', 'diamonds', 'gold', 'necklaces', 'earrings', 'bracelets', 'rings'],
  authors: [{ name: 'Aura Jewels' }],
  openGraph: {
    title: 'Aura Jewels | Timeless Elegance',
    description: 'Discover our exquisite collection of handcrafted jewelry.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Aura Jewels',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aura Jewels | Timeless Elegance',
    description: 'Discover our exquisite collection of handcrafted jewelry.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="bg-stone-50 font-sans text-stone-900 antialiased selection:bg-stone-200 selection:text-stone-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
