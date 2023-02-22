import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  color: #000;
  padding-left: 40px;
  font-weight: 700;
  font-size: 24px;
`;

export const MovieItem = styled(NavLink)`
  font-size: 20px;
  margin-bottom: 20px;
  display: block;
  color: #2b4749;
`;
