import React from 'react';
import { Link } from 'react-router-dom';
import ProductCardGrid from '../../components/product-card-grid/product-card-grid';
import { useProductContext } from '../../context/product-context';
import FavoritesStyle from './favorites-style';

const Favorites: React.FC = () => {
  const { state } = useProductContext();

  return (
    <FavoritesStyle>
      <div className="favorites-title">
        {state.favorites.length !== 0 ? (
          <h1>These are your favorite products.</h1>
        ) : (
          <h1>
            You didn't add any product to your favorite list.{' '}
            <Link to="/">Go to products.</Link>
          </h1>
        )}
      </div>
      <ProductCardGrid products={state.favorites} />
    </FavoritesStyle>
  );
};

export default Favorites;
