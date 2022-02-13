import React from 'react';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';
import styled from 'styled-components';

type InputWrapperProp = {
  error?: Boolean;
};
const InputWrapper = styled.div<InputWrapperProp>`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  font-size: 18px;
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

export const Input = ({ placeholder, mask, ...props }: InputMaskProps) => {
  return (
    <InputWrapper>
      <InputHTML
        type="text"
        mask={mask}
        maskPlaceholder={null}
        required
        {...props}
      />
      <Placeholder>{placeholder}</Placeholder>
    </InputWrapper>
  );
};
