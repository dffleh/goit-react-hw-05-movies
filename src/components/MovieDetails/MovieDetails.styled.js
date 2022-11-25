import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrap = styled.div`
  width: 1440px;
  margin: 0 auto 30px;
  display: flex;
`;

export const LinkBtn = styled(NavLink)`
  box-sizing: border-box;
  width: 150px;
  height: 50px;
  margin-right: 20px;
  font-size: 20px;
  padding: 10px 30px;
  text-align: center;
  background-color: #fff;
  font-weight: 500;
  line-height: 30px;
  border: 1px solid black;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  &:hover,
  &:focus {
    background-color: orange;
    color: white;
  }
`;
