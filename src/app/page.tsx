import React, { Suspense } from 'react';
import { RenderingBoundary } from '@/jotai-ssr/RenderingBoundary';
import { Counter } from '@/components/Counter';
import { HydrationBoundary } from '@/jotai-ssr/HydrationBoundary';
import { HydrationText, textAtom } from '@/components/HydrationText';
import { FetchAndHydration } from '@/components/FetchAndHydration';
import { SuspenseBoundary } from '@/jotai-ssr/SuspenseBoundary';
import Link from 'next/link';

export default function Home() {
  return (
    <RenderingBoundary>
      <div className="border-2 border-blue-600 rounded m-2 p-2">
        <h1 className="text-xl font-bold text-center text-blue-600">
          page.tsx
        </h1>
        <Link href="/sync-layout-store">
          <p
            className="text-blue-600 underline cursor-pointer"
            style={{ textAlign: 'center' }}
          >
            Goto <code>/sync-layout/store</code>
          </p>
        </Link>
        <Counter />
        <HydrationText />
        <HydrationBoundary hydrateAtoms={[[textAtom, 'Hydration!']]}>
          <div className="border-2 border-green-600 rounded m-2 p-2">
            <h1 className="text-xl font-bold text-center text-green-600">
              Hydration Boundary
            </h1>
            <HydrationText />
          </div>
        </HydrationBoundary>
        <HydrationBoundary hydrateAtoms={[[textAtom, 'Another Hydration!']]}>
          <div className="border-2 border-green-600 rounded m-2 p-2">
            <h1 className="text-xl font-bold text-center text-green-600">
              Hydration Boundary
            </h1>
            <HydrationText />
            <HydrationBoundary hydrateAtoms={[[textAtom, 'Nested Hydration!']]}>
              <div className="border-2 border-green-600 rounded m-2 p-2">
                <h1 className="text-xl font-bold text-center text-green-600">
                  Hydration Boundary
                </h1>
                <HydrationText />
                <Counter />
              </div>
            </HydrationBoundary>
            <HydrationText />
          </div>
        </HydrationBoundary>
        <div className="border-2 border-purple-600 rounded m-2 p-2">
          <h1 className="text-xl font-bold text-center text-purple-600">
            Fetch and Hydrate (Suspense)
          </h1>
          <Suspense fallback={<div>Loading...</div>}>
            <SuspenseBoundary>
              <FetchAndHydration />
              <Counter />
            </SuspenseBoundary>
          </Suspense>
        </div>
      </div>
    </RenderingBoundary>
  );
}
