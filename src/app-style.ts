import styled from 'styled-components';

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;

  * {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  h1 {
    font-size: 48px;
  }

  .app-link {
    text-decoration: none;
    color: inherit;
  }
`;

export default AppStyle;
