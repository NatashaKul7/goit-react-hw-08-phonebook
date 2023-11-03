import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsAuthenticated } from 'redux/user/selectors';

const Navigation = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <div>
      <header>
        <NavLink to="/" end>
          Home
        </NavLink>
        {isAuthenticated ? (
          <>
            <NavLink to="/contacts">Contacts</NavLink>
            <UserMenu />
          </>
        ) : (
          <>
            <NavLink to="/register">Registration</NavLink>
            <NavLink to="/login">Log in</NavLink>
          </>
        )}
      </header>
    </div>
  );
};

export default Navigation;
