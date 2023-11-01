import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/register">Registration</NavLink>
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default SharedLayout;
