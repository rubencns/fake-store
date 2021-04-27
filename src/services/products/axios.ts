import axios from 'axios';

const BASE_URL: string = 'https://fakestoreapi.com/products';

export default axios.create({
  baseURL: BASE_URL,
});
