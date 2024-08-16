'use client';

import { useRouter } from 'next/navigation';

import { IMAGES } from '@assets/index';
import { ROUTES } from '@constants/routes';

import { Content, Span, StyledButton, StyledImage } from './styles';

export function PurchaseMade() {
  const router = useRouter();

  const handleNavigateHome = () => {
    router.replace(ROUTES.home);
  };

  return (
    <Content>
      <Span>Compra realizada com sucesso!</Span>
      <StyledImage src={IMAGES.back} alt="back" priority />
      <StyledButton onClick={handleNavigateHome}>VOLTAR</StyledButton>
    </Content>
  );
}
