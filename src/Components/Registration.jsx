import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Registration = () => {
  return (
    <>
    <Row className='d-flex justify-content-center'>
      <Card className='my-5 mx-5  ' style={{ width: '27rem' }}>
      <Card.Body >
        <h1 className='text-center my-4'>Ragistration</h1>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Control className=' py-2 my-3' type='text' placeholder='FirstName'/>
            </Col>
            <Col md={6}>
              <Form.Control className=' py-2 my-3' type='text' placeholder='LastName'/>
              </Col>
          </Row>
          <Form.Control className='py-2 my-3' type='text' placeholder='UserName'/>
          <Form.Control className='py-2 my-3' type='text' placeholder='PassWord'/>
          <Form.Control className='py-2 my-3' type='text' placeholder='Email'/>
          
        </Form>
        <Row>
          <Col md={1}>
            <input type='checkbox' value='checkbox'/>
          </Col>
          <Col md={8}>
            <p>I accept all legal conditions </p>
          </Col>
        </Row>
        <Button className='' type='login'>Submit</Button>
        
      </Card.Body>
    </Card>
    </Row>    
    </>
  )
}

export default Registration;
