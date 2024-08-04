import { Counter } from '@/components/Counter';
import { FetchAndHydration } from '@/components/FetchAndHydration';
import { RenderingBoundary } from '@/jotai-ssr/RenderingBoundary';
import { SuspenseBoundary } from '@/jotai-ssr/SuspenseBoundary';
import Link from 'next/link';
import React, { Suspense } from 'react';

export default function Page() {
  return (
    <RenderingBoundary performanceImpactingUseUpperStore>
      <div className="border-2 border-blue-600 rounded m-2 p-2">
        <h1 className="text-xl font-bold text-center text-blue-600">
          page.tsx
        </h1>
        <Link href="/">
          <p
            className="text-blue-600 underline cursor-pointer"
            style={{ textAlign: 'center' }}
          >
            Goto <code>/</code>
          </p>
        </Link>
        <Counter />
        <Suspense fallback={<div>Loading...</div>}>
          <SuspenseBoundary>
            <FetchAndHydration />
            <Counter />
          </SuspenseBoundary>
        </Suspense>
      </div>
    </RenderingBoundary>
  );
}
