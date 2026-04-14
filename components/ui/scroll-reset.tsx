'use client';

import { useEffect } from 'react';

export function ScrollReset() {
  useEffect(() => {
    // Force the browser to scroll to the top on every fresh mount/refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}
