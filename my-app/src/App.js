import React from "react";
import './App.css';
import Navbar from "./Navbar";
import Greeter from "./Greeter";

function App() {
  return (
    <div>
      <Navbar />
      <Greeter name="Mark" age="7"/>
      <Greeter name="Lazar" age="25" health={8}/>
    </div>
  );
}

export default App;
