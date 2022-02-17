import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { Input } from '../components/Input';
import styled from 'styled-components';
import { Button } from '../components/Button';
import React, { useState } from 'react';
import { addOperator } from '../lib/operators';
import { useRouter } from 'next/router';

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

const Add = () => {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [color, setColor] = useState('#000000');

  const router = useRouter();

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    fetch('/api/operators', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        img,
        color,
        isCreated: true,
      }),
    }).then(() => router.push('/'));
  };

  return (
    <Card title={'Добавить'} isShowLink={true}>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder={'Название'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder={'Ссылка на иконку'}
          value={img}
          onChange={(e) => setImg(e.target.value)}
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
