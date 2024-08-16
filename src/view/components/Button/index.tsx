'use client';

import { IMAGES } from '@assets/index';

import { ButtonContent, Icon, StyledButton, Number } from './styles';
import { IButtonProps } from './types';

export function Button({
  children,
  variant = 'primary',
  quantityItems = 0,
  ...restButton
}: IButtonProps) {
  const isActive = quantityItems > 0;

  return (
    <StyledButton {...restButton} $isActive={isActive} $variant={variant}>
      {variant === 'secondary' && (
        <ButtonContent $variant={variant}>
          <Icon src={IMAGES.cart} alt="cart" priority />
          <Number>{quantityItems}</Number>
        </ButtonContent>
      )}
      {children}
    </StyledButton>
  );
}
