'use client';

import ThemeRegistry from '@/components/ThemeRegistry';
import { ClientProvider } from '@benchmark-brokers/api';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClientProvider>
      <ThemeRegistry>{children}</ThemeRegistry>
    </ClientProvider>
  );
}
