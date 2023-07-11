import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { IRootState, useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { logoutUser } from '../../store/auth/actionCreators';

const Header = () => {
  const dispatch = useAppDispatch();
    const isLoggined = useSelector(
        (state: IRootState) => !!state.auth.authData.access
    )
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand><Link to="/">Online-Library</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              {isLoggined ?<Nav.Link onClick={() => dispatch(logoutUser())}>Logout</Nav.Link> :<Link to="/login">Login</Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;
