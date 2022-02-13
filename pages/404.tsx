import Link from 'next/link';
import styled from 'styled-components';
import { Wrapper } from '../components/Wrapper';

const Wrapper404 = styled(Wrapper)`
  width: 450px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 80px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;

const MainLink = styled.a`
  font-size: 20px;
  color: #00bcd4;
  text-decoration: none;
`;

export const Page404 = () => (
  <Wrapper404>
    <Title>404</Title>
    <Text>Страница не найдена</Text>
    <Link href={'/'} passHref>
      <MainLink>Перейти на главную</MainLink>
    </Link>
  </Wrapper404>
);

export default Page404;
