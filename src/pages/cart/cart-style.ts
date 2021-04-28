import styled from 'styled-components';

const CartStyle = styled.div`
  .cart-heading {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 44px;

    .cart-heading-title {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
    }

    h1 {
      font-size: 20px;
      line-height: 34px;
      min-width: 350px;
      margin-right: 16px;
    }

    .cart-heading-button {
      padding: 10px 16px;
      background: maroon;
      color: #fff;
      border-radius: 5px;
      border: none;
      font-size: 16px;
      display: flex;
      align-items: center;
      cursor: pointer;
      white-space: nowrap;
      margin-bottom: 8px;

      &-icon {
        min-height: 18px;
        min-width: 18px;
        height: 18px;
        width: 18px;
        transform: rotate(180deg);
        margin-left: 8px;
      }
    }
  }
`;

export default CartStyle;
