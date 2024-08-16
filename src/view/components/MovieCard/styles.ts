'use client';

import Image from 'next/image';

import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) =>
    css`
      width: 338.67px;
      height: 324px;
      border-radius: 4px;
      padding: ${theme.spacing['2x']};
      gap: ${theme.spacing['2x']};
      background-color: ${theme.colors.white};

      @media (max-width: ${theme.breakpoints.mobile}) {
        width: 328px;
      }
    `}
`;

export const CardContainer = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing['1x']};
      align-items: center;
      justify-content: center;
    `}
`;

export const CardContent = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing['1x']};
      justify-content: center;
      align-items: center;
    `}
`;

export const MovieImage = styled(Image)`
  width: 147px;
  height: 188px;
  object-fit: cover;
`;

export const MovieName = styled.span`
  ${({ theme }) =>
    css`
      font-weight: 700;
      font-size: 12px;
      align-self: center;
      color: ${theme.colors.black};
    `}
`;

export const MoviePrice = styled.span`
  ${({ theme }) =>
    css`
      font-weight: 700;
      font-size: 16px;
      align-self: center;
      color: ${theme.colors.darkGray};
    `}
`;
