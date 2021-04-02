import styled from 'styled-components';

const oneLine: string = `text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;`;

const ProductCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px #ccc;
  border-radius: 10px;

  .product-image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    padding: 16px;
    overflow: hidden;
    position: relative;

    img {
      height: 100%;
      object-fit: cover;
    }

    .product-fav-icon {
      position: absolute;
      top: 12px;
      right: 12px;
      cursor: pointer;
      min-height: 24px;
      min-width: 24px;
      max-height: 24px;
      max-width: 24px;
      padding: 4px;
      background: #fff;
      border-radius: 5px;
    }

    .product-not-saved:hover {
      color: maroon;
    }
    .product-saved {
      color: maroon;
    }
  }

  .product-info {
    padding: 20px;
    display: flex;
    flex-direction: column;

    h2,
    span {
      ${oneLine}
    }

    &-title {
      font-weight: 700;
      font-size: 18px;
      margin-bottom: 8px;
    }

    &-category {
      margin-bottom: 12px;
    }

    &-description {
      font-size: 14px;
      line-height: 20px;
      height: 80px;
      margin-bottom: 15px;

      p {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }

    &-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-bottom-left {
      display: flex;
    }

    &-see-more {
      width: 90px;
      min-width: 90px;
      padding: 8px 16px;
      border-radius: 5px;
      border: 1px solid maroon;
      color: maroon;
      background: none;
      cursor: pointer;
      margin-right: 8px;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: #fff;
        background: maroon;
        border: 1px solid maroon;
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
        min-height: 24px;
        min-width: 24px;
        max-height: 24px;
        max-width: 24px;
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
      font-size: 24px;
      font-weight: 600;
    }
  }
`;

export default ProductCardStyle;
