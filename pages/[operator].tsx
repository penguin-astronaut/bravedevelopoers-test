import React, { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import styled, { css, keyframes } from 'styled-components';

import { Card } from '../components/Card';
import { InputMasked } from '../components/Input';
import { Form, SubmitButton } from '../components/Form';
import { ErrorMessage } from '../components/ErrorMessage';
import { SuccessMessage } from '../components/SuccessMessage';
import { api } from '../utils/apiFake';
import { IOperator } from '../utils/Types';
import { getAll, getBySlug } from '../utils/apiOperator';

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
    return <SuccessMessage message={'Оплата прошла успешно!'} />;
  }

  if (error) {
    return (
      <ErrorMessage
        message={'Оплата не удалась'}
        clickHandler={() => setError(false)}
      />
    );
  }

  return (
    <Card title={'Оплата'} isShowLink={true}>
      {operator && (
        <OperatorWrapper>
          <OperatorIcon>
            {operator.isUserCreated ? (
              <img
                src={operator.img}
                alt={operator.name}
                width={45}
                height={45}
              />
            ) : (
              <Image
                src={operator.img}
                alt={operator.name}
                width={40}
                height={40}
              />
            )}
          </OperatorIcon>
          <OperatorName>{operator?.name}</OperatorName>
        </OperatorWrapper>
      )}
      <Form onSubmit={onSubmit}>
        <InputMasked
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
        <InputMasked
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
  const operators = await getAll();
  const paths = operators.map(({ slug }) => {
    return {
      params: {
        operator: slug,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

type Params = {
  params: {
    operator: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const { operator, notFound } = await getBySlug(params.operator);

  if (notFound) {
    return { notFound };
  }

  return {
    props: {
      operator,
    },
  };
}
