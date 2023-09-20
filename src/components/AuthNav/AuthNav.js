import styled from "styled-components";
import LoginIcon from '@mui/icons-material/Login';
import "./AuthNav.css"
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: white;
  font-weight: 700;
  margin:20px;
  text-decoration:none;
  &.active {
    text-decoration:underline 2px;
    
  }
`;
export const AuthNav =()=>{
    return (
        <div className="AuthNavContainer">
            <StyledLink to="/register"> Register</StyledLink>
            <StyledLink to ="/login"><LoginIcon/></StyledLink>
        </div>
    )
}