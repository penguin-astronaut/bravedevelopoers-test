import styled from 'styled-components';
import { Wrapper } from './Wrapper';
import Link from 'next/link';
import React from 'react';

const HttpErrorWrapper = styled(Wrapper)`
  width: 450px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 80px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;

const MainLink = styled.a`
  font-size: 20px;
  color: var(--mainColor);
  text-decoration: none;
`;

type HttpErrorProps = {
  code: string;
  message: string;
  isShowLink?: boolean;
};

export const HttpError: React.FC<HttpErrorProps> = ({
  code,
  message,
  isShowLink,
}) => (
  <HttpErrorWrapper>
    <Title>{code}</Title>
    <Text>{message}</Text>
    {isShowLink && (
      <Link href={'/'} passHref>
        <MainLink>Перейти на главную</MainLink>
      </Link>
    )}
  </HttpErrorWrapper>
);
