import React from 'react';
import { Container, Navbar, Nav, Button,Row,Col,Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import {index,handleSelect} from 'react-bootstrap';
import Icon from '../Assets/Images/blueimage.png';
import Map1 from '../Assets/Images/image copy 37.png';
import Map2 from '../Assets/Images/image copy 38.png';
import Map3 from '../Assets/Images/image copy 39.png';
import Map4 from '../Assets/Images/image copy 40.png';
import Map5 from '../Assets/Images/image copy 41.png';
const Navbar1 = () => {
  return (
    <>
      <Container fluid style={{}}>
      <Navbar expand="lg" bg="primary" className="bg-body-primary">
      <Container fluid bg="primary">
      <img className='rounded-circle' src={Icon} width={50} height={50} alt="Logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/Navbar"><Nav.Link href="#home" >Home</Nav.Link></Link>
            <Link to="/cardd"><Nav.Link href="#About">About</Nav.Link></Link>
            <Link to="/Textused/Tem"><Nav.Link href="#News">News</Nav.Link></Link> 
            <Link to="/contact"> <Nav.Link href="#Contact">Contact</Nav.Link></Link>
          </Nav>
          <Link to="/login">
            <Button variant="dark">Login</Button>
          </Link>
          <Link to="/registration">
            <Button variant="dark" className='ms-3'>Registration</Button>
          </Link>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
      

    <Container fluid>
      <Row>
        <Col md={12}>
      <Carousel >
      <Carousel.Item>
        <img src={Map1} className="w-100 img-fluid"/>
        <Carousel.Caption>
        <h3>Enhance</h3>
        <p>customer experience and drive sales with data-driven insights</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={Map2} className="w-100 img-fluid"/>
        <Carousel.Caption>
        <h3>Increase</h3>
        <p>the reach of your business through optimized Digital Marketing</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={Map3}className="w-100 img-fluid"/>
        <Carousel.Caption>
        <h3>Protect</h3>
          <p>data assets and mitigate and cybersecurity threats through secure websites</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={Map4} className="w-100 img-fluid"/>
        <Carousel.Caption>
        <h1>Embrace</h1>
          <p>innovation and adapt to market trends with updated solutions</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={Map5} className="w-100 img-fluid"/>
        <Carousel.Caption>
        <h3>Streamline</h3>
          <p>operations and boost productivity with IT automation</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Col>
     </Row>
    </Container>
    </Container>
    </>
  )
}

export default Navbar1;
