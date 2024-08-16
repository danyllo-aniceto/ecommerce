'use client';

import styled, { css } from 'styled-components';

import { Button } from '@components/Button';

export const FinishStyled = styled.div`
  ${({ theme }) =>
    css`
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: ${theme.breakpoints.mobile}) {
        gap: ${theme.spacing['2x']};
        flex-direction: column;
      }
    `}
`;

export const ButtonDesktop = styled(Button)`
  ${({ theme }) =>
    css`
      width: 173px;
      height: 34px;
      font-size: 12px;

      @media (max-width: ${theme.breakpoints.mobile}) {
        display: none;
      }
    `}
`;

export const ButtonMobile = styled(Button)`
  ${({ theme }) =>
    css`
      width: 173px;
      height: 34px;
      font-size: 12px;
      width: 100%;

      @media (min-width: ${theme.breakpoints.mobile}) {
        display: none;
      }
    `}
`;

export const Total = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      gap: 5px;
      width: 197.26px;
      height: 21px;
      @media (max-width: ${theme.breakpoints.mobile}) {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    `}
`;

export const TextTotal = styled.span`
  ${({ theme }) =>
    css`
      font-weight: 700;
      font-size: 14px;
      align-self: center;
      color: ${theme.colors.lightGray};
      width: 61.47px;
      height: 12px;
      @media (max-width: ${theme.breakpoints.mobile}) {
        width: 193px;
      }
    `}
`;

export const PriceTotal = styled.span`
  ${({ theme }) =>
    css`
      font-weight: 700;
      font-size: 24px;
      align-self: center;
      color: ${theme.colors.darkGray};
      width: 130.79px;
      height: 21px;

      @media (max-width: ${theme.breakpoints.mobile}) {
        width: 98px;
        height: 33px;
      }
    `}
`;
