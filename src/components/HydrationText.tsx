'use client';

import React from 'react';
import { atom, useAtom } from 'jotai';

export const HydrationText = () => {
  const [text, setText] = useAtom(textAtom);

  return (
    <div className="flex justify-center py-6">
      <div
        className="bg-white shadow-lg rounded-lg p-6 border border-gray-300"
        style={{ width: '400px' }}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </div>
  );
};

export const textAtom = atom('Not hydrated yet');
