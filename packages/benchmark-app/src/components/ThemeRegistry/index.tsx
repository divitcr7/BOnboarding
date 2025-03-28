'use client';
import * as React from 'react';
import { ThemeProvider } from '@benchmark-brokers/ui';
import NextAppDirEmotionCacheProvider from './EmotionCache';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme="benchmark">{children}</ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
