/**
 * ROOT LAYOUT
 * Global layout with theme provider, header, and footer
 * ES6+ TypeScript
 */

import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SITE_METADATA } from '@/content/site-config';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  authors: [{ name: SITE_METADATA.author }],
  creator: SITE_METADATA.author,
  keywords: ['React', 'Next.js', 'TypeScript', 'Full-Stack Developer', 'Software Engineer'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://salmankhan.dev',
    siteName: SITE_METADATA.title,
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
      </head>
      <body className="flex min-h-screen flex-col bg-white dark:bg-black">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem enableColorScheme>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
