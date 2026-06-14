"use client"
import { useState } from "react";

const Counter = () => {
    const [counter , setCoutner] = useState(0)
  
    return (
        <div>
            Counter : {counter}
            <button onClick={()=>{setCoutner(prev => prev + 1)}}>Increment</button>           
            <button onClick={()=>{setCoutner(prev => prev - 1)}}>Decrement</button>           
        </div>
    );
}

export default Counter;
