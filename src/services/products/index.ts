import axios from './axios';

export interface IProductData {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
}

export const getAllProducts = async () => {
  try {
    const { data }: { data: IProductData[] } = await axios.get('/');
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
