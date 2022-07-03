import "./App.css";
import React from "react";
import { useSelector } from "react-redux";
import { Router } from "./frontend/router/Router";
import { Navbar, SidebarMenu, Suggestions } from "./frontend/components";
import { ToastContainer } from "react-toastify";

function App() {
  const { isAuth } = useSelector((store) => store.auth);

  return (
    <div className="App">
      <Navbar />
      <div className={isAuth ? "flex--row division__container" : ""}>
        <SidebarMenu />
        <div className="router">
          <Router />
        </div>
        {isAuth && <Suggestions />}
      </div>
      <ToastContainer className="toast__style" />
    </div>
  );
}

export default App;
