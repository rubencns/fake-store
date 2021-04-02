import { IProductData } from '../../services/products';
import ProductCardStyle from './product-card-style';
import { ReactComponent as HeartIcon } from '../../assets/icons/files/heart-regular.svg';
import { ReactComponent as HeartSolidIcon } from '../../assets/icons/files/heart-solid.svg';
import {
  addToFavorites,
  removeFromFavorites,
  useProductContext,
} from '../../context/product-context';

interface IProductCard {
  product: IProductData;
  goToProductPage?: () => void;
}

const ProductCard: React.FC<IProductCard> = ({ product, goToProductPage }) => {
  const { title, description, category, image, price } = product;
  const { state, dispatch } = useProductContext();

  return (
    <ProductCardStyle>
      <div className="product-image">
        <img src={image} alt="Product" />
        {state.favorites.find((fav) => fav.id === product.id) ? (
          <HeartSolidIcon
            className="product-fav-icon product-save"
            onClick={() => dispatch(removeFromFavorites(product.id))}
          />
        ) : (
          <HeartIcon
            className="product-fav-icon product-not-save"
            onClick={() => dispatch(addToFavorites(product))}
          />
        )}
      </div>
      <div className="product-info">
        <div className="product-info-title">
          <h2>{title}</h2>
        </div>
        <div className="product-info-category">
          <span className="product-info-category">{category}</span>
        </div>
        <div className="product-info-description">
          <p>{description}</p>
        </div>
        <div className="product-info-bottom">
          <button className="product-info-cta" onClick={goToProductPage}>
            See more
          </button>
          <div className="product-info-price">
            <span>$ {price}</span>
          </div>
        </div>
      </div>
    </ProductCardStyle>
  );
};

export default ProductCard;
