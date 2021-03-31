import React from 'react';
import Spinner from '../spinner/spinner';
import LoadingStyle from './loading-style';

const Loading: React.FC = () => {
  return (
    <LoadingStyle>
      <Spinner />
      <span className="loading-text">Loading...</span>
    </LoadingStyle>
  );
};

export default Loading;
