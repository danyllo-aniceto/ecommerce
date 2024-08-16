'use client';

import { EmptyState } from '@components/EmptyState';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Error({ error, reset }: ErrorProps) {
  return <EmptyState onReload={reset} />;
}
