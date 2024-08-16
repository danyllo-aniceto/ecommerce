'use client';

import styled, { css } from 'styled-components';

export const MovieCardWrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.breakpoints.webContent};
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-inline: ${theme.spacing['2x']};
    gap: ${theme.spacing['3x']};
    @media (max-width: ${theme.breakpoints.webContent}) {
      grid-template-columns: 1fr 1fr;
      width: auto;
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `}
`;
