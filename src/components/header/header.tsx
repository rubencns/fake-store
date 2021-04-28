import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderStyle from './header-style';
import { ReactComponent as TagsIcon } from '../../assets/icons/files/tags-solid.svg';
import { useProductContext } from '../../context/product-context';
import { ReactComponent as HeartIcon } from '../../assets/icons/files/heart-regular.svg';
import { ReactComponent as ShoppingCartIcon } from '../../assets/icons/files/shopping-cart-solid.svg';

const Header: React.FC = () => {
  const history = useHistory();
  const { state } = useProductContext();
  const [sectionSelected, setSectionSelected] = useState<string>('');

  const setSection = (pathname: string) => {
    switch (pathname) {
      case '/favorites':
        return setSectionSelected('favorites');
      case '/cart':
        return setSectionSelected('cart');
      default:
        return setSectionSelected('');
    }
  };

  useEffect(() => {
    history.listen((location) => {
      return setSection(location.pathname);
    });

    setSection(history.location.pathname);
  }, [history]);

  return (
    <HeaderStyle>
      <div className="header-logo" onClick={() => history.push('/')}>
        <TagsIcon className="header-logo-icon" />
        <h1>Fake Store</h1>
      </div>
      <div className="header-sections">
        <button
          className={`header-sections-item${
            sectionSelected === 'favorites' ? ' isSelected' : ''
          }`}
          onClick={() => history.push('/favorites')}
        >
          <HeartIcon className="header-sections-item__icon" />
          <span className="header-sections-item__text">Favorites</span>
          <span className="header-sections-item__counter">
            {state.favorites.length}
          </span>
        </button>
        <button
          className={`header-sections-item${
            sectionSelected === 'cart' ? ' isSelected' : ''
          }`}
          onClick={() => history.push('/cart')}
        >
          <ShoppingCartIcon className="header-sections-item__icon" />
          <span className="header-sections-item__text">Cart</span>
          <span className="header-sections-item__counter">
            {state.cart.length}
          </span>
        </button>
      </div>
    </HeaderStyle>
  );
};

export default Header;
