import styled from 'styled-components';

const HomeStyle = styled.div`
  .home-categories {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 40px;
    margin-bottom: 25px;
  }

  .home-categories-product {
    display: flex;
    overflow: auto;
    position: relative;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 90%,
      rgba(0, 0, 0, 0)
    );
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
    white-space: nowrap;

    &:hover {
      border: 1px solid maroon;
      color: maroon;
    }

    &.isSelected {
      background: maroon;
      color: #fff;
      border-color: maroon;
    }
  }

  @media (max-width: 768px) {
    .home-categories {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      grid-row-gap: 20px;
    }
  }
`;

export default HomeStyle;
