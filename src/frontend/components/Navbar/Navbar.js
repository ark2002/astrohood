import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, setTheme, signOutHandler } from "../../slices";
import "./Navbar.css";
import { toast } from "react-toastify";

function Navbar() {
  const [listVisibility, setListVisibility] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setTheme(localStorage.getItem("THEME") ?? "dark"));
  }, [dispatch]);

  const handleSignOut = () => {
    dispatch(signOutHandler());
    navigate("/");
    toast.info("Signed Out !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const { currTheme } = useSelector((store) => store.theme);
  const { currUser, isAuth } = useSelector((store) => store.auth);
  return (
    <>
      <header className="header flex--row">
        <NavLink to="/">
          <div className="header__logo-container flex--row">
            <img
              src="/assets/zodiaclogo.png"
              alt="logo"
              className="logo__img"
            />
            <h2 className="header__logo">AstroHood</h2>
          </div>
        </NavLink>
        <div className="navbar__search-container flex--row">
          <input
            type="text"
            className="navbar__search input__txt"
            placeholder="Search"
          />
          <button className="navbar__search-btn btn">
            <span className="material-icons search__btn-icon">search</span>
          </button>
        </div>
        <nav className="navbar__nav flex--row">
          <ul>
            <li onClick={() => dispatch(toggleTheme())}>
              {currTheme === "dark" ? (
                <span className="material-icons" title="light-mode">
                  brightness_high
                </span>
              ) : (
                <span className="material-icons" title="light-mode">
                  dark_mode
                </span>
              )}
            </li>
            <li onClick={() => setListVisibility(!listVisibility)}>
              <span className="material-icons account-icon" title="Account">
                account_circle
              </span>
              <span className="font__primary text__small">
                {currUser !== null ? currUser.username : ""}
              </span>
              ▼
            </li>
          </ul>
        </nav>
      </header>
      {listVisibility &&
        (!isAuth ? (
          <div className="dropdown-list secondary__font text__small">
            <NavLink to="/signin" onClick={() => setListVisibility(false)}>
              <li>Sign-In</li>
            </NavLink>
            <NavLink to="/signup" onClick={() => setListVisibility(false)}>
              <li>Sign-Up</li>
            </NavLink>
          </div>
        ) : (
          <div className="dropdown-list secondary__font text__small">
            <NavLink to="/">
              <li onClick={() => handleSignOut()}>Log-Out</li>
            </NavLink>
          </div>
        ))}
    </>
  );
}

export { Navbar };
