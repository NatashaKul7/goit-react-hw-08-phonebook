import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/user/operations';
import { selectUser } from 'redux/user/selectors';
import { StyledUserMenu } from './UserMenu.styled';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logoutThunk());

  return (
   <StyledUserMenu>
      <p>Hello {user.name}</p>
      <button onClick={onLogOut}>Log Out</button>
    </StyledUserMenu>
  );
};

export default UserMenu;
