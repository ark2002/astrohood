import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import { SidebarMenu } from "../SidebarMenu/SidebarMenu";
import { Suggestions } from "../Suggestions/Suggestions";
import { Router } from "../../router/Router";

import "./Main.css";

const Main = () => {
  const { isAuth } = useSelector((store) => store.auth);
  return (
    <div className="main">
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
};

export { Main };
