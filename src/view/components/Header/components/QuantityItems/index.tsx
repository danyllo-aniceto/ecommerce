'use client';

import { useCartContext } from '@hooks/useCartContext';

import { Item, LabelContent, Span } from './styles';

export function QuantityItems() {
  const { quantityInCart } = useCartContext();

  return (
    <LabelContent>
      <Span>Meu Carrinho</Span>
      <Item>{quantityInCart} itens</Item>
    </LabelContent>
  );
}
