import styled from 'styled-components';

const HeaderStyle = styled.div`
  min-height: 80px;
  margin-bottom: 30px;

  .header-logo {
    font-size: 32px;
    font-weight: 700;
    cursor: pointer;
    display: flex;

    &-icon {
      min-height: 32px;
      min-width: 32px;
      max-height: 32px;
      max-width: 32px;
      margin-right: 8px;
      line-height: 0;
    }
  }
`;

export default HeaderStyle;
