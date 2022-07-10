import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate replace to="/signin" state={{ from: location }} />
  );
};

export { PrivateRoute };
