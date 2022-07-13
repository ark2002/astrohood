import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const location = useLocation();
  
  const { isAuth } = useSelector((state) => state.auth);

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate replace to="/signin" state={{ from: location }} />
  );
};

export { PrivateRoute };
