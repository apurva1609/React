import React, { useEffect, useState } from 'react';
import axios  from 'axios';
// import userData from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Tem = () => {
  const[data, setUserData] = useState([]);
  // const[data,setData]=useState({});
  const [msgg, setText] = useState("hiiiiii"); //Use Update
  // setUserData("");
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => {
        setUserData(res.data); 
        // setData(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Container>
        <Row>
          {/* {userData.map((product, id) => (
            <Col lg={3} key={id} >
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <h3>{product.body}</h3>
                  <Button type="button"
                onClick={() => setText("Hello")}
            >Go somewhere</Button>
                </Card.Body>
              </Card>
              </Col>
          ))} */}

<Col lg={3} >
              <Card style={{ width: '18rem' }} className='mt-4'>
                <Card.Body >
                  <Card.Title >{data.title}</Card.Title>
                  <h3>{data.body}</h3>
                  {/* <h4>hiiiiii</h4> */}
                  {/* <Button variant="primary">Go somewhere</Button> */}
                  <Button type="button"
                onClick={() => setText("Hello")}
            >Go somewhere</Button>
                </Card.Body>
              </Card>
              </Col>
        </Row>
      </Container>
    </>
  )
}
export default Tem;