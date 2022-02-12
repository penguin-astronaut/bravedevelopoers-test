import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

export const MessageLayout = styled.div`
  width: 400px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  background: #fff;
  border-radius: 6px;
  animation: ${scale} 1s;
`;

export const MessageText = styled.p`
  font-size: 21px;
  margin-left: 13px;
  font-weight: 500;
`;

export const MessageTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
