import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, Navigate } from "react-router-dom";
import { IRootState, useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { logoutUser } from '../../store/auth/actionCreators';
import './Header.scss'

const Header = () => {
  const dispatch = useAppDispatch();
    const isLoggined = useSelector(
        (state: IRootState) => !!state.auth.authData.access
    )
    const profileData = useSelector(
      (state: IRootState) => state.auth.profileData.profile
  )
    return (
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink className="navbar-brand" to="/">Online-library</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <NavLink to="/" className="nav-link">Home</NavLink>
              {isLoggined ?<Nav.Link className="nav-link" onClick={() => dispatch(logoutUser())}>Logout</Nav.Link> :<NavLink className="nav-link" to="/login">Login</NavLink>}
            </Nav>
        <Navbar.Text>
        {isLoggined ? <NavLink to="/profile" className="nav-link">{profileData?.username}</NavLink>:<p></p>}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      );
};

export default Header;
