import React from "react";
import "./App.css";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
