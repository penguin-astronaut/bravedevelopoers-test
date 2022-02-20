import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import {
  MessageLayout,
  MessageText,
  MessageTextWrapper,
} from './MessageLayout';
import { ButtonSecondary, ButtonSuccess } from './Button';
import React from 'react';

const ButtonsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonWrapper = styled.div`
  margin: 10px;
`;

type ErrorMessageProps = {
  message: string;
  clickHandler: () => void;
};
export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  clickHandler,
}) => {
  const router = useRouter();

  return (
    <MessageLayout>
      <MessageTextWrapper>
        <Image
          src={'/error.svg'}
          width={50}
          height={50}
          alt={'error'}
          priority={true}
        />
        <MessageText>{message}</MessageText>
      </MessageTextWrapper>
      <ButtonsWrapper>
        <ButtonWrapper>
          <ButtonSecondary onClick={clickHandler}>
            Попробовать снова
          </ButtonSecondary>
        </ButtonWrapper>
        <ButtonWrapper>
          <ButtonSuccess onClick={() => router.push('/')}>
            На главную
          </ButtonSuccess>
        </ButtonWrapper>
      </ButtonsWrapper>
    </MessageLayout>
  );
};
