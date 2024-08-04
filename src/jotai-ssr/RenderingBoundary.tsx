'use client';

import { createStore, Provider } from 'jotai';
import React, { ReactNode, useEffect, useState } from 'react';

export function RenderingBoundary({
  children,
  performanceImpactingUseUpperStore,
}: {
  children?: ReactNode;
  performanceImpactingUseUpperStore?: boolean;
}) {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const firstRenderStore = createStore();

  useEffect(() => {
    if (!performanceImpactingUseUpperStore) {
      return;
    }
    if (isFirstRender) {
      setIsFirstRender(false);
    }
  }, [isFirstRender, performanceImpactingUseUpperStore]);

  if (!performanceImpactingUseUpperStore) {
    return <Provider>{children}</Provider>;
  }

  if (isFirstRender) {
    return <Provider store={firstRenderStore}>{children}</Provider>;
  }
  return <>{children}</>;
}
