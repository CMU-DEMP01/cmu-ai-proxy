'use client';

import { ReactNode } from 'react';
import ServiceWorkerProvider from './ServiceWorkerProvider';

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <ServiceWorkerProvider />
      {children}
    </>
  );
}