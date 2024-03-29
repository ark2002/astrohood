import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { signUpHandler } from "../../slices";

import "./SignUpScreen.css";

function SignUpScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const [visibilityToggle, setVisibilityToggle] = useState(false);

  const handleSignUp = async (user) => {
    try {
      const response = await dispatch(signUpHandler(user));
      if (response?.payload.encodedToken) {
        toast.success("Sign-up Successful !", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          theme: "dark",
        });
        navigate(from, { replace: true });
      } else {
        toast.error("Sign-up Error : Try again !", {
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
    <div className="signup__container flex--column">
      <form
        className="signup__form flex--column"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp(user);
        }}
      >
        <h1 className="signup__header heading2 title primary__font">Sign-Up</h1>
        <input
          type="text"
          placeholder="First Name"
          className="input__txt username secondary__font"
          required
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input__txt username secondary__font"
          required
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Username"
          className="input__txt password secondary__font"
          required
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <div className="flex--row password-field">
          <input
            type={visibilityToggle ? "text" : "password"}
            placeholder="Password"
            className="input__txt password secondary__font"
            minLength="8"
            required
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <span
            className="material-icons"
            title={visibilityToggle ? "hide password" : "show password"}
            onMouseDown={() => setVisibilityToggle(true)}
            onMouseUp={() => setVisibilityToggle(false)}
          >
            {visibilityToggle ? "visibility" : "visibility_off"}
          </span>
        </div>
        <button className="btn btn-color--tertiary btn-font--secondary">
          Sign-up
        </button>
        <div className="login__bottom-container flex--row">
          <Link
            to="/signin"
            className="btn btn-color--primary btn-font--secondary text__small"
          >
            Existing account
          </Link>
          <span
            className="btn btn-transparent--primary btn-font--secondary text__small"
            onClick={(e) => {
              e.stopPropagation();
              setUser({
                firstName: "Random",
                lastName: "User",
                username: "randomuser",
                password: "randomuser123",
              });
            }}
          >
            Dummy Data
          </span>
        </div>
      </form>
    </div>
  );
}

export { SignUpScreen };
