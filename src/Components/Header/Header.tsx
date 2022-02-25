import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Our Student</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
