import { ButtonHTMLAttributes } from 'react';

import { DefaultTheme } from 'styled-components';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  quantityItems?: number;
  variant?: 'primary' | 'secondary';
}

export interface IStyledButtonProps {
  $variant: 'primary' | 'secondary';
  $isActive: boolean;
}

export interface IGetBgColorProps {
  variant: 'primary' | 'secondary';
  theme: DefaultTheme;
  isActive: boolean;
}
