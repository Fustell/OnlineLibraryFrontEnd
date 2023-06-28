import { useSelector } from "react-redux";
import {IRootState, useAppDispatch} from '../../store';
import Login from "./components/Login";
import { getProfile, logoutUser } from "../../store/auth/actionCreators";
const Main = () => {

    const dispatch = useAppDispatch();
    const isLoggined = useSelector(
        (state: IRootState) => !!state.auth.authData.access
    )

    const profile = useSelector(
        (state: IRootState) => state.auth.profileData.profile
    );

    const renderProfile = () => {
        return (<div>
            <div>You successfull authenticated</div>
        <button onClick={() => dispatch(logoutUser())}>Logout</button>
        <button onClick={() => dispatch(getProfile())}>Update Profile</button>
        </div>);
    }

    return (<div>
            <h1>Main</h1>
            {isLoggined ? renderProfile(): <Login/>}
        </div>);
};

export default Main;