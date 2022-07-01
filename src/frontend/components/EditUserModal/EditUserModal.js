import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserDetailsHandler } from "../../slices";
import "./EditUserModal.css";

const EditUserModal = ({ userDetails, setIsModal }) => {
  const { profileImg, username } = userDetails;
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);

  const [user, setUser] = useState({ ...userDetails });
  const { firstName, lastName, bio, portfolioLink } = user;

  const editUserSubmitHandler = async (e, user) => {
    e.preventDefault();
    await dispatch(editUserDetailsHandler({ token, userData: user }));
    setIsModal("");
  };

  return (
    <form
      className="edit-profile__modal flex--column secondary__font"
      onSubmit={(e) => editUserSubmitHandler(e, user)}
    >
      <div className="edit-modal__top flex--row">
        <img className="modal__profile-img" src={profileImg} alt="not found" />
        <h1 className="modal__username">@{username}</h1>
        <span className="material-icons" onClick={() => setIsModal("")}>
          close
        </span>
      </div>
      <div className="edit-modal__name flex--row">
        <div className="edit-modal__firstname flex--column">
          <p className="input__label">First Name:</p>
          <input
            type="text"
            placeholder="First Name"
            className="input__small secondary__font"
            maxLength="15"
            required
            value={firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
        </div>
        <div className="edit-modal__lastname flex--column">
          <p className="input__label">Last Name:</p>
          <input
            type="text"
            placeholder="Last Name"
            className="input__small username secondary__font"
            maxLength="15"
            value={lastName}
            required
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </div>
      </div>
      <div className="edit-modal__bio">
        <p className="input__label">Bio:</p>
        <textarea
          className="input__textbox secondary__font"
          placeholder="Write Your Bio"
          required
          maxLength="90"
          value={bio}
          onChange={(e) => setUser({ ...user, bio: e.target.value })}
        />
      </div>
      <div className="edit-modal__portfolio">
        <p className="input__label">Porfolio Link:</p>
        <input
          type="text"
          placeholder="www.portfolio.com"
          className="input__large username secondary__font"
          maxLength="15"
          required
          value={portfolioLink}
          onChange={(e) => setUser({ ...user, portfolioLink: e.target.value })}
        />
      </div>
      <div className="edit-modal__buttons flex--row">
        <button
          className="modal__cancel secondary__font"
          onClick={() => setIsModal("")}
        >
          Cancel
        </button>
        <button className="modal__save secondary__font" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export { EditUserModal };
