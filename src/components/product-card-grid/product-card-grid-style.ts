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
`;

export default ProductCardGridStyle;
