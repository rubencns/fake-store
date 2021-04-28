import styled from 'styled-components';

const PaymentStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;

  .payment-products {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &-heading {
      font-size: 32px;
      font-weight: 600;
      margin-bottom: 24px;
    }

    &-item {
      border: 1px solid black;
      border-radius: 5px;
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      &-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &__image {
        display: flex;
        align-items: center;
        margin-right: 24px;
        max-height: 30px;
        max-width: 30px;

        img {
          width: 100%;
        }
      }

      &__title {
        margin-right: 24px;
        max-width: 400px;
        min-width: 200px;
        width: 100%;

        p {
          line-height: 24px;
          /* text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden; */
        }
      }

      &__price {
        margin-right: 24px;
        font-size: 18px;
      }

      &__remove {
        display: flex;

        &__icon {
          min-width: 24px;
          min-height: 24px;
          max-width: 24px;
          max-height: 24px;
          cursor: pointer;

          &:hover {
            color: maroon;
          }
        }
      }
    }
  }

  .payment-form {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 530px) {
    .payment-products-item {
      flex-direction: column;
      align-items: flex-start;

      &-wrapper {
        &:first-child {
          margin-bottom: 12px;
        }
        &:last-child {
          width: 100%;
          justify-content: space-between;
        }
      }
    }
  }
`;

export default PaymentStyle;
