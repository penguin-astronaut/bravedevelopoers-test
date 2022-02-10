import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useOperatorContext } from '../operators.context';

interface IListLinkProps {
  shadowColor?: string;
}

const ListWrapper = styled.div`
  padding: 25px;
  max-width: 870px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  list-style: none;
  @media (max-width: 550px) {
    justify-content: space-around;
  }
`;

const ListItem = styled.li`
  margin: 7px;
`;

const ListLink = styled.a<IListLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 60px;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  border-radius: 6px;
  text-decoration: none;
  font-size: 18px;
  color: #000;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 0 10px 4px
      ${(props) => props.shadowColor || 'rgba(34, 60, 80, 0.16)'};
  }
`;

const ListLinkIcon = styled.div`
  margin-right: 10px;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  position: relative;
`;

export const OperatorList = () => {
  const operators = useOperatorContext();
  return (
    <ListWrapper>
      <h1 className={'title'}>Выберете оператора</h1>
      <List>
        {operators?.map(({ name, color, img }) => (
          <ListItem key={name}>
            <ListLink href={'#'} shadowColor={color}>
              <ListLinkIcon>
                <Image
                  src={img}
                  alt={name}
                  objectFit={'contain'}
                  layout={'fill'}
                />
              </ListLinkIcon>
              {name}
            </ListLink>
          </ListItem>
        ))}
      </List>
    </ListWrapper>
  );
};
