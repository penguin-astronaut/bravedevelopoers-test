import styled, { keyframes } from 'styled-components';
import { Wrapper } from './Wrapper';

const scale = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

export const MessageLayout = styled(Wrapper)`
  width: 400px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  animation: ${scale} 1s;
  @media (max-width: 420px) {
    height: auto;
    width: 100%;
  }
`;

export const MessageText = styled.p`
  font-size: 21px;
  margin-left: 13px;
  font-weight: 500;
  @media (max-width: 420px) {
    margin-top: 10px;
  }
`;

export const MessageTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
  }
`;
