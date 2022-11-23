import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Nav, LinkStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <LinkStyled to="/" end>
            Home
          </LinkStyled>
          <LinkStyled to="/movies">Movies</LinkStyled>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
