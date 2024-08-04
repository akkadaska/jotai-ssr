import React from 'react';
import { HydrationBoundary } from '@/jotai-ssr/HydrationBoundary';
import {
  FetchAndHydrationClient,
  fetchAndHydrationTextAtom,
} from './FetchAndHydrationClient';

export const FetchAndHydration = async () => {
  const { text } = await fetch('http://localhost:3000/get-text', {
    cache: 'no-store',
  }).then((res) => res.json() as Promise<{ text: string }>);

  return (
    <HydrationBoundary hydrateAtoms={[[fetchAndHydrationTextAtom, text]]}>
      <FetchAndHydrationClient />
    </HydrationBoundary>
  );
};
