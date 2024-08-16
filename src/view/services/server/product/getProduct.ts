import { IGetProduct } from '@model/product-api/get-product';

import { API_URL } from '@constants/apiUrl';

export async function getProduct() {
  const response = await fetch(`${API_URL}/movies`, { cache: 'no-store' });

  const { products }: IGetProduct = await response.json();

  return products;
}
