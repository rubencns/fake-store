import React from 'react';
import { Link } from 'react-router-dom';
import ProductCardGrid from '../../components/product-card-grid/product-card-grid';
import { useProductContext } from '../../context/product-context';
import { ReactComponent as ChevronLeftSolidIcon } from '../../assets/icons/files/chevron-left-solid.svg';
import CartStyle from './cart-style';

const Cart: React.FC = () => {
  const { state } = useProductContext();

  return (
    <CartStyle>
      <div className="cart-title">
        {state.cart.length !== 0 ? (
          <>
            <h1>You added these products to your cart. Ready to buy them?</h1>
            <button className="cart-button">
              Go to payment{' '}
              <ChevronLeftSolidIcon className="cart-button-icon" />
            </button>
          </>
        ) : (
          <h1>
            Your cart is empty. <Link to="/">Go to products.</Link>
          </h1>
        )}
      </div>
      <ProductCardGrid products={state.cart} />
    </CartStyle>
  );
};
export default Cart;
