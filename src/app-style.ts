import styled from 'styled-components';

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;

  * {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  @media (max-width: 420px) {
    padding: 20px;
  }
`;

export default AppStyle;
