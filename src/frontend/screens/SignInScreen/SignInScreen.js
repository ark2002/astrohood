import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { signInHandler } from "../../slices";

import "./SignInScreen.css";
import "react-toastify/dist/ReactToastify.css";

function SignInScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [passwordToggle, setPasswordToggle] = useState(false);
  const handleSignIn = async (user) => {
    try {
      const response = await dispatch(signInHandler(user));
      if (response?.payload.encodedToken) {
        toast.success("Sign-in Successful !", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          theme: "dark",
        });
        navigate(from, { replace: true });
      } else {
        toast.error("Sign-in Error : Try again !", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="login__container flex--column">
        <form
          className=" login__form flex--column"
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn(user);
          }}
        >
          <h1 className="login__header heading2 title primary__font">
            Sign-In
          </h1>
          <input
            type="text"
            placeholder="Username"
            className="input__txt username secondary__font"
            required
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <div className="flex--row password-field">
            <input
              type={passwordToggle ? "text" : "password"}
              placeholder="Password"
              className="input__txt password secondary__font"
              minLength="8"
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <span
              className="material-icons"
              title={passwordToggle ? "hide password" : "show password"}
              onMouseDown={() => setPasswordToggle(true)}
              onMouseUp={() => setPasswordToggle(false)}
            >
              {passwordToggle ? "visibility" : "visibility_off"}
            </span>
          </div>
          <button
            type="submit"
            className="btn btn-color--tertiary btn-font--secondary"
          >
            Sign-in
          </button>
          <div className="login__bottom-container flex--row">
            <Link
              to="/signup"
              className="btn btn-color--primary btn-font--secondary text__small"
            >
              New Account
            </Link>
            <button
              className="btn btn-transparent--primary btn-font--secondary text__small"
              onClick={(e) => {
                e.preventDefault();
                handleSignIn({
                  username: "farhanquareshi",
                  password: "farhanquareshi123",
                });
              }}
            >
              Guest Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export { SignInScreen };
