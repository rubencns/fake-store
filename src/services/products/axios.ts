import axios from 'axios';

const baseURL: string = 'https://fakestoreapi.com/products';

export default axios.create({
  baseURL,
  params: {
    limit: 10,
  },
});
