'use client';

import { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@styles/GlobalStyle';
import { THEME } from '@styles/theme';

export function RootProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={{ ...THEME }}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
