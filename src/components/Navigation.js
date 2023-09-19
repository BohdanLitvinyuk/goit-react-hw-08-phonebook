import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux"

import { selectIsLoggedIn } from "redux/auth/selectors"
const StyledLink = styled(NavLink)`
  color: black;
  margin:20px;
  &.active {
    color: rgb(25,118,210);
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