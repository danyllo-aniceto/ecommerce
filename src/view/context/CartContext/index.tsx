'use client';

import { createContext, useCallback, useMemo, useState } from 'react';

import { Product } from '@model/product-model';

import { ICartContextData, ICartProviderProps, Orders } from './types';
import { isAlreadyExists } from './utils';

export const CartContext = createContext<ICartContextData>({} as ICartContextData);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [orders, setOrders] = useState<Orders>([]);

  const quantityInCart = useMemo(() => {
    const amounts = orders.map(item => item.order.amount);

    return amounts.reduce((accumulator, current) => accumulator + current, 0);
  }, [orders]);

  const total = useMemo(() => {
    let sum = 0;

    for (const item of orders) {
      if (item.order.product?.price) {
        sum = sum + item.order.amount * item.order.product.price;
      }
    }
    return sum;
  }, [orders]);

  const addMovieToCart = useCallback(
    (product: Product) => {
      setOrders(prev => {
        const alreadyExists = isAlreadyExists(orders, product);

        if (alreadyExists) {
          return prev.map(item => ({
            order: {
              ...item.order,
              amount:
                item.order.product.id === product.id ? item.order.amount + 1 : item.order.amount,
            },
          }));
        }

        return [...prev, { order: { amount: 1, product } }];
      });
    },
    [orders],
  );

  const deleteMovieToCart = useCallback((product: Product) => {
    setOrders(prev => {
      const newArray = prev.filter(item => item.order.product.id !== product.id);

      return newArray;
    });
  }, []);

  const incrementMovieToCart = useCallback((product: Product) => {
    setOrders(prev => {
      return prev.map(item => ({
        order: {
          ...item.order,
          amount: item.order.product.id === product.id ? item.order.amount + 1 : item.order.amount,
        },
      }));
    });
  }, []);

  const decrementMovieToCart = useCallback((product: Product) => {
    setOrders(prev => {
      return prev.map(item => ({
        order: {
          ...item.order,
          amount:
            item.order.product.id === product.id && item.order.amount > 1
              ? item.order.amount - 1
              : item.order.amount,
        },
      }));
    });
  }, []);

  const clearCart = useCallback(() => {
    setOrders([]);
  }, []);

  return (
    <CartContext.Provider
      value={{
        addMovieToCart,
        decrementMovieToCart,
        deleteMovieToCart,
        incrementMovieToCart,
        clearCart,
        orders,
        quantityInCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
