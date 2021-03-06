import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./SidebarMenu.css";

const SidebarMenu = () => {
  const { isAuth } = useSelector((store) => store.auth);

  const optionSelected = ({ isActive }) => {
    return "sidebar__option" + (isActive ? "--selected" : "") + " flex--row";
  };

  return (
    isAuth && (
      <nav className="sidebar__container flex--column primary__font">
        <NavLink to="/feed" className={optionSelected}>
          <span className="material-icons sidebar__option-icon">home</span>
          <span className="sidebar__option-text">Home</span>
        </NavLink>
        <NavLink to="/explore" className={optionSelected}>
          <span className="material-icons sidebar__option-icon">label</span>
          <span className="sidebar__option-text">Explore</span>
        </NavLink>
        <NavLink to="/bookmarks" className={optionSelected}>
          <span className="material-icons sidebar__option-icon">bookmarks</span>
          <span className="sidebar__option-text">Bookmarks</span>
        </NavLink>
        <NavLink to="/profile" className={optionSelected}>
          <span className="material-icons sidebar__option-icon">person</span>
          <span className="sidebar__option-text">Profile</span>
        </NavLink>
      </nav>
    )
  );
};

export { SidebarMenu };
