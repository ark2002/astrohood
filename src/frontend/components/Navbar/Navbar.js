import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, setTheme } from "../../slices";
import "./Navbar.css";

function Navbar() {
  const [listVisibility, setListVisibility] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTheme(localStorage.getItem("THEME") ?? "dark"));
  }, [dispatch]);

  const { currTheme } = useSelector((store) => store.theme);

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
              <span className="font__primary text__small">user</span>▼
            </li>
          </ul>
        </nav>
      </header>
      <div className="dropdown-list secondary__font text__small">
        {listVisibility && (
          <NavLink to="/">
            <li>Log-Out</li>
          </NavLink>
        )}
      </div>
    </>
  );
}

export { Navbar };
