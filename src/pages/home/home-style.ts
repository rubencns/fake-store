import styled from 'styled-components';

const HomeStyle = styled.div`
  .home-categories {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: 25px;
  }

  .home-categories-product {
    display: flex;
  }

  .home-categories-user {
    display: flex;
    justify-content: flex-end;
  }

  .home-categories-item {
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

    &:hover {
      border: 1px solid maroon;
      color: maroon;
    }

    &.isSelected {
      background: maroon;
      color: #fff;
      border-color: maroon;
    }

    &-icon {
      height: 16px;
      width: 16px;
      margin-right: 8px;
    }

    &-counter {
      font-size: 18px;
      margin-left: 8px;
    }
  }
`;

export default HomeStyle;
