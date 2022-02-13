import React, { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import styled, { css, keyframes } from 'styled-components';

import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { ErrorMessage } from '../components/ErrorMessage';
import { SuccessMessage } from '../components/SuccessMessage';
import { api } from '../utils/apiFake';
import { getOperator, getOperatorsLinkName, IOperator } from '../lib/operators';

const OperatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
const OperatorIcon = styled.div`
  margin-right: 7px;
`;
const OperatorName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

type ButtonProps = {
  isAnimate?: Boolean;
};

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SubmitButton = styled(Button)<ButtonProps>`
  width: ${(props) => (props.isAnimate ? '45px' : '100%')};
  font-size: 20px;
  height: 45px;
  padding: 0 10px;
  ${(props) => {
    if (props.isAnimate) {
      return css`
        border: var(--borderRadius) solid transparent;
        border-top-color: var(--mainColor);
        animation: ${rotate} 1s linear infinite;
        animation-delay: 0.4s;
        pointer-events: none;
        cursor: default;
        border-radius: 50%;
        color: transparent;
      `;
    }
  }}
`;

type PaymentProps = {
  operator: IOperator;
};

type FormErrorState = {
  phone: string;
  sum: string;
};

const Payment: NextPage<PaymentProps> = ({ operator }) => {
  const [phone, setPhone] = useState('');
  const [sum, setSum] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrorState>({
    phone: '',
    sum: '',
  });
  console.log(formErrors);
  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    let isErrors = false;
    if (phone.length != 17) {
      setFormErrors((prevState) => ({
        ...prevState,
        phone: 'Неверный номер телефона',
      }));
      isErrors = true;
    }
    if (parseInt(sum) < 1 || parseInt(sum) > 1000) {
      console.log(2323);
      setFormErrors((prevState) => ({
        ...prevState,
        sum: 'Сумма должна быть больше 1 и меньше 1000',
      }));
      isErrors = true;
    }

    if (isErrors) {
      return;
    }

    setIsLoading(true);

    api()
      .then(() => setSuccess(true))
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  };

  if (success) {
    return <SuccessMessage />;
  }

  if (error) {
    return <ErrorMessage clickHandler={() => setError(false)} />;
  }

  return (
    <Card title={'Оплата'} isShowLink={true}>
      {operator && (
        <OperatorWrapper>
          <OperatorIcon>
            <Image
              src={operator.img}
              alt={operator.name}
              width={40}
              height={40}
            />
          </OperatorIcon>
          <OperatorName>{operator?.name}</OperatorName>
        </OperatorWrapper>
      )}
      <Form onSubmit={onSubmit}>
        <Input
          placeholder={'Телефон'}
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            setFormErrors((prevState) => ({
              ...prevState,
              phone: '',
            }));
          }}
          mask={'+7(\\999) 999 99 99'}
          error={formErrors.phone}
        />
        <Input
          placeholder={'Сумма'}
          value={sum}
          onChange={(e) => {
            setSum(e.target.value);
            setFormErrors((prevState) => ({
              ...prevState,
              sum: '',
            }));
          }}
          mask={'9999'}
          error={formErrors.sum}
        />
        <SubmitButton isAnimate={isLoading} disabled={isLoading}>
          Оплатить
        </SubmitButton>
      </Form>
    </Card>
  );
};

export default Payment;

export async function getStaticPaths() {
  const paths = getOperatorsLinkName();
  return {
    paths,
    fallback: false,
  };
}

type Params = {
  params: {
    operator: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const operator = getOperator(params.operator);
  return {
    props: {
      operator,
    },
  };
}
