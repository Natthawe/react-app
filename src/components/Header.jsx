import React, { Component } from 'react'

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import { Navbar, Nav, Container} from 'react-bootstrap'

export default class Header extends Component {
  render() {
    return (
    <Container>
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home">React ROS Robot</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
    )
  }
}
