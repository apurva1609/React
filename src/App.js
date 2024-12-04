import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Cardd from './Components/Cardd';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Demo1 from './Components/Demo1';
import Textused from './Components/From/Textused';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import TestProps from './Components/TestProps';
// import logo from "./Assets/Images/image copy 37.png";
// import logo1 from "./Assets/Images/image copy 38.png";
// import logo2 from "./Assets/Images/image copy 39.png";
// import { Container,Row,Col } from 'react-bootstrap';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path='/Textused' element={<Textused/>}/>
          <Route path="/cardd" element={<Cardd />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/Demo1" element={<Demo1/>}/>
          
        </Routes>
      <Footer/>
    </BrowserRouter>

    

// props section//
      //  <Container>
      //   <Row>
      //     <Col md={4}>
      //       <TestProps 
      //         Title="Full stack Development in JAVA" 
      //         image={logo} Text="Duration:6 months" 
      //         Button="View Programs" 
      //       />
      //     </Col>

      //     <Col md={4}>
      //       <TestProps 
      //         Title="MEAN stack Development" 
      //         image={logo1} Text="Duration:6 months" 
      //         Button="View Programs" 
              
      //       />
      //     </Col>

      //     <Col md={4}>
      //       <TestProps 
      //         Title="PYTHON/Django Development" 
      //         image={logo2} Text="Duration:6 months" 
      //         Button="View Programs" 
      //       />
      //     </Col>
      //   </Row>
      //  </Container>                              
  );
}

export default App;
