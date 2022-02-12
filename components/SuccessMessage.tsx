import Image from 'next/image';
import {
  MessageLayout,
  MessageText,
  MessageTextWrapper,
} from './MessageLayout';

export const SuccessMessage = () => {
  return (
    <MessageLayout>
      <MessageTextWrapper>
        <Image src={'/success.svg'} width={50} height={50} />
        <MessageText>Оплата прошла успешно!</MessageText>
      </MessageTextWrapper>
    </MessageLayout>
  );
};
