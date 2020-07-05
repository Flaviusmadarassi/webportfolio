import React from "react";
import "./App.css";
import { Header, Home, About, Contact } from "./components";

function App() {
  return (
    <div className="App">
      <div className="overlay">
        <Header />
        <Home />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
