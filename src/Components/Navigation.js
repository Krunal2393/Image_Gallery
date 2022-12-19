import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navigation() {
  return (
    <>
    
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="home">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href='Gallery'>Gallery</Nav.Link>
        <Nav.Link href='Mobile'>Mobile</Nav.Link>
        <Nav.Link href="Laptop">Laptop</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </>
  )
}
