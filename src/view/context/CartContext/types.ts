import { ReactNode } from 'react';

import { Product } from '@model/product-model';

export type Orders = Array<{
  order: { amount: number; product: Product };
}>;

export interface ICartContextData {
  addMovieToCart: (product: Product) => void;
  deleteMovieToCart: (product: Product) => void;
  incrementMovieToCart: (product: Product) => void;
  decrementMovieToCart: (product: Product) => void;
  clearCart: () => void;
  orders: Orders;
  quantityInCart: number;
  total: number;
}

export interface ICartProviderProps {
  children: ReactNode;
}
