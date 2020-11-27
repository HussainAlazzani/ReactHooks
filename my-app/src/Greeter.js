import React from "react";

const Greeter = ({ name, age, health = 10 }) => {
    const greet = () => {
        alert(`Hello ${name}`);
    };
    return (
        <div>
            <h1>Hello {name}</h1>
            <p>You are {age} and you health is {health}</p>
            {/* This is a react onClick. Notice the Capital C */}
            <button onClick={greet}>Click Me</button>
        </div>
    );
};

export default Greeter;