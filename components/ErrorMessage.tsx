import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import {
  MessageLayout,
  MessageText,
  MessageTextWrapper,
} from './MessageLayout';
import { ButtonSecondary, ButtonSuccess } from './Button';

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

type ErrorMessage = {
  clickHandler: () => void;
};
export const ErrorMessage = ({ clickHandler }: ErrorMessage) => {
  const router = useRouter();

  return (
    <MessageLayout>
      <MessageTextWrapper>
        <Image src={'/error.png'} width={50} height={50} alt={'error'} />
        <MessageText>Оплата не удалась</MessageText>
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
