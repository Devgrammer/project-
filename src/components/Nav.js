import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./nav.css";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" expand="md" variant="dark" fixed="top" id="Nav_col">
        <Navbar.Brand href="#home" className="justify-content-center">
          Abhiarts
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="ml-auto" id='navele'  href="#home">
              Work
            </Nav.Link>
            <Nav.Link className="ml-auto" id='navele'  href="#features">
              About
            </Nav.Link>
            <Nav.Link className="ml-auto " id='navele' href="#pricing">
              Blog
            </Nav.Link>
            <Nav.Link className="ml-auto" id='navele'  href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
