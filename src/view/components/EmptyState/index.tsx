'use client';

import { useRouter } from 'next/navigation';

import { IMAGES } from '@assets/index';
import { useWindowSize } from '@hooks/useWindowSize';

import { Content, Span, StyledButton, StyledImage } from './styles';
import { IEmptyStateProps } from './types';

export function EmptyState({ onReload }: IEmptyStateProps) {
  const router = useRouter();
  const { isMobile } = useWindowSize();

  const handleRefresh = () => {
    router.refresh();
  };

  return (
    <Content>
      <Span>Parece que não há nada por aqui :(</Span>
      {isMobile ? (
        <StyledImage src={IMAGES.emptyMobile} alt="back" priority />
      ) : (
        <StyledImage src={IMAGES.empty} alt="back" priority />
      )}

      <StyledButton onClick={onReload ?? handleRefresh}>Recarregar página</StyledButton>
    </Content>
  );
}
