'use client';

import { useCartContext } from '@hooks/useCartContext';

import { Finish } from './components/Finish';
import { Movie } from './components/Movie';
import { Cart, Separator, Title, Titles } from './styles';

export function CartContent() {
  const { orders, total, incrementMovieToCart, decrementMovieToCart, deleteMovieToCart } =
    useCartContext();

  return (
    <Cart>
      <Titles>
        <Title>PRODUTO</Title>
        <Title>QTD</Title>
        <Title>SUBTOTAL</Title>
      </Titles>

      {orders.map(({ order }) => (
        <Movie
          key={order.product.id}
          product={order.product}
          amount={order.amount}
          decrementMovieToCart={decrementMovieToCart}
          deleteMovieToCart={deleteMovieToCart}
          incrementMovieToCart={incrementMovieToCart}
        />
      ))}

      <Separator />

      <Finish total={total} />
    </Cart>
  );
}
