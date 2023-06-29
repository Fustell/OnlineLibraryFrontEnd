import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../store";
import { getProfile, logoutUser } from "../../store/auth/actionCreators";

const ProfilePage = () => {

    const dispatch = useAppDispatch();

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
    return renderProfile()
}

export default ProfilePage;