import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Computer from "../Assets/Images/image copy 43.png";
import Computer1 from '../Assets/Images/image copy 42.png';
import Computer2 from '../Assets/Images/image copy 44.png';
// import Computer2 from '../Assets/Images/image copy 44.png ';
// import Computer3 from '../Assets/Images/istockphoto2.webp';
const Cardd = () => {
  return (
    <>
      <Container>
        <Row className="my-5">
          <Col md={12}>
          <h1 className="text-primary text-center  my-5"><b>Expert Developar</b></h1>
          <Row>
          <Col md={6} sm={6} lg={4} className="my-3 g-4">
            <Card className="h-100 " style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Computer1} />
              <Card.Body className="text-center">
                <Card.Title className="text-danger">Full stack Development in JAVA</Card.Title>
                <h5>Duration:6 months</h5>
                <h5>Fees: 59999INR</h5>
                <Button >View Programs</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} sm={6} lg={4} className=" my-3">
            <Card className="h-100" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Computer} />
              <Card.Body className="text-center">
                <Card.Title className="text-danger mb-5 ">MEAN stack Development</Card.Title>
                <h5>Duration:6 months</h5>
                <h5>Fees: 59999INR</h5>
                <Button >View Programs</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} sm={6} lg={4} className=" my-3">
            <Card className="h-100 " style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Computer2}/>
              <Card.Body className="text-center">
                <Card.Title className="text-danger mb-5">MARN stack Development</Card.Title>
                <h5>Duration:6 months</h5>
                <h5>Fees: 59999INR</h5>
                <Button >View Programs</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} sm={6} lg={4} className=" my-3">
            <Card className="h-100 " style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Computer} />
              <Card.Body className="text-center">
                <Card.Title className="text-danger">PYTHON/Django Development</Card.Title>
                <h5>Duration:6 months</h5>
                <h5>Fees: 59999INR</h5>
                <Button >View Programs</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} sm={6} lg={4} className=" my-3">
            <Card className="h-100 " style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Computer1} />
              <Card.Body className="text-center">
                <Card.Title className="text-danger">Full stack Development in PHP</Card.Title>
                <h5>Duration:6 months</h5>
                <h5>Fees: 59999INR</h5>
                <Button >View Programs</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} sm={6} lg={4} className=" my-3">
            <Card className="h-100 " style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Computer2} />
              <Card.Body className="text-center">
                <Card.Title className="text-danger">PYTHON/Data science Development</Card.Title>
                <h5>Duration:6 months</h5>
                <h5>Fees: 59999INR</h5>
                <Button >View Programs</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col md={4}>
            <Card className="h-100" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Computer3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Computer3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Computer3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col> */}
          </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cardd;
