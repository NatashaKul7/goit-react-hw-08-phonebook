import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  gap: 8px;
  align-items: center;

  padding: 0px 8px;
  margin-bottom: 14px;

  background-color: rgba(255, 255, 255, 0.7);
`;

export const StyledLink = styled(NavLink)`
  &.active {
    color: #0000ff;
  }
`;
