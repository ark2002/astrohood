import "./App.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Router } from "./frontend/router/Router";
import { Navbar, SidebarMenu, Suggestions } from "./frontend/components";
import { matchPath, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();
  const { isAuth } = useSelector((store) => store.auth);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
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

      const allowSidebar = ["/explore", "/bookmarks", "/profile", "/", "/post"];

      if ((allowSidebar.includes(pathname) || isMatch) && isAuth) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    };
    sidebarDisplay(location.pathname);
  }, [isAuth, location.pathname]);

  return (
    <div className="App">
      <Navbar />
      {display ? (
        <div className="flex--row division__container">
          <SidebarMenu />
          <div className="router">
            <Router />
          </div>
          <Suggestions />
        </div>
      ) : (
        <div className="router">
          <Router />
        </div>
      )}
      <ToastContainer className="toast__style" />
    </div>
  );
}

export default App;
