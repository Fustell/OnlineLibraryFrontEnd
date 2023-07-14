import { useSelector } from "react-redux";
import {IRootState} from '../../store';
import Login from "./components/Login";
import { Navigate } from "react-router-dom";
const LoginPage = () => {

    const isLoggined = useSelector(
        (state: IRootState) => !!state.auth.authData.access
    )
    return (<div className="container-lg">
            {isLoggined ? <Navigate to="/profile"/>: <Login/>}
        </div>);
};

export default LoginPage;