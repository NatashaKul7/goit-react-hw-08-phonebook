import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from 'redux/user/selectors';

const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? children : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
