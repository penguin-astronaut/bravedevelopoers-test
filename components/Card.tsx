import React, { ReactNode } from 'react';
import styled from 'styled-components';

type ICardProps = {
  title: string;
  children: ReactNode;
};

const CardWrapper = styled.div`
  padding: 25px;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  background: #fff;
  overflow: hidden;
`;

const CardTitle = styled.h1`
  font-size: 27px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
`;

export const Card = ({ title, children }: ICardProps) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <div>{children}</div>
    </CardWrapper>
  );
};
