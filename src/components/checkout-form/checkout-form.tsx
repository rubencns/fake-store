import React, { useEffect, useState } from 'react';
import CheckoutFormStyle from './checkout-form-style';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getClientSecret } from '../../services/stripe';
import Loading from '../loading/loading';
import { resetCart, useProductContext } from '../../context/product-context';

interface ICheckoutForm {
  totalPrice: number;
}

const CheckoutForm: React.FC<ICheckoutForm> = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState<string>('');
  const [processing, setProcessing] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [succeededMessage, setSucceededMessage] = useState<string>('');
  const { dispatch } = useProductContext();

  const defaultPrice = 20;

  const saveClientSecret = async (price: number) => {
    // In Stripe, amount is in the lowest denomination
    const amount: number = price * 100;
    const response = await getClientSecret(amount);
    if (response) setClientSecret(response.data);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrorMessage('');
    setSucceededMessage('');
    setProcessing(true);

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
      },
    });
    setProcessing(false);
    if (payload.error?.message) return setErrorMessage(payload.error.message);
    dispatch(resetCart());
    return setSucceededMessage('Payment accepted.');
  };

  useEffect(() => {
    saveClientSecret(defaultPrice);
  }, []);

  return (
    <CheckoutFormStyle>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="checkout-form-total-price">
          <h2>Total Price: ${totalPrice}</h2>
        </div>
        <CardElement
          className="checkout-form-card"
          options={{
            style: {
              base: {
                fontSize: '18px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />

        {errorMessage && (
          <span className="checkout-form-message-error">{errorMessage}</span>
        )}

        {succeededMessage && (
          <span className="checkout-form-message-succeed">
            {succeededMessage}
          </span>
        )}

        {processing && (
          <div className="checkout-form-loading">
            <Loading text="Processing payment..." />
          </div>
        )}
        <button className="checkout-form-button" disabled={processing}>
          Pay now
        </button>
      </form>
    </CheckoutFormStyle>
  );
};

export default CheckoutForm;
