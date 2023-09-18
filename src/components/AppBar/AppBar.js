import { Navigation } from "../Navigation";
import { AuthNav } from "../AuthNav/AuthNav";

export const AppBar = () => {
    // const { isLoggedIn } = useAuth();
  
    return (
      <header style={{ display:"flex", justifyContent:"space-between", padding:"24px"}}>
        <Navigation />
        {/* <UserMenu />   */}
        <AuthNav /> 
      </header>
    );
  };