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
      height: 24px;
      width: 24px;
      padding: 4px;
      background: #fff;
      border-radius: 5px;
    }

    .product-not-save:hover {
      color: maroon;
    }

    .product-save {
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
    }

    &-cta {
      width: 90px;
      min-width: 90px;
      padding: 8px 16px;
      border-radius: 5px;
      border: 1px solid transparent;
      background: maroon;
      color: #fff;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: maroon;
        background: #fff;
        border: 1px solid maroon;
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
