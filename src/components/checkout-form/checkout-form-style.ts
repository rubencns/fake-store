import styled from 'styled-components';

const CheckoutFormStyle = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 18px 24px;
  max-width: 500px;
  width: 100%;

  .checkout-form {
    display: flex;
    flex-direction: column;
  }

  .checkout-form-card {
    margin-bottom: 42px;
  }

  .checkout-form-total-price {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .checkout-form-helper {
    color: #888;
    margin-bottom: 16px;

    &-text {
      margin-bottom: 8px;
    }
  }

  .checkout-form-button {
    width: 100%;
    padding: 12px 16px;
    font-size: 18px;
    color: #fff;
    border: none;
    border-radius: 5px;
    background: maroon;
    cursor: pointer;
  }

  .checkout-form-message {
    &-error {
      font-size: 20px;
      color: red;
      margin-bottom: 12px;
    }

    &-succeed {
      font-size: 20px;
      color: green;
      margin-bottom: 12px;
    }
  }

  .checkout-form-loading {
    margin: 42px;
  }
`;

export default CheckoutFormStyle;
