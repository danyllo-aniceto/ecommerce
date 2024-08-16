import { Suspense } from 'react';

import { EmptyState } from '@components/EmptyState';
import { Loading } from '@components/Loading';
import { MovieCard } from '@components/MovieCard';
import { getProduct } from '@services/server/product/getProduct';

import { MovieCardWrapper } from './styles';

export async function Home() {
  const products = await getProduct();

  return (
    <Suspense fallback={<Loading />}>
      {products && products.length > 0 ? (
        <MovieCardWrapper>
          {products.map((item, index) => (
            <MovieCard key={item?.id ?? index} movie={item} />
          ))}
        </MovieCardWrapper>
      ) : (
        <EmptyState />
      )}
    </Suspense>
  );
}
