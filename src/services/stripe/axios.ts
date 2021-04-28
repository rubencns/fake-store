import axios from 'axios';

const BASE_URL: string = 'http://localhost:4000/api/stripe';

export default axios.create({
  baseURL: BASE_URL,
});
