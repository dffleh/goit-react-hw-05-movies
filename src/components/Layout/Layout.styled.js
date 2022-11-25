import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 60px;

  background-color: #1d1d27;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
`;

export const LinkStyled = styled(NavLink)`
  box-sizing: border-box;
  background-color: white;
  color: black;
  width: 100px;
  height: 30px;
  border-radius: 4px;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  &:hover,
  &.active {
    background-color: #ffb457;
    color: white;
  }
`;
