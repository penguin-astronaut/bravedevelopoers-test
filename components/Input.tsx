import styled from 'styled-components';
import React from 'react';

type InputWrapperProp = {
  error?: Boolean;
};
const InputWrapper = styled.div<InputWrapperProp>`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  font-size: 18px;
`;

const InputHTML = styled.input`
  width: 100%;
  height: 45px;
  padding: 0 12px;
  border: 2px solid #a19e9e;
  border-radius: 6px;
  font-size: 17px;
  outline-color: #00bcd4;
  &:focus + p,
  &:valid + p {
    top: -11px;
    font-size: 12px;
  }
  &:focus + p {
    color: #00bcd4;
  }
`;

const Placeholder = styled.p`
  position: absolute;
  font-size: 18px;
  color: #a19e9e;
  top: 8px;
  left: 8px;
  transition: all 0.2s;
  background: #fff;
  padding: 4px 6px;
`;

type InputProps = {
  placeholder: string;
};

export const Input = ({ placeholder, ...props }: InputProps) => {
  return (
    <InputWrapper>
      <InputHTML type="text" required />
      <Placeholder {...props}>{placeholder}</Placeholder>
    </InputWrapper>
  );
};
