import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar =() => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="/">DollDB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/*<Nav.Link href="/">Home</Nav.Link> /> */}
            <NavDropdown title="Dolls" id="basic-nav-dropdown">
              <NavDropdown.Item href="/dolls">
                Compare Sizes
                </NavDropdown.Item>
              <NavDropdown.Item href="/dolls">
                Find Similar
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/patterns">Patterns</Nav.Link>
            <Nav.Link href="/outfits">Outfits</Nav.Link>
            <Nav.Link href="/books">Books</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;