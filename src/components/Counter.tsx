'use client';

import React from 'react';
import { atom, useAtom } from 'jotai';

const counterAtom = atom(0);

export const Counter = () => {
  const [count, setCount] = useAtom(counterAtom);

  const handleIncrement = () => setCount((c) => c + 1);

  return (
    <div className="flex justify-center py-6">
      <div
        className="bg-white shadow-lg rounded-lg p-6 border border-gray-300"
        style={{ width: '400px' }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">CounterAtom: {count}</h1>
          <button
            onClick={handleIncrement}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};
