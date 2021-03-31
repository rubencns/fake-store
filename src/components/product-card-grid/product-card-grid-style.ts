import styled from 'styled-components';

const ProductCardGridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
`;

export default ProductCardGridStyle;
