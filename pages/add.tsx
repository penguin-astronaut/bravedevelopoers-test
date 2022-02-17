import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { Input } from '../components/Input';
import styled from 'styled-components';
import { Button } from '../components/Button';

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

const Add = () => (
  <Card title={'Добавить'} isShowLink={true}>
    <Form>
      <Input placeholder={'Название'} />
      <Input placeholder={'Ссылка на иконку'} />
      <Label>
        {'Цвет тени:'}
        <InputColor type="color" />
      </Label>
      <ButtonSubmit>Добавить</ButtonSubmit>
    </Form>
  </Card>
);

export default Add;
