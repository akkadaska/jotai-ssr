'use client';

import { atom, useStore, WritableAtom } from 'jotai';
import { ScopeProvider } from 'jotai-scope';
import React, { ReactNode, useRef } from 'react';

type AnyWritableAtom = WritableAtom<unknown, never[], unknown>;

type InferAtomTuples<T> = {
  [K in keyof T]: T[K] extends readonly [infer A, ...unknown[]]
    ? A extends WritableAtom<unknown, infer Args, infer _Result>
      ? readonly [A, ...Args]
      : T[K]
    : never;
};

export function HydrationBoundary<
  T extends (readonly [AnyWritableAtom, ...unknown[]])[],
>({
  children,
  hydrateAtoms,
}: {
  children?: ReactNode;
  hydrateAtoms: InferAtomTuples<T>;
}) {
  const depAtoms = hydrateAtoms.map(([atom]) => atom);
  return (
    <ScopeProvider atoms={depAtoms}>
      <Hydration hydrateAtoms={hydrateAtoms}>{children}</Hydration>
    </ScopeProvider>
  );
}

function Hydration<T extends (readonly [AnyWritableAtom, ...unknown[]])[]>({
  children,
  hydrateAtoms,
}: {
  children?: ReactNode;
  hydrateAtoms: InferAtomTuples<T>;
}) {
  const isHydratedRef = useRef(false);
  const store = useStore();

  if (!isHydratedRef.current) {
    store.set(isHydratingPrimitiveAtom, true);
    for (const [atom, ...args] of hydrateAtoms) {
      store.set(atom, ...args);
    }
    store.set(isHydratingPrimitiveAtom, false);
    isHydratedRef.current = true;
  }

  return <>{children}</>;
}

const isHydratingPrimitiveAtom = atom(false);

export const isHydratingAtom = atom((get) => get(isHydratingPrimitiveAtom));
