import { Link } from "react-router-dom";
import { IRootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";

const Header = () => {
    const isLoggined = useSelector(
        (state: IRootState) => !!state.auth.authData.accessToken
    )
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Main</Link>
                </li>
                {isLoggined && (
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Header;