import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px;
  color: #00bcd4;
  border-radius: 6px;
  font-size: 17px;
  font-weight: 500;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s;
  border: 3px solid #00bcd4;
  &:hover {
    background-color: #00bcd4;
    color: #fff;
  }
`;

export const ButtonSecondary = styled(Button)`
  color: #607d8b;
  background: #fff;
  border: 3px solid #607d8b;
  &:hover {
    background-color: #607d8b;
  }
`;

export const ButtonSuccess = styled(Button)`
  color: #009688;
  border: 3px solid #009688;
  background: #fff;
  &:hover {
    background-color: #009688;
  }
`;
