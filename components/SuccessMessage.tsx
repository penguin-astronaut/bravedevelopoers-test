import Image from 'next/image';
import {
  MessageLayout,
  MessageText,
  MessageTextWrapper,
} from './MessageLayout';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

type SuccessMessageProps = {
  message: string;
  redirectAfterMs?: number;
};

export const SuccessMessage: React.FC<SuccessMessageProps> = ({
  message,
  redirectAfterMs = 3000,
}) => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => router.push('/'), redirectAfterMs);

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
        <MessageText>{message}</MessageText>
      </MessageTextWrapper>
    </MessageLayout>
  );
};
