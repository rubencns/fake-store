import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Loading from '../../components/loading/loading';
import { getSingleProduct, IProductData } from '../../services/products';
import { ReactComponent as HeartIcon } from '../../assets/icons/files/heart-regular.svg';
import { ReactComponent as HeartSolidIcon } from '../../assets/icons/files/heart-solid.svg';
import { ReactComponent as CartPlusSolidIcon } from '../../assets/icons/files/cart-plus-solid.svg';
import { ReactComponent as CartSolidIcon } from '../../assets/icons/files/shopping-cart-solid.svg';
import { ReactComponent as ChevronLeftSolidIcon } from '../../assets/icons/files/chevron-left-solid.svg';
import ProductStyle from './product-style';
import {
  addToCart,
  addToFavorites,
  removeFromCart,
  removeFromFavorites,
  useProductContext,
} from '../../context/product-context';

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProductData>();
  const [loading, setLoading] = useState<boolean>(false);
  const { state, dispatch } = useProductContext();
  const history = useHistory();

  const fetchSingleProduct = async (id: string) => {
    setLoading(true);
    const data = await getSingleProduct(id);
    setProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  return (
    <ProductStyle>
      <button className="product-go-back" onClick={() => history.push('/')}>
        <ChevronLeftSolidIcon className="product-go-back-icon" />
        Go back
      </button>
      {loading ? (
        <Loading />
      ) : product ? (
        <div className="product-container">
          <div className="product-image">
            <img src={product.image} alt="Product" />
          </div>
          <div className="product-info">
            <div className="product-info-title">
              <h1>{product.title}</h1>
            </div>
            <div className="product-info-category">
              <span>{product.category}</span>
            </div>
            <div className="product-info-description">
              <p>{product.description}</p>
            </div>

            <div className="product-info-bottom">
              <div className="product-info-bottom-left">
                {state.favorites.find((fav) => fav.id === product.id) ? (
                  <button
                    className="product-info-fav product-saved"
                    onClick={() => {
                      dispatch(removeFromFavorites(product.id));
                    }}
                  >
                    <HeartSolidIcon className="product-info-fav-icon" />
                  </button>
                ) : (
                  <button
                    className="product-info-fav"
                    onClick={() => {
                      dispatch(addToFavorites(product));
                    }}
                  >
                    <HeartIcon className="product-info-fav-icon" />
                  </button>
                )}
                {state.cart.find(
                  ({ id }: { id: number }) => id === product.id
                ) ? (
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
                  <span>${product.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <span>No data.</span>
      )}
    </ProductStyle>
  );
};

export default Product;
