import React from "react";
import './App.css';
import Navbar from "./Navbar";
import Greeter from "./Greeter";
import Counter from "./Counter";
import OddOrEven from "./OddOrEven";
import Cart from "./Cart";

const items = [
  { id: 1, name: "Taco Seasoning", price: 2.25, qty: 2 },
  { id: 2, name: "Pinto Beans", price: 1.99, qty: 3 },
  { id: 3, name: "Sour cream", price: 3.50, qty: 1 }
];

function App() {
  return (
    <div>
      <Cart initialItems={items} />
      <Counter step={5} />
      <OddOrEven />
      <Navbar />
      <Greeter name="Mark" age="7" />
      <Greeter name="Lazar" age="25" health={8} />
    </div>
  );
}

export default App;
