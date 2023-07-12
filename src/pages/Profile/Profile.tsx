import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../store";
import { getProfile, logoutUser } from "../../store/auth/actionCreators";
import './Profile.scss'

const ProfilePage = () => {

    const dispatch = useAppDispatch();

    const profile = useSelector(
        (state: IRootState) => state.auth.profileData.profile
    );

    const renderProfile = () => {
        return (<div>
            <div className="container-lg">
            <div>Name: {profile.username}</div>
            <div>Email: {profile.email}</div>
        <button onClick={() => dispatch(logoutUser())}>Logout</button>
            </div>
        </div>);

    }
    return renderProfile()
}

export default ProfilePage;