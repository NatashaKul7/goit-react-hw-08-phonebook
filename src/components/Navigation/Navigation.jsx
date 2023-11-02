import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from 'redux/user/operations';
import { selectIsAuthenticated, selectUser } from 'redux/user/selectors';

const Navigation = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <header>
        <NavLink to="/" end>
          Home
        </NavLink>
        {isAuthenticated ? (
          <>
            <NavLink to="/contacts">Contacts</NavLink>
            <span>Hello {user.name}</span>
            <button onClick={() => dispatch(logoutThunk())}>Log Out</button>
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
