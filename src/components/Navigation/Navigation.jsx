import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from 'redux/user/selectors';
import { StyledHeader, StyledLink } from './Navigation.styled';

const Navigation = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
  
      <StyledHeader>
        <StyledLink to="/" end>
          <p>Home</p>
        </StyledLink>
        {isAuthenticated ? (
          <>
            <StyledLink to="/contacts">
              <p>Contacts</p>
            </StyledLink>
            <UserMenu />
          </>
        ) : (
          <>
            <StyledLink to="/register">
              <p>Registration</p>
            </StyledLink>
            <StyledLink to="/login">
              <p>Log in</p>
            </StyledLink>
          </>
        )}
      </StyledHeader>

  );
};

export default Navigation;
