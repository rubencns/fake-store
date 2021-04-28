import { limitOfProductRetrieved } from '../../constants/product-constants';
import axios from './axios';

export interface IProductData {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
}

export const getAllProducts = async (
  limit: number = limitOfProductRetrieved
) => {
  try {
    const { data }: { data: IProductData[] } = await axios.get('/', {
      params: {
        limit,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getSingleProduct = async (id: string) => {
  try {
    const { data }: { data: IProductData } = await axios.get(`/${id}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getAllCategories = async () => {
  try {
    const { data }: { data: string[] } = await axios.get('/categories');
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getProductsByCategory = async (category: string) => {
  try {
    const { data }: { data: IProductData[] } = await axios.get(
      `/category/${category}`
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
