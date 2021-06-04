import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../styles/header.scss';

export default function Header(){
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Item>
            <Nav.Link href="/" className="nav-item mx-5">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/settings" className="nav-item mx-5">Settings</Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}