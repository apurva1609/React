import React from 'react'
import  { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
const Textused = () => {

    const [count, setCount] = useState(0); //useEffect


    return (
        <div>
            <h1>Count: {count}</h1>

             <Button type='button' onClick={() => setCount(count + 1)}>Increment</Button>

             <Button className='mx-2' type='button' onClick={() => setCount(count - 1)}>decrement</Button>
        </div>
    )
}
export default Textused;




