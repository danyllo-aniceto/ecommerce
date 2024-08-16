'use client';

import Image from 'next/image';

import { IMAGES } from '@assets/index';
import { Title } from '@components/CartContent/styles';
import { useWindowSize } from '@hooks/useWindowSize';
import { formatCurrencyBR } from '@utils/formatCurrencyBR';

import {
  BorderQuantityMovie,
  Button,
  ButtonsWrapper,
  DeleteButton,
  Features,
  FeaturesText,
  LineOne,
  LineTwo,
  MovieContent,
  MoviePrice,
  MovieTitle,
  PriceAndDelete,
  PriceSubtotal,
  QuantityMovie,
  TitleAndPriceSubtotal,
} from './styles';
import { MovieProps } from './types';

export function Movie({
  amount,
  product,
  decrementMovieToCart,
  deleteMovieToCart,
  incrementMovieToCart,
}: MovieProps) {
  const { isMobile } = useWindowSize();

  return (
    <MovieContent>
      {isMobile ? (
        <>
          <Image
            width={64}
            height={82}
            src={product?.image ?? ''}
            alt={`Filme ${product?.title ?? ''}`}
            priority={false}
          />
          <Features>
            <LineOne>
              <MovieTitle>{product?.title ?? '-'}</MovieTitle>
              <PriceAndDelete>
                <MoviePrice>{formatCurrencyBR(product?.price)}</MoviePrice>
                <DeleteButton onClick={() => deleteMovieToCart(product)}>
                  <Image width={18} height={18} src={IMAGES.trash} alt="delete" priority />
                </DeleteButton>
              </PriceAndDelete>
            </LineOne>
            <LineTwo>
              <ButtonsWrapper>
                <Button onClick={() => decrementMovieToCart(product)}>
                  <Image width={18} height={18} src={IMAGES.remove} alt="decremento" priority />
                </Button>
                <BorderQuantityMovie>
                  <QuantityMovie>{amount}</QuantityMovie>
                </BorderQuantityMovie>
                <Button onClick={() => incrementMovieToCart(product)}>
                  <Image width={18} height={18} src={IMAGES.add} alt="incremento" priority />
                </Button>
              </ButtonsWrapper>

              <TitleAndPriceSubtotal>
                <Title>SUBTOTAL</Title>
                <PriceSubtotal>
                  {product?.price ? formatCurrencyBR(amount * product.price) : '-'}
                </PriceSubtotal>
              </TitleAndPriceSubtotal>
            </LineTwo>
          </Features>
        </>
      ) : (
        <>
          <Features>
            <Image
              width={91}
              height={114}
              src={product?.image ?? ''}
              alt={`Filme ${product?.title ?? ''}`}
              priority={false}
            />
            <FeaturesText>
              <MovieTitle>{product?.title ?? '-'}</MovieTitle>
              <MoviePrice>{formatCurrencyBR(product?.price)}</MoviePrice>
            </FeaturesText>
          </Features>
          <ButtonsWrapper>
            <Button onClick={() => decrementMovieToCart(product)}>
              <Image width={18} height={18} src={IMAGES.remove} alt="decremento" priority />
            </Button>
            <BorderQuantityMovie>
              <QuantityMovie>{amount}</QuantityMovie>
            </BorderQuantityMovie>
            <Button onClick={() => incrementMovieToCart(product)}>
              <Image width={18} height={18} src={IMAGES.add} alt="incremento" priority />
            </Button>
          </ButtonsWrapper>
          <PriceSubtotal>
            {product?.price ? formatCurrencyBR(amount * product.price) : '-'}
            <DeleteButton onClick={() => deleteMovieToCart(product)}>
              <Image width={18} height={18} src={IMAGES.trash} alt="delete" priority />
            </DeleteButton>
          </PriceSubtotal>
        </>
      )}
    </MovieContent>
  );
}
