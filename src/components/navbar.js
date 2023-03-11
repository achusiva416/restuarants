import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='p-2'>
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:'22px'}} m={2} >Foodie's Haven</Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link href="#home" style={{fontSize:'16px'}}>Home</Nav.Link>
            <Nav.Link href="#features" style={{fontSize:'16px'}}>Features</Nav.Link>
            <Nav.Link href="#pricing" style={{fontSize:'16px'}}>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Header;