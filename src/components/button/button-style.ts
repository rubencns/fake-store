import styled from 'styled-components';

const ButtonStyle = styled.button`
  font-size: 16px;
  background: none;
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 14px 16px;
  margin-right: 16px;
  border-radius: 5px;
  cursor: pointer;
  text-transform: capitalize;
  white-space: nowrap;

  &:hover {
    border: 1px solid maroon;
    color: maroon;
  }

  &.active {
    background: maroon;
    color: #fff;
    border-color: maroon;
  }
`;

export default ButtonStyle;
