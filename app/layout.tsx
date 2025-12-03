import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://r2solutions.ai'),
  title: {
    default: 'R² Solutions | Industry-Specific AI Agents',
    template: '%s | R² Solutions'
  },
  description: 'Purpose-built AI agents that deliver measurable results in days, not years. Industry-specific automation for insurance, healthcare, and financial services.',
  keywords: [
    'AI integration',
    'AI agents',
    'industry-specific AI',
    'AI automation',
    'insurance AI',
    'healthcare AI',
    'cross-sell automation',
    'AI consulting'
  ],
  authors: [{ name: 'R² Solutions' }],
  creator: 'R² Solutions',
  publisher: 'R² Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://r2solutions.ai',
    siteName: 'R² Solutions',
    title: 'R² Solutions | Industry-Specific AI Agents',
    description: 'Purpose-built AI agents that deliver measurable results in days, not years.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'R² Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R² Solutions | Industry-Specific AI Agents',
    description: 'Purpose-built AI agents that deliver measurable results in days, not years.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
