import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux"

import { selectIsLoggedIn } from "redux/auth/selectors"
const StyledLink = styled(NavLink)`
  color: white;
  font-weight: 700;
  text-decoration:none;

  margin:20px;
  &.active {
    text-decoration:underline 2px;
    /* color: rgb(25,118,210); */
  }
`;
export const Navigation = ()=>{
  const isLoggedIn = useSelector(selectIsLoggedIn); 

    return (
        <nav>
      <StyledLink to="/" end>
        Home
      </StyledLink>
{  isLoggedIn&&(<StyledLink to="/contacts">Contacts</StyledLink>)}    
</nav>
    )
}