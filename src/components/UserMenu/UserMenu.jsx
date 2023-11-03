import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/user/operations';
import { selectUser } from 'redux/user/selectors';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logoutThunk());

  return (
    <>
      <span>Hello {user.name}</span>
      <button onClick={onLogOut}>Log Out</button>
    </>
  );
};

export default UserMenu;
