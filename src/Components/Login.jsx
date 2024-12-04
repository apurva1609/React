import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
const Login = () => {
  return (
    <>
    <Row className='d-flex justify-content-center'>
      <Card className='my-5 mx-5 ' style={{ width: '27rem' }}>
      <Card.Body >
        <h1 className='text-center my-4'>Login</h1>
        <Form>
          <Form.Control className='py-3 my-4' type='Email' placeholder='EmailAddres or Phone'/>
          <Form.Control className='py-3 my-4' type='Email' placeholder='PassWord'/>
        </Form>
        <Button className='text-center w-100 my-3 ' type='login'>login</Button>
        <p className='text-center mt-5'><b>Forgot PassWord?</b></p>
        <p className='text-center my-4'><b>Don't have an account? Sign up</b>  </p>
      </Card.Body>
    </Card>
    </Row>
    </>
  )
}

export default Login;
