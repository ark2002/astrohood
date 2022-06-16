import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let location = useLocation();
  const { isAuth } = useSelector((store) => store.auth);

  return isAuth ? (
    children
  ) : (
    <Navigate replace to="/signin" state={{ from: location }} />
  );
};

export { PrivateRoute };
