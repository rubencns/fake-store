import React from 'react';
import Spinner from '../spinner/spinner';
import LoadingStyle from './loading-style';

interface ILoading {
  text?: string;
}

const Loading: React.FC<ILoading> = ({ text }) => {
  return (
    <LoadingStyle>
      <Spinner />
      {text && <span className="loading-text">{text}</span>}
    </LoadingStyle>
  );
};

export default Loading;
