import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { useOperatorContext } from '../operators.context';

interface IListLinkProps {
  shadowColor?: string;
}

const ListWrapper = styled.div`
  max-width: 870px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 0 10px 4px
      ${(props) => props.shadowColor || 'rgba(34, 60, 80, 0.16)'};
  }
  @media (max-width: 400px) {
    width: 200px;
    height: 65px;
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
      <List>
        {operators?.map(({ name, color, img, linkName }) => (
          <ListItem key={name}>
            <Link href={linkName} passHref>
              <ListLink shadowColor={color}>
                <ListLinkIcon>
                  <Image src={img} alt={name} width={35} height={35} />
                </ListLinkIcon>
                {name}
              </ListLink>
            </Link>
          </ListItem>
        ))}
      </List>
    </ListWrapper>
  );
};
