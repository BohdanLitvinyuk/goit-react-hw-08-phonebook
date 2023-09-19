import { Navigation } from "../Navigation";
import { AuthNav } from "../AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";

export const AppBar = () => {
const isLoggedIn = useSelector(selectIsLoggedIn)  
    return (
      <header style={{ display:"flex", justifyContent:"space-between",alignItems:"center", borderBottom:"1px solid" }}>
        <Navigation />
        {isLoggedIn? <UserMenu /> : <AuthNav />  }
          
        
      </header>
    );
  };