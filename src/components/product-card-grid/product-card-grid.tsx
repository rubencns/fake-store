import { useRef } from 'react';
import { useHistory } from 'react-router';
import { IProductData } from '../../services/products';
import ProductCard from '../product-card/product-card';
import ProductCardGridStyle from './product-card-grid-style';
import { useInView } from 'react-intersection-observer';
import { ReactComponent as TimesCircleRegularIcon } from '../../assets/icons/files/times-circle-regular.svg';

interface IProductCardGrid {
  products: IProductData[];
  loadMore?: () => void;
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
      {products.length !== 0 ? (
        <div className="product-card-grid-container">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              goToProductPage={() => history.push(`/products/${product.id}`)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-content">
          <TimesCircleRegularIcon className="empty-content-icon" />
          <div className="empty-content-message">
            <p>No products to show.</p>
          </div>
        </div>
      )}
      {/* <div className="product-card-grid-bottom">
        <div ref={ref} onClick={loadMore}>
          Load more
        </div>
      </div> */}
    </ProductCardGridStyle>
  );
};

export default ProductCardGrid;
