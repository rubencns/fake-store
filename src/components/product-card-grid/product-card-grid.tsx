import { useHistory } from 'react-router';
import { IProductData } from '../../services/products';
import ProductCard from '../product-card/product-card';
import ProductCardGridStyle from './product-card-grid-style';

interface IProductCardGrid {
  products: IProductData[];
}

const ProductCardGrid: React.FC<IProductCardGrid> = ({ products }) => {
  const history = useHistory();

  return (
    <ProductCardGridStyle>
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            goToProductPage={() => history.push(`/products/${product.id}`)}
          />
        ))}
    </ProductCardGridStyle>
  );
};

export default ProductCardGrid;
