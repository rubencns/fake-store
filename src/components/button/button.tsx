import React from 'react';
import ButtonStyle from './button-style';
import classNames from 'classnames';

interface ButtonProps {
  text: string;
  active?: boolean;
  onClick: () => any;
}

const Button: React.FC<ButtonProps> = ({ active, onClick, text }) => {
  return (
    <ButtonStyle className={classNames('', { active })} onClick={onClick}>
      {text}
    </ButtonStyle>
  );
};

export default Button;
