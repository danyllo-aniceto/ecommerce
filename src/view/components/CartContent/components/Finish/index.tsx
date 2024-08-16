'use client';

import { useRouter } from 'next/navigation';

import { ROUTES } from '@constants/routes';
import { useCartContext } from '@hooks/useCartContext';
import { formatCurrencyBR } from '@utils/formatCurrencyBR';

import { ButtonDesktop, ButtonMobile, FinishStyled, PriceTotal, TextTotal, Total } from './styles';
import { FinishProps } from './types';

export function Finish({ total }: FinishProps) {
  const router = useRouter();
  const { clearCart } = useCartContext();

  const handleNavigateFinish = () => {
    clearCart();
    router.replace(ROUTES.purchaseMade);
  };

  return (
    <FinishStyled>
      <ButtonDesktop disabled={total === 0} onClick={handleNavigateFinish}>
        FINALIZAR PEDIDO
      </ButtonDesktop>
      <Total>
        <TextTotal>TOTAL</TextTotal>
        <PriceTotal>{formatCurrencyBR(total)}</PriceTotal>
      </Total>
      <ButtonMobile disabled={total === 0} onClick={handleNavigateFinish}>
        FINALIZAR PEDIDO
      </ButtonMobile>
    </FinishStyled>
  );
}
