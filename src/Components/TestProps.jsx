import React from 'react'
import {Button,Card } from 'react-bootstrap';

const TestProps = (props) => {
  return (
    <>
      <Card className='h-100' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          {props.Text}
        </Card.Text>
        <Button className='mt-3' variant="primary">{props.Button} </Button>
      </Card.Body>
    </Card>  
    </>
  )
}

export default TestProps;
