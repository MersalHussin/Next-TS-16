"use client"
import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
  
    return (
        <div className="card inline-block">
            <div className="text-lg font-semibold mb-3">
                Counter: <span className="text-blue-600">{counter}</span>
            </div>
            <div className="flex gap-2">
                <button 
                    onClick={() => setCounter(prev => prev + 1)}
                    className="btn btn-primary"
                >
                    Increment
                </button>
                <button 
                    onClick={() => setCounter(prev => prev - 1)}
                    className="btn btn-secondary"
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;
