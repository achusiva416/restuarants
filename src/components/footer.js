import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Facebook,Instagram,Twitter} from '@mui/icons-material';
function Footer() {
    return (
      <footer className="bg-dark">
        <Container className='py-4'>
          <Row style={{color:'#fff'}}>
            <Col md={4}>
              <h5>About Us</h5>
              <p>We are a company that does cool things.</p>
            </Col>
            <Col md={4}>
              <h5>Contact Us</h5>
              <p>123 Main St</p>
              <p>Anytown, USA</p>
            </Col>
            <Col md={4}>
              <h5>Follow Us</h5>
              <ul className="list-unstyled" >
                <li><a href="#"style={{textDecoration:'none'}}><Twitter></Twitter>Twitter</a></li>
                <li><a href="#"style={{textDecoration:'none'}}><Facebook/>Facebook</a></li>
                <li><a href="#"style={{textDecoration:'none'}}><Instagram/>Instagram</a></li>
              </ul>
            </Col>
          </Row>
          <Row style={{color:'#fff'}}>
            <Col>
              <hr />
              <p className="text-center">&copy; {new Date().getFullYear()} My Company</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
  export default Footer;