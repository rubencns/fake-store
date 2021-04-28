import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_API_KEY } from '../../constants/stripe-contants';
import PaymentStyle from './payment-style';
import CheckoutForm from '../../components/checkout-form/checkout-form';
import {
  removeFromCart,
  useProductContext,
} from '../../context/product-context';
import { ReactComponent as MinusSquareRegularIcon } from '../../assets/icons/files/minus-square-regular.svg';
import { useHistory } from 'react-router';

const stripePromise = loadStripe(STRIPE_API_KEY);

const Payment: React.FC = () => {
  const { state, dispatch } = useProductContext();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const history = useHistory();

  const getTotalPrice = () => {
    const result = state.cart.reduce((a, b) => ({
      ...a,
      price: a.price + b.price,
    }));
    return result.price;
  };

  useEffect(() => {
    if (!state.cart.length) return history.push('/cart');
    const totalAmount: number = getTotalPrice();
    setTotalPrice(totalAmount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, state.cart]);

  return (
    <PaymentStyle>
      <Elements stripe={stripePromise}>
        <div className="payment-products">
          <div className="payment-products-heading">
            <h1>Cart Products:</h1>
          </div>
          {state.cart.map((product) => (
            <div className="payment-products-item">
              <div className="payment-products-item-wrapper">
                <div className="payment-products-item__image">
                  <img src={product.image} alt="product" />
                </div>
                <div className="payment-products-item__title">
                  <p>{product.title}</p>
                </div>
              </div>
              <div className="payment-products-item-wrapper">
                <div className="payment-products-item__price">
                  <span>${product.price}</span>
                </div>
                <div className="payment-products-item__remove">
                  <MinusSquareRegularIcon
                    className="payment-products-item__remove__icon"
                    onClick={() => dispatch(removeFromCart(product.id))}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="payment-form">
          <CheckoutForm totalPrice={totalPrice} />
        </div>
      </Elements>
    </PaymentStyle>
  );
};

export default Payment;
