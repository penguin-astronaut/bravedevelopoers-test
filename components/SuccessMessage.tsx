import Image from 'next/image';
import {
  MessageLayout,
  MessageText,
  MessageTextWrapper,
} from './MessageLayout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const SuccessMessage = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => router.push('/'), 5000);

    return () => clearTimeout(timeout);
  });

  return (
    <MessageLayout>
      <MessageTextWrapper>
        <Image
          src={'/success.svg'}
          width={50}
          height={50}
          alt={'success'}
          priority={true}
        />
        <MessageText>Оплата прошла успешно!</MessageText>
      </MessageTextWrapper>
    </MessageLayout>
  );
};
