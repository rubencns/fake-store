import styled from 'styled-components';

const ProductCardGridStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .product-card-grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 40px;
    margin-bottom: 40px;
    width: 100%;
  }

  .product-card-grid-bottom {
    button {
      cursor: pointer;
    }
  }

  .empty-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #eee;
    padding: 60px 30px;
    border-radius: 5px;
    max-width: 700px;
    width: 100%;

    &-icon {
      min-height: 64px;
      min-width: 64px;
      height: 64px;
      width: 64px;
      color: #555;
      margin-bottom: 30px;
    }

    &-message {
      font-size: 22px;
    }
  }
`;

export default ProductCardGridStyle;
