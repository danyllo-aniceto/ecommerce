'use client';

import styled, { css } from 'styled-components';

export const MovieContent = styled.div`
  ${({ theme }) =>
    css`
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      @media (max-width: ${theme.breakpoints.mobile}) {
        width: 296px;
        height: 92px;
        gap: ${theme.spacing['2x']};
      }
    `}
`;

export const Features = styled.div`
  ${({ theme }) =>
    css`
      width: 280px;
      height: 114px;
      display: flex;
      gap: ${theme.spacing['2x']};
      align-items: center;
      @media (max-width: ${theme.breakpoints.mobile}) {
        width: 216px;
        height: 92px;
        display: flex;
        flex-direction: column;
      }
    `}
`;

export const FeaturesText = styled.div`
  ${({ theme }) =>
    css`
      width: 111px;
      height: 49px;
      display: flex;
      gap: ${theme.spacing['1x']};
      flex-direction: column;
    `}
`;

export const MovieTitle = styled.span`
  ${({ theme }) =>
    css`
      width: 111px;
      height: 19px;
      font-weight: 700;
      font-size: 14px;
      color: ${theme.colors.darkGray};
    `}
`;

export const MoviePrice = styled.span`
  ${({ theme }) =>
    css`
      width: 66px;
      height: 22px;
      font-weight: 700;
      font-size: 16px;
      color: ${theme.colors.darkGray};
    `}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 11px;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export const BorderQuantityMovie = styled.div`
  ${({ theme }) =>
    css`
      width: 62px;
      height: 26px;
      padding: ${theme.spacing['2x']};
      border-radius: 4px;
      border: 1px solid ${theme.colors.veryLightGray};
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: ${theme.breakpoints.mobile}) {
        width: 59px;
      }
    `}
`;

export const QuantityMovie = styled.span`
  ${({ theme }) =>
    css`
      font-weight: 400;
      font-size: 14px;
      align-self: center;
      width: 9px;
      height: 19px;
      color: ${theme.colors.darkGray};
    `}
`;

export const PriceSubtotal = styled.span`
  ${({ theme }) =>
    css`
      font-weight: 700;
      font-size: 16px;
      color: ${theme.colors.darkGray};
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
`;

export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const LineOne = styled.div`
  width: 216px;
  height: 38px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
`;

export const LineTwo = styled.div`
  ${({ theme }) =>
    css`
      align-self: flex-start;
      width: 199px;
      height: 38px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: ${theme.spacing['2x']};
    `}
`;

export const PriceAndDelete = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      gap: ${theme.spacing['2x']};
      align-items: center;
    `}
`;

export const TitleAndPriceSubtotal = styled.div`
  display: flex;
  flex-direction: column;
`;
