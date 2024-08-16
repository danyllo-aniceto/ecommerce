import { ReactNode } from 'react';

import { CartProviderApp } from '@providers/cart';

export default function FlowOrderLayout({ children }: { children: ReactNode }) {
  return <CartProviderApp>{children}</CartProviderApp>;
}
