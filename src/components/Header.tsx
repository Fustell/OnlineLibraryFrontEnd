import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { IRootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";

const Header = () => {
    const isLoggined = useSelector(
        (state: IRootState) => !!state.auth.authData.access
    )
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/">Online-Library</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"><Link to="/">Home</Link></Nav.Link>
              {isLoggined ?<Nav.Link href="/logout"><Link to="/logout">Logout</Link></Nav.Link> :<Nav.Link href="/login"><Link to="/login">Login</Link></Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;
