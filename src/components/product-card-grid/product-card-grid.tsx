import { useRef } from 'react';
import { useHistory } from 'react-router';
import { IProductData } from '../../services/products';
import ProductCard from '../product-card/product-card';
import ProductCardGridStyle from './product-card-grid-style';
import { useInView } from 'react-intersection-observer';

interface IProductCardGrid {
  products: IProductData[];
  loadMore: () => void;
}

const ProductCardGrid: React.FC<IProductCardGrid> = ({
  products,
  loadMore,
}) => {
  const history = useHistory();
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  if (entry?.isIntersecting) {
    //loadMore();
  }

  return (
    <ProductCardGridStyle>
      <div className="product-card-grid-container">
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              goToProductPage={() => history.push(`/products/${product.id}`)}
            />
          ))}
      </div>
      <div className="product-card-grid-bottom">
        <div ref={ref} onClick={loadMore}>
          Load more
        </div>
      </div>
    </ProductCardGridStyle>
  );
};

export default ProductCardGrid;
