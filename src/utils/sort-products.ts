import { IProductData } from '../services/products';

export type order = 'asc' | 'desc';

const sortProductsByAscPrice = (products: IProductData[]) =>
  products.sort((a, b) => a.price - b.price);

const sortProductsByDescPrice = (products: IProductData[]) =>
  products.sort((a, b) => b.price - a.price);

const sortFunctions = {
  asc: sortProductsByAscPrice,
  desc: sortProductsByDescPrice,
};

export const sortProductsByPrice = (products: IProductData[], order: order) => {
  return sortFunctions[order](products);
};
