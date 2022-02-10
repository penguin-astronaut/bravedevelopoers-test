import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface IListLinkProps {
  shadowColor?: string;
}

const ListWrapper = styled.div`
  padding: 25px;
`;

const List = styled.ul`
  display: flex;
  background: #fff;
  list-style: none;
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
  const operators = [];
  return (
    <ListWrapper>
      <h1 className={'title'}>Выберете оператора</h1>
      <List>
        <ListItem>
          <ListLink href={'#'} shadowColor={'#f35e5e7a'}>
            <ListLinkIcon>
              <Image
                src="/mts.png"
                alt="мтс"
                objectFit={'contain'}
                layout={'fill'}
              />
            </ListLinkIcon>
            МТС
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink href={'#'} shadowColor={'#72db917a'}>
            <ListLinkIcon>
              <Image
                src="/megafon.png"
                alt="мегафон"
                objectFit={'contain'}
                layout={'fill'}
              />
            </ListLinkIcon>
            Мегафон
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink href={'#'} shadowColor={'#f3e15b7a'}>
            <ListLinkIcon>
              <Image
                src="/beeline.png"
                alt="билайн"
                objectFit={'contain'}
                layout={'fill'}
              />
            </ListLinkIcon>
            Билайн
          </ListLink>
        </ListItem>
      </List>
    </ListWrapper>
  );
};
