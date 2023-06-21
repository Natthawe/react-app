import React, { Component } from 'react'

import { Navbar, Nav, Container} from 'react-bootstrap'

export default class Header extends Component {
  render() {
    return (
    <Container>
        <Navbar bg="dark" expand="lg">
            {/* <Navbar.Brand href="/Home">ROS Robot</Navbar.Brand> */}
            <Navbar.Brand>ROS Robot</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
    )
  }
}
