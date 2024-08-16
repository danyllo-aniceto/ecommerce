import { Product } from '@model/product-model';

import { Orders } from './types';

export const isAlreadyExists = (orders: Orders, product: Product): boolean => {
  const products = orders.map(item => item.order.product);

  return products.some(item => item.id === product.id);
};
