'use client';

import Image from 'next/image';

import styled, { css } from 'styled-components';

import { IGetBgColorProps, IStyledButtonProps } from './types';

const getBgColor = ({ isActive, theme, variant }: IGetBgColorProps) => {
  if (variant === 'primary') return theme.colors.blue;

  if (isActive) return theme.colors.green;

  return theme.colors.blue;
};

const getBgColorHover = ({ isActive, theme, variant }: IGetBgColorProps) => {
  if (variant === 'primary') return theme.colors.darkBlue;

  if (isActive) return '';

  return theme.colors.darkBlue;
};

export const StyledButton = styled.button<IStyledButtonProps>`
  ${({ theme, $isActive, $variant }) => css`
    width: 306px;
    height: 40px;
    border: none;
    border-radius: 4px;
    background-color: ${getBgColor({ isActive: $isActive, theme, variant: $variant })};
    color: ${theme.colors.white};
    font-weight: 700;
    padding: ${theme.spacing['1x']};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing['1.5x']};
    transition: background-color 300ms ease-out;

    &:hover {
      background-color: ${getBgColorHover({ isActive: $isActive, theme, variant: $variant })};
    }

    &:disabled {
      background-color: ${theme.colors.veryLightGray};
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      width: 296px;
    }
  `}
`;

export const ButtonContent = styled.div<{ $variant: 'primary' | 'secondary' }>`
  display: flex;
  align-items: center;

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      display: flex;
      gap: 4px;
    `}
`;

export const Icon = styled(Image)`
  ${({ theme }) =>
    css`
      width: 13.6px;
      height: 13.6px;
      color: ${theme.colors.white};
    `}
`;

export const Number = styled.span`
  font-weight: 400;
  font-size: 12px;
`;
