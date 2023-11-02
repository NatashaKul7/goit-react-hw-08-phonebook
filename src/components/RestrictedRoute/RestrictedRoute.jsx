import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from 'redux/user/selectors';

const RestrictedRoute = ({ children, redirectTo = '/contacts' }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? <Navigate to={redirectTo} replace /> : children;
};

export default RestrictedRoute;
