'use client';

import { createStore, Provider } from 'jotai';
import React, { ReactNode, useEffect, useState } from 'react';

export function SuspenseBoundary({ children }: { children?: ReactNode }) {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const firstRenderStore = createStore();

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
    }
  }, [isFirstRender]);
  if (isFirstRender) {
    return <Provider store={firstRenderStore}>{children}</Provider>;
  }
  return <>{children}</>;
}
