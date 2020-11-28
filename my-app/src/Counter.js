import React, { useState } from "react";
import "./Counter.css";

const Counter = ({ step = 1 }) => {
    const [count, setCount] = useState(0);
    return (
        <div className="Counter">
            <h2>{count}</h2>
            <button onClick={() => setCount(count + step)}>Add {step}</button>
        </div>
    );
};

export default Counter;