import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import { IProductData } from '../../services/products';
import ProductCard from '../product-card/product-card';
import ProductCardGridStyle from './product-card-grid-style';
import { useInView } from 'react-intersection-observer';
import { ReactComponent as TimesCircleRegularIcon } from '../../assets/icons/files/times-circle-regular.svg';
import Loading from '../loading/loading';

interface IProductCardGrid {
  products: IProductData[];
  loadMore?: () => void;
  moreProductsToLoad?: boolean;
}

const ProductCardGrid: React.FC<IProductCardGrid> = ({
  products,
  loadMore,
  moreProductsToLoad,
}) => {
  const history = useHistory();
  const { ref, entry } = useInView({
    threshold: 0,
    rootMargin: '300px',
  });

  useEffect(() => {
    if (loadMore) {
      if (entry?.isIntersecting) {
        loadMore();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry?.isIntersecting]);

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
      {moreProductsToLoad && (
        <div className="product-card-grid-bottom">
          <div ref={ref}>
            <Loading />
          </div>
        </div>
      )}
    </ProductCardGridStyle>
  );
};

export default ProductCardGrid;
