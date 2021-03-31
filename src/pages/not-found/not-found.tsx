import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundStyle from './not-found-style';

const NotFound: React.FC = () => {
  return (
    <NotFoundStyle>
      <h2>Error 404. Page not found.</h2>
      <Link to="/">Go back home</Link>
    </NotFoundStyle>
  );
};

export default NotFound;
