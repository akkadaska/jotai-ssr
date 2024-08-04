'use client';

import { Provider } from 'jotai';
import React, { ReactNode } from 'react';

export function RenderingBoundary({ children }: { children?: ReactNode }) {
  return <Provider>{children}</Provider>;
}
