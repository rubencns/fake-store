import styled from 'styled-components';

const SpinnerStyle = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 10px solid rgba(0, 0, 0, 0.2);
  border-left: 10px solid maroon;
  animation: animate 1s linear infinite;

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default SpinnerStyle;
