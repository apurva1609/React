import React from 'react'
import {useState , useEffect} from 'react';
import axios from 'axios';
// import  useEffect  from 'react';
// import { Button } from 'react-bootstrap';
const Textused = () => {

    // const [text, setText] = useState("this is text")

    // const [demo, setDemo] = useState("this is text")
    const [demo, setDemo] = useState(0)
    useEffect(() => {
      setTimeout(() => {
          setDemo((demo) => demo + 1 );
  },1000);
    });
  return (
    <>
      <h1>hello {demo}</h1>

    </>
  );
};

export default Textused;
