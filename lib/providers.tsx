'use client';

/* Core */
import React from 'react';
import { Provider } from 'react-redux';

/* Instruments */
import { reduxStore } from '@/lib/redux';

export default function Providers({ children }: React.PropsWithChildren) {
  return <Provider store={reduxStore}>{children}</Provider>;
}
