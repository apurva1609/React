import React from 'react'
import { Container,Row,Card,Col } from 'react-bootstrap';
import { FaHouseChimney } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
// import Icon from 'react-bootstrap/Icon';

const Footer = () => {
  return (
    <>
<Container fluid className='gb-dark'>
    <Card>
        <Card.Body className='bg-dark text-white'>
            <Container>
                <Row>
                    <Col md={3}>
                        <h5>COMPANY NAME</h5>
                        <p>Here you can use rows and <br/>
                             columns to organize your<br/>
                             footer content. Lorem <br/>
                             ipsum dolor sit amet,<br/>
                             consectetur adipisicing elit.</p>
                    </Col>

                    <Col md={3} className='mt-3 mt-md-0 '>
                        <h5>BRANCHES</h5>
                        <h6>MDBootstrap</h6>
                        <h6>MDWordpress</h6>
                        <h6>Brandflow</h6>
                        <h6>Bootstrap</h6>
                        <h6>Angular</h6>
                    </Col>

                    <Col md={3} className='mt-3 mt-md-0'>
                        <h5>Useful links</h5>
                        <h6>Your account</h6>
                        <h6>Become an Affiliate</h6>
                        <h6>Shipping Rates</h6>
                        <h6>Help</h6>
                    </Col>
                    <Col md={3} className='mt-3 mt-md-0'>
                        <h5>CONTACT</h5>
                        <h6><FaHouseChimney /> New York, NY 10012, US</h6>
                        <h6><MdEmail /> info@example.com</h6>
                        <h6><FaPhoneVolume /> + 01 234 567 88</h6>
                        <h6><FaPhoneVolume /> + 01 234 567 89</h6>
                    </Col>
                    <Col md={12 } className='text-center mt-3 mt-md-0'>
                        <p>Copyright © 2024 React  Bootstrap. Built with Docusaurus.</p>
                    </Col>
                
                </Row>
            </Container>
        </Card.Body>
    </Card>
</Container>
    </>
  )
}

export default Footer;
