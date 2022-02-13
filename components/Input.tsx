import React from 'react';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';
import styled, { css } from 'styled-components';

type InputWrapperProp = {
  error?: string;
};
const InputWrapper = styled.div<InputWrapperProp>`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  font-size: 18px;
  ${(props) => {
    if (props.error) {
      return css`
        ${Placeholder} {
          color: var(--errorColor) !important;
        }
        ${InputHTML} {
          outline-color: var(--errorColor) !important;
          border-color: var(--errorColor) !important;
          color: var(--errorColor);
        }
      `;
    }
  }}
`;

const Placeholder = styled.p`
  position: absolute;
  padding: 4px 6px;
  font-size: 18px;
  color: #a19e9e;
  top: 8px;
  left: 8px;
  transition: all 0.2s;
  background: #fff;
  pointer-events: none;
`;

const ErrorMessage = styled.p`
  margin-top: 5px;
  font-size: 13px;
  color: var(--errorColor);
`;

const InputHTML = styled(InputMask)`
  width: 100%;
  height: 45px;
  padding: 0 12px;
  border: 2px solid #a19e9e;
  border-radius: var(--borderRadius);
  font-size: 17px;
  outline-color: var(--mainColor);
  &:focus + ${Placeholder}, &:valid + ${Placeholder} {
    top: -11px;
    font-size: 12px;
  }
  &:focus + ${Placeholder} {
    color: var(--mainColor);
  }
`;

interface InputProps extends InputMaskProps {
  error?: string;
}

export const Input = ({ error, placeholder, mask, ...props }: InputProps) => {
  return (
    <InputWrapper error={error}>
      <InputHTML
        type="text"
        mask={mask}
        maskPlaceholder={null}
        required
        {...props}
      />
      <Placeholder>{placeholder}</Placeholder>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};
