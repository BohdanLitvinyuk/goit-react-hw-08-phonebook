import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  color: black;
  margin:20px;
  &.active {
    color: orange;
  }
`;
export const Navigation = ()=>{
    return (
        <nav>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      <StyledLink to="/contacts">Contacts</StyledLink>
    </nav>
    )
}