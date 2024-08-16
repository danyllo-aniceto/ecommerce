'use client';

import { Button } from '@components/Button';
import { useCartContext } from '@hooks/useCartContext';
import { formatCurrencyBR } from '@utils/formatCurrencyBR';

import { Card, CardContainer, CardContent, MovieImage, MovieName, MoviePrice } from './styles';
import { IMovieCardProps } from './types';

export function MovieCard({ movie }: IMovieCardProps) {
  const { addMovieToCart, orders } = useCartContext();

  const order = orders.find(item => item.order.product.id === movie.id);

  const handleAddMovieToCart = () => {
    addMovieToCart(movie);
  };

  return (
    <Card>
      <CardContainer>
        <CardContent>
          <MovieImage
            width={147}
            height={188}
            src={movie?.image ?? ''}
            alt={`Filme ${movie?.title ?? ''}`}
            priority
          />
          <MovieName>{movie?.title ?? '-'}</MovieName>
          <MoviePrice>{formatCurrencyBR(movie?.price)}</MoviePrice>
        </CardContent>
        <Button
          variant="secondary"
          quantityItems={order?.order?.amount ?? 0}
          onClick={handleAddMovieToCart}
        >
          ADICIONAR AO CARRINHO
        </Button>
      </CardContainer>
    </Card>
  );
}
