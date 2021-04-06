import axios from './axios';

export const getClientSecret = async (amount: number) => {
  try {
    return await axios.post('/payment-intent', { amount });
  } catch (err) {
    console.error(err);
  }
};
