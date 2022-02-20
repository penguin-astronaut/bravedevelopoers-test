import styled from 'styled-components';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { Card } from '../components/Card';
import { Form, SubmitButton } from '../components/Form';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { addNew } from '../utils/apiOperator';
import { SuccessMessage } from '../components/SuccessMessage';
import { ErrorMessage } from '../components/ErrorMessage';

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 18px;
`;

const InputColor = styled.input`
  margin-left: 10px;
`;

type FormErrorState = {
  name: string;
  img: string;
};

const Add = () => {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [color, setColor] = useState('#000000');
  const [isReqError, setIsReqError] = useState(false);
  const [isReqSuccess, setIsReqSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrorState>({
    name: '',
    img: '',
  });

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    let isError = false;

    const nameLength = name.trim().length;
    if (nameLength < 1 || nameLength > 11) {
      setFormErrors((prevState) => ({
        ...prevState,
        name: 'Длина названия от 1 до 11 символов',
      }));
      isError = true;
    }

    if (!/^https:\/\/[^\s]*\.(svg|jpg|png|jpeg)/.test(img)) {
      setFormErrors((prevState) => ({
        ...prevState,
        img: 'Некорректная ссылка',
      }));

      isError = true;
    }

    if (isError) {
      return;
    }

    setIsLoading(true);

    addNew({ name, img, color })
      .then(() => setIsReqSuccess(true))
      .catch(() => setIsReqError(true))
      .finally(() => setIsLoading(false));
  };

  if (isReqSuccess) {
    return (
      <SuccessMessage message={'Оператор добавлен!'} redirectAfterMs={1500} />
    );
  }

  if (isReqError) {
    return (
      <ErrorMessage
        message={'При добавлении произошла ошибка'}
        clickHandler={() => setIsReqError(false)}
      />
    );
  }

  return (
    <Card title={'Добавить'} isShowLink={true}>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder={'Название'}
          value={name}
          error={formErrors.name}
          onChange={(e) => {
            setName(e.target.value);
            setFormErrors((prevState) => ({
              ...prevState,
              name: '',
            }));
          }}
        />
        <Input
          placeholder={'Ссылка на иконку'}
          value={img}
          error={formErrors.img}
          onChange={(e) => {
            setImg(e.target.value);
            setFormErrors((prevState) => ({
              ...prevState,
              img: '',
            }));
          }}
        />
        <Label>
          {'Цвет тени:'}
          <InputColor
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </Label>
        <SubmitButton isAnimate={isLoading} disabled={isLoading}>
          Добавить
        </SubmitButton>
      </Form>
    </Card>
  );
};

export default Add;
