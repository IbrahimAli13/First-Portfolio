import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Ibrahim Ali</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >About me:</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link >Contacts</Nav.Link>
            <Nav.Link href="https://www.facebook.com/GodsPerfectIdiott/">
              <FontAwesomeIcon icon={faFacebook} />
            </Nav.Link>
            <Nav.Link href="https://github.com/IbrahimAli13">
              <FontAwesomeIcon icon={faGithub} />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/ibrahim-ali-3691a9176">
              <FontAwesomeIcon icon={faLinkedin} />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/ib_zx0/">
              <FontAwesomeIcon icon={faInstagram} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
