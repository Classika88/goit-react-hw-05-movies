import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #fff;
  padding-left: 30px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const Menu = styled(NavLink)`
  display: inline-block;
  font-size: 24px;
  font-weight: 700;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-right: 50px;
  color: #000;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: #0d7279;
  }
`;
