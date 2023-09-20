import { Navigation } from "../Navigation";
import { AuthNav } from "../AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";
import "./AppBar.css"
export const AppBar = () => {
const isLoggedIn = useSelector(selectIsLoggedIn)  
    return (
      <header className="AppBarHeader">
        <Navigation />
        {isLoggedIn? <UserMenu /> : <AuthNav />  }
          
        
      </header>
    );
  };