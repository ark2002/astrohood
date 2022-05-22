import "./App.css";
import React from "react";
import { Router } from "./frontend/router/Router";
import { Navbar, SidebarMenu } from "./frontend/components";
import { useLocation } from "react-router-dom";

const sidebarDisplay = (pathname) => {
  if (
    pathname === "/explore" ||
    pathname === "/bookmarks" ||
    pathname === "/profile" ||
    pathname === "/feed"
  ) {
    return false;
  } else {
    return true;
  }
};

const flexToggle = (pathname) => {
  if (!sidebarDisplay(pathname)) {
    return "flex--row division__container";
  } else {
    return "";
  }
};

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <div className={flexToggle(location.pathname)}>
        {!sidebarDisplay(location.pathname) && <SidebarMenu />}
        <div className="router">
          <Router />
        </div>
      </div>
    </div>
  );
}

export default App;
