import "./App.css";
import React from "react";
import { Router } from "./frontend/router/Router";
import { Footer, Navbar } from "./frontend/components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
