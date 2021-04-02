import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderStyle from './header-style';
import { ReactComponent as TagsIcon } from '../../assets/icons/files/tags-solid.svg';

const Header: React.FC = () => {
  const history = useHistory();
  return (
    <HeaderStyle>
      <div className="header-logo" onClick={() => history.push('/')}>
        <TagsIcon className="header-logo-icon" />
        <h1>Fake Store</h1>
      </div>
    </HeaderStyle>
  );
};

export default Header;
