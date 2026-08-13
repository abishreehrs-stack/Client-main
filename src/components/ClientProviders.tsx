'use client';

import { SiteDataProvider } from '@/context/SiteDataContext';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <SiteDataProvider>
      {children}
    </SiteDataProvider>
  );
}
