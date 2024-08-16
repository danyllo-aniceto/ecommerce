'use client';

import { ReactNode } from 'react';

import { BaseLayout } from '@components/BaseLayout';
import { CartProvider } from '@context/CartContext';

export function CartProviderApp({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <BaseLayout>{children}</BaseLayout>
    </CartProvider>
  );
}
