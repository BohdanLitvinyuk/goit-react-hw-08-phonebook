import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "redux/auth/selectors";
import { logOut } from "redux/auth/operations";
import LogoutIcon from '@mui/icons-material/Logout';
import "./UserMenu.css"
export const UserMenu =()=>{
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
return (
    <div className="userMenuContainer">
        <h4> {user.name}</h4>
<button className="userMenuBtn" type="button" onClick={()=> dispatch(logOut())}> <LogoutIcon/> </button>
    </div>
)
}
