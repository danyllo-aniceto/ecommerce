'use client';

import styled, { css } from 'styled-components';

export const LabelContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  ${({ theme }) =>
    css`
      font-weight: 600;
      font-size: 14px;
      color: ${theme.colors.white};
      @media (max-width: ${theme.breakpoints.mobile}) {
        display: none;
      }
    `}
`;

export const Item = styled.span`
  ${({ theme }) =>
    css`
      font-weight: 600;
      font-size: 12px;
      color: ${theme.colors.lightGray};
      align-self: flex-end;
    `}
`;
