'use client';

import React from 'react';
import { atom, useAtomValue } from 'jotai';

export const fetchAndHydrationTextAtom = atom('Not fetched yet');

export const FetchAndHydrationClient = () => {
  const text = useAtomValue(fetchAndHydrationTextAtom);

  return (
    <div className="flex justify-center py-6">
      <div
        className="bg-white shadow-lg rounded-lg p-6 border border-gray-300"
        style={{ width: '400px' }}
      >
        <h1 className="text-xl font-bold text-center">Fetched Text:</h1>
        <p className="text-center">{text}</p>
      </div>
    </div>
  );
};
