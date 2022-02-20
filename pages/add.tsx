import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { Input } from '../components/Input';
import styled from 'styled-components';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { Button } from '../components/Button';
import { addNew } from '../utils/apiOperator';

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 18px;
`;

const InputColor = styled.input`
  margin-left: 10px;
`;

const ButtonSubmit = styled(Button)`
  width: 100%;
  text-transform: uppercase;
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
  const [formErrors, setFormErrors] = useState<FormErrorState>({
    name: '',
    img: '',
  });

  const router = useRouter();

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

    addNew({ name, img, color })
      .then(() => router.push('/'))
      .catch(() => console.log('Ошибка'));
  };

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
        <ButtonSubmit>Добавить</ButtonSubmit>
      </Form>
    </Card>
  );
};

export default Add;
