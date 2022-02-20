import styled, { css, keyframes } from 'styled-components';
import { Button } from './Button';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  max-width: 100%;
`;

type ButtonProps = {
  isAnimate?: Boolean;
};

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled(Button)<ButtonProps>`
  width: ${(props) => (props.isAnimate ? '45px' : '100%')};
  font-size: 20px;
  height: 45px;
  padding: 0 10px;
  ${(props) => {
    if (props.isAnimate) {
      return css`
        border: var(--borderRadius) solid transparent;
        border-top-color: var(--mainColor);
        animation: ${rotate} 1s linear infinite;
        animation-delay: 0.4s;
        pointer-events: none;
        cursor: default;
        border-radius: 50%;
        color: transparent;
      `;
    }
  }}
`;
