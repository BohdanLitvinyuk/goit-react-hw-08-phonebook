import styled from "styled-components";

import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;
  margin:20px;
  &.active {
    color:rgb(25,118,210);
  }
`;
export const AuthNav =()=>{
    return (
        <div>
            <StyledLink to="/register"> Register</StyledLink>
            <StyledLink to ="/login">Log In</StyledLink>
        </div>
    )
}