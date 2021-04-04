import styled from 'styled-components';

const CartStyle = styled.div`
  .cart-title {
    display: flex;
    align-items: center;
    margin-bottom: 60px;

    h1 {
      font-size: 20px;
      line-height: 34px;
    }

    .cart-button {
      margin-left: 16px;
      padding: 10px 16px;
      background: maroon;
      color: #fff;
      border-radius: 5px;
      border: none;
      font-size: 16px;
      display: flex;
      align-items: center;
      cursor: pointer;

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
