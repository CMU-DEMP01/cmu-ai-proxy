'use client';

import { useEffect } from 'react';
import * as serviceWorkerRegistration from '../serviceWorkerRegistration';

export default function ServiceWorkerProvider() {
  useEffect(() => {
    serviceWorkerRegistration.register();
  }, []);

  return null;
}