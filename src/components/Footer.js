import React from 'react';
import * as Components from '../components';
import ImgHello from '../assets/images/img-hello.png';
import ImgArrow from '../assets/images/ic-arrow-up.svg';
import { Container, Button, Row, Col, Nav } from 'react-bootstrap';

export const Footer = () => {

  const handleClick = () => window.scrollTo(0, 0);

  return (
    <footer className='footer'>
          <div className='footer-top'>
            <Container>
              <h3>Are you an artist?</h3>
              <Button variant='chat'>Tell us about you</Button>
              <Row >
                <Col md={6} lg={4}>
                  <p> The Offices 4, One Central  Dubai, United Arab Emirates
                  </p>
                </Col>
                <Col md={6} lg={4}>
                  <Components.Icon src={ImgHello} />
                </Col>
                <Col md={12} lg={4}>
                  <Nav>
                      <Nav.Link >Instagram</Nav.Link>
                      <Nav.Link >Twitter</Nav.Link>
                      <Nav.Link >Blog</Nav.Link>
                  </Nav>
                </Col>
              </Row>
            </Container>
          </div>
          <div className='footer-bottom'>
            <Container>
              <Row >
                  <Col sm={6} md={4}>
                    <p>All right reserved.</p>
                  </Col>
                  <Col sm={6} md={4}>
                      <Nav.Link className='scroll' onClick={handleClick}><Components.Icon src={ImgArrow} /></Nav.Link>
                  </Col>
                  <Col md={4}>
                    <Nav>
                        <Nav.Link >FAQ</Nav.Link>
                        <Nav.Link >Terms</Nav.Link>
                        <Nav.Link >Policy</Nav.Link>
                    </Nav>
                  </Col>
                </Row>
              </Container>
          </div>
    </footer>
  )
};
