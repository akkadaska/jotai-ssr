import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { RenderingBoundary } from '@/jotai-ssr/RenderingBoundary';
import { Counter } from '@/components/Counter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RenderingBoundary>
          <div className="border-2 border-red-600 rounded m-2 p-2">
            <h1 className="text-xl font-bold text-center text-red-600">
              layout.tsx
            </h1>
            <Counter />
            {children}
          </div>
        </RenderingBoundary>
      </body>
    </html>
  );
}
