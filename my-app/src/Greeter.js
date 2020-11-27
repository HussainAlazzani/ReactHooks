import React from "react";

const Greeter = ({ name, age, health = 10 }) => {
    return (
        <div>
            <h1>Hello {name}</h1>
            <p>You are {age} and you health is {health}</p>
        </div>
    );
};

export default Greeter;