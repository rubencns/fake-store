import styled from 'styled-components';

const HeaderStyle = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-logo {
    font-size: 32px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;

    &-icon {
      min-height: 32px;
      min-width: 32px;
      max-height: 32px;
      max-width: 32px;
      margin-right: 8px;
      line-height: 0;
    }
  }

  .header-sections {
    display: flex;
  }

  .header-sections-item {
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

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      border: 1px solid maroon;
      color: maroon;
    }

    &.isSelected {
      background: maroon;
      color: #fff;
      border-color: maroon;
    }

    &__icon {
      height: 16px;
      width: 16px;
      margin-right: 8px;
    }

    &__counter {
      font-size: 18px;
      margin-left: 8px;
    }
  }

  @media (max-width: 768px) {
    .header-logo {
      font-size: 24px;
    }

    .header-sections-item__counter {
      font-size: 18px;
    }
  }

  @media (max-width: 600px) {
    .header-sections-item {
      padding: 12px;
    }

    .header-sections-item__text {
      display: none;
    }

    .header-sections-item__counter {
      font-size: 16px;
    }
  }

  @media (max-width: 420px) {
    .header-sections-item {
      padding: 8px;
      margin-right: 8px;
    }

    .header-sections-item__icon {
      height: 12px;
      width: 12px;
      margin-right: 0;
    }

    .header-sections-item__counter {
      font-size: 12px;
    }
  }
`;

export default HeaderStyle;
