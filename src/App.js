import "./App.css";
import React from "react";
import { Router } from "./frontend/router/Router";
import { Navbar, SidebarMenu, Suggestions } from "./frontend/components";
import { matchPath, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const sidebarDisplay = (pathname) => {
  const isMatch =
    matchPath(
      {
        path: "/post/:postId",
        exact: true,
        strict: true,
      },
      pathname
    ) ||
    matchPath(
      {
        path: "/user/:userId",
        exact: true,
        strict: true,
      },
      pathname
    )
      ? true
      : false;

  const allowSidebar = ["/explore", "/bookmarks", "/profile", "/feed", "/post"];

  if (allowSidebar.includes(pathname) || isMatch) {
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
        {!sidebarDisplay(location.pathname) && <Suggestions />}
      </div>
      <ToastContainer className="toast__style" />
    </div>
  );
}

export default App;
