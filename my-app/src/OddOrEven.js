import React, { useState } from "react";

// Faulty. Need to pass in the count value from Counter component
const OddOrEven = () => {
    const [isEven, setIsEven] = useState(true);
    const printState = (num) => {
        setIsEven((num % 2) ? "Odd" : "Even");
    };
    let num = 1;
    return (
        <h2 style={{backgroundColor: "red"}} onClick={() => printState(num)}>State? {isEven}</h2>
    );
};

export default OddOrEven;