import { useSelector } from "react-redux";
import {IRootState, useAppDispatch} from '../../store';
import Login from "./components/Login";
import { logoutUser } from "../../store/auth/actionCreators";
import { useNavigate } from "react-router-dom";

const Main = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isLoggined = useSelector(
        (state: IRootState) => !!state.auth.authData.accessToken
    )

    const renderProfile = () => {
        return (<div>
            <div>You successfull authenticated</div>
        <button onClick={() => dispatch(logoutUser(navigate))}>Logout</button>
        </div>);
    }

    return (<div>
            <h1>Main</h1>
            {isLoggined ? renderProfile(): <Login/>}
        </div>);
};

export default Main;