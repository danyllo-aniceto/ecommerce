'use client';

import Image from 'next/image';

import styled, { css } from 'styled-components';

import { Button } from '@components/Button';

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 1048px;
    width: 100%;
    height: 596px;
    background-color: ${theme.colors.white};
    border-radius: 4px;
    padding: ${theme.spacing['8x']};
    gap: ${theme.spacing['3x']};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: ${theme.breakpoints.mobile}) {
      width: 328px;
    }
  `}
`;

export const Span = styled.span`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: 20px;
    color: ${theme.colors.darkGray};
    @media (max-width: ${theme.breakpoints.mobile}) {
      text-align: center;
    }
  `}
`;

export const StyledImage = styled(Image)`
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.mobile}) {
      width: 178.63px;
      height: 265.36px;
    }
  `}
`;

export const StyledButton = styled(Button)`
  width: 173px;
  height: 40px;
`;
