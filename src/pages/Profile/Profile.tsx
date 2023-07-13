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
        return (
          <div>
          <div className="container-lg rounded mt-5 mb-5">
            <div className="row">
              <div className="col-md-3 border-end">
                <div className="list-group mt-3 sidebar-items">
                  <a  onClick={() => dispatch(logoutUser())} className="list-group-item list-group-item-action">Вийти</a>
                  <a  className="list-group-item list-group-item-action">Зареєстуватися як автор</a>
                </div>
              </div>
              <div className="col-md-5">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-end">Profile Settings</h4>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label htmlFor="username" className="form-label">Username</label>
                      <input type="text" className="form-control" id="username" name="username" placeholder="Username" value={profile.username} />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="Email" value={profile.email} readOnly />
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <button className="btn btn-primary" type="button">Save Profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
              
        );

    }
    return renderProfile()
}

export default ProfilePage;