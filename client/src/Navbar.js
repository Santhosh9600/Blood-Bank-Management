import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {

  const navigate = useNavigate();   

  const handlesubmit = () => {
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand className="ms-5">Blood Bank</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          
          <LinkContainer to="/Home">
            <Nav.Link className="me-5">Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/Contact">
            <Nav.Link className="me-5">Contact</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/">
            <Nav.Link className="me-5">Login</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/Register">
            <Nav.Link className="me-5">Register</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/Users">
            <Nav.Link className="me-5">Users</Nav.Link>
          </LinkContainer>

        </Nav>
      </Navbar.Collapse>

      <button type="button" onClick={handlesubmit} className="btn btn-info">Logout</button>
    </Navbar>
  );
};

export default NavBar;