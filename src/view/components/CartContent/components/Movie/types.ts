import { Product } from '@model/product-model';

export interface MovieProps {
  amount: number;
  product: Product;
  deleteMovieToCart: (product: Product) => void;
  incrementMovieToCart: (product: Product) => void;
  decrementMovieToCart: (product: Product) => void;
}
