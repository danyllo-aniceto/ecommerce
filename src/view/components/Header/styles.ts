'use client';

import Image from 'next/image';
import Link from 'next/link';

import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  ${({ theme }) =>
    css`
      max-width: ${theme.breakpoints.webContent};
      width: 100%;
      height: 88px;
      background-color: ${theme.colors.darkGray};
      padding: ${theme.spacing['3x']} ${theme.spacing['2x']};
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
`;

export const Title = styled.h1`
  ${({ theme }) =>
    css`
      font-weight: 700;
      font-size: 20px;
      color: ${theme.colors.white};
    `}
`;

export const Cart = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      gap: ${theme.spacing['1x']};
    `}
`;

export const Icon = styled(Image)`
  width: 24px;
  height: 24px;
`;

export const IconContainer = styled.div`
  ${({ theme }) =>
    css`
      padding: ${theme.spacing['1x']};
    `}
`;

export const StyledLink = styled(Link)`
  border: none;
  background: transparent;
`;
