import styled from 'styled-components';

const HomeStyle = styled.div`
  .home-categories {
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-column-gap: 40px;
    margin-bottom: 25px;
  }

  .home-categories-product {
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
    -webkit-mask-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 10%
    );
    mask-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 10%
    );

    -ms-overflow-style: none;
    /* scrollbar-width: none; */
  }

  .home-categories-product::-webkit-scrollbar {
    display: none;
  }

  .home-categories-filter {
    justify-self: flex-end;

    select {
      padding: 14px 16px;
      border-radius: 5px;
      border: 1px solid black;
      font-size: 16px;
      appearance: none;

      &:hover {
        border-color: maroon;
        color: maroon;
      }
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
