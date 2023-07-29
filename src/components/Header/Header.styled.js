import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  /* padding: 0 16px; */
  /* margin: 0 auto; */

  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const StyledLogo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active,
  &:hover {
    color: white;
    background-color: orangered;
  }

  &:not(:last-child) {
    margin-right: 5px;
  }
`;
