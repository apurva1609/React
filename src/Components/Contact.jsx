import React from 'react'
import { Col, Container, Row ,Form,InputGroup} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaUser,FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
const Contact = () => {
  return (
    <>
      <h1 className='text-center '>Contact</h1>
      <h5 className='text-center text-danger'>Let’s Work Together!</h5>
      <h1 className='text-center text-danger'>Tell us what you are Looking for!</h1>
      <Container>
        <Row>
            <Col md={11} className='mx-auto'>
                <Card >
                    <Card.Body className='bg-primary '>
                        <Row>
                        <Col md={4} >
                            <InputGroup>
                            <Form.Control className='pb-4' type='text'placeholder='Name* 'aria-label="Name"/>
                            <InputGroup.Text >
                                <FaUser />
                            </InputGroup.Text>
                            </InputGroup>
                            
                        </Col>
                        <Col md={4} className="mt-3 mt-md-0">
                            <InputGroup>
                                <Form.Control className='pb-4' placeholder='Email*'/>
                                <InputGroup.Text>
                                    <MdEmail />
                                </InputGroup.Text>
                            </InputGroup>
                        </Col>
                            
                        <Col md={4} className="mt-3 mt-md-0">
                            <InputGroup>
                                <Form.Control className='pb-4' type='text'placeholder='Phone*'/>
                                <InputGroup.Text>
                                   <FaPhone />
                                </InputGroup.Text>
                            </InputGroup>
                        </Col> 
                        <Col md={12} className='mt-5'>
                            <InputGroup>
                                <Form.Control className='pb-4' type='text' placeholder='Website'/>
                                <InputGroup.Text>
                                    <RiComputerLine />
                                </InputGroup.Text>
                            </InputGroup>
                        </Col>
                        <Col md={12} className='mt-5'>
                            <InputGroup>
                                <Form.Control className='pb-5' type='text' placeholder='Your Message...'/>
                                <InputGroup.Text>

                                </InputGroup.Text>
                            </InputGroup>
                        </Col>
                        
                        </Row>
                        
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact;
