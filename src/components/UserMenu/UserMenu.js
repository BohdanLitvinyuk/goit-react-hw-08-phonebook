import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "redux/auth/selectors";
import { logOut } from "redux/auth/operations";
import Button from '@mui/material/Button';
export const UserMenu =()=>{
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
return (
    <div>
        <b>         <p> {user.name}  <Button  variant="outlined"type="button" onClick={()=> dispatch(logOut())}> LogOut </Button> </p>
</b>
    </div>
)
}