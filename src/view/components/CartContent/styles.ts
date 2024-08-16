'use client';

import styled, { css } from 'styled-components';

export const Cart = styled.div`
  ${({ theme }) =>
    css`
      width: 1048px;
      border-radius: 4px;
      background-color: ${theme.colors.white};
      padding: ${theme.spacing['3x']};
      display: flex;
      gap: ${theme.spacing['3x']};
      justify-content: center;
      align-items: center;
      flex-direction: column;
      @media (max-width: ${theme.breakpoints.webContent}) {
        width: 800px;
      }
      @media (max-width: ${theme.breakpoints.mobile}) {
        width: 328px;

        padding: ${theme.spacing['2x']};
        gap: 21px;
      }
    `}
`;

export const Titles = styled.div`
  ${({ theme }) =>
    css`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 100%;

      @media (max-width: ${theme.breakpoints.mobile}) {
        display: none;
      }
    `}
`;

export const Title = styled.span`
  ${({ theme }) =>
    css`
      font-weight: 700;
      font-size: 14px;
      color: ${theme.colors.lightGray};
      @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 12px;
      }
    `}
`;

export const Separator = styled.div`
  ${({ theme }) =>
    css`
      width: 100%;
      height: 1px;
      background-color: ${theme.colors.lightGray};
    `}
`;
