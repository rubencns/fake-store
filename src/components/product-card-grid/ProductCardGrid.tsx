import { IProductData } from '../../services/products';
import ProductCard from '../product-card/ProductCard';
import ProductCardGridStyle from './product-card-grid-style';

interface IProductCardGrid {
  products: IProductData[];
}

const ProductCardGrid: React.FC<IProductCardGrid> = ({ products }) => {
  return (
    <ProductCardGridStyle>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </ProductCardGridStyle>
  );
};

export default ProductCardGrid;
