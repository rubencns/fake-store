import { IProductData } from '../../services/products';
import ProductCardStyle from './product-card-style';
import { ReactComponent as HeartIcon } from '../../assets/icons/files/heart-regular.svg';
import { ReactComponent as HeartSolidIcon } from '../../assets/icons/files/heart-solid.svg';
import { ReactComponent as CartPlusSolidIcon } from '../../assets/icons/files/cart-plus-solid.svg';
import { ReactComponent as CartSolidIcon } from '../../assets/icons/files/shopping-cart-solid.svg';

import {
  addToCart,
  addToFavorites,
  removeFromCart,
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
            className="product-fav-icon product-saved"
            onClick={() => dispatch(removeFromFavorites(product.id))}
          />
        ) : (
          <HeartIcon
            className="product-fav-icon product-not-saved"
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
          <div className="product-info-bottom-left">
            <button className="product-info-see-more" onClick={goToProductPage}>
              See more
            </button>
            {state.cart.find(({ id }) => id === product.id) ? (
              <button
                className="product-info-cart product-added"
                onClick={() => {
                  dispatch(removeFromCart(product.id));
                }}
              >
                <CartSolidIcon className="product-info-cart-icon" />
              </button>
            ) : (
              <button
                className="product-info-cart"
                onClick={() => {
                  dispatch(addToCart(product));
                }}
              >
                <CartPlusSolidIcon className="product-info-cart-icon" />
              </button>
            )}
          </div>
          <div className="product-info-bottom-right">
            <div className="product-info-price">
              <span>${price}</span>
            </div>
          </div>
        </div>
      </div>
    </ProductCardStyle>
  );
};

export default ProductCard;
