import React, { ReactNode } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Wrapper } from './Wrapper';

type ICardProps = {
  title: string;
  children: ReactNode;
  isShowLink?: boolean;
};

const CardTitle = styled.h1`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
`;

const CardBody = styled.div`
  padding: 10px 25px 25px;
`;

const CardHeader = styled.div`
  position: relative;
  padding: 15px;
`;

const CardLink = styled.div`
  position: absolute;
  left: 10px;
  top: 14px;
  cursor: pointer;
`;

export const Card = ({ title, children, isShowLink }: ICardProps) => {
  const router = useRouter();

  return (
    <Wrapper>
      <CardHeader>
        {isShowLink && (
          <CardLink onClick={() => router.back()}>
            <Image
              src={'/arrow-left.svg'}
              width={25}
              height={25}
              alt={'назад'}
            />
          </CardLink>
        )}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Wrapper>
  );
};
