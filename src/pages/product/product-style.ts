import styled from 'styled-components';

const ProductStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0px;

  .product-go-back {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    font-size: 16px;
    background: none;
    border: 1px solid maroon;
    color: maroon;
    border-radius: 5px;
    padding: 8px 16px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: maroon;
      color: #fff;

      .product-go-back-icon {
        color: #fff;
        transition: all 0.2s ease-in-out;
      }
    }

    &-icon {
      min-height: 20px;
      min-width: 20px;
      max-height: 20px;
      max-width: 20px;
      margin-right: 8px;
    }
  }

  .product-container {
    margin: auto;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .product-image {
      display: flex;
      justify-content: center;

      img {
        max-width: 300px;
        width: 100%;
      }
    }

    .product-info {
      padding-right: 60px;

      &-title {
        font-weight: 700;
        font-size: 32px;
        margin-bottom: 20px;
      }

      &-category {
        font-size: 25px;
        margin-bottom: 20px;
      }

      &-description {
        font-size: 16px;
        line-height: 26px;
        margin-bottom: 30px;
      }

      &-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-bottom-left {
        display: flex;
        justify-content: flex-start;
      }

      &-fav {
        background: #fff;
        color: maroon;
        border: 1px solid maroon;
        border-radius: 5px;
        cursor: pointer;
        margin-right: 8px;
        display: grid;
        place-items: center;

        &-icon {
          min-height: 28px;
          min-width: 28px;
          max-height: 28px;
          max-width: 28px;
          padding: 4px;
          transition: all 0.2s ease-in-out;
        }

        &:hover {
          background: maroon;
          color: #fff;
        }

        &.product-saved {
          background: maroon;
          color: #fff;
        }
      }

      &-cart {
        background: none;
        border: 1px solid maroon;
        border-radius: 5px;
        cursor: pointer;
        display: grid;
        place-items: center;
        transition: all 0.2s ease-in-out;

        &-icon {
          min-height: 28px;
          min-width: 28px;
          max-height: 28px;
          max-width: 28px;
          padding: 4px;
          color: maroon;
          transition: all 0.2s ease-in-out;
        }

        &.product-added {
          border-color: maroon;
          background: maroon;

          .product-info-cart-icon {
            color: #fff;
          }
        }

        &:hover {
          border-color: maroon;
          background: maroon;

          .product-info-cart-icon {
            color: #fff;
          }
        }
      }

      &-price {
        align-self: flex-end;
        font-size: 32px;
        font-weight: 600;
      }
    }
  }

  @media (max-width: 1020px) {
    .product-container {
      grid-template-columns: 1fr;

      .product-info {
        padding-right: 0;
        max-width: 600px;
      }
    }

    .product-image {
      margin-bottom: 80px;
    }
  }
`;

export default ProductStyle;
