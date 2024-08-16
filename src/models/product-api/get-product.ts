import { Product } from '../product-model';

export interface IGetProduct {
  products: Array<Product> | null | undefined;
}
