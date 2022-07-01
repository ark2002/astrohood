import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./ListModal.css";

const ListModal = ({ listModal, list, setListModal }) => {
  const navigate = useNavigate();

  const { currUser } = useSelector((store) => store.auth);

  const listClickHandler = (username) => {
    setListModal("");
    username === currUser.username
      ? navigate("/profile")
      : navigate(`/user/${username}`);
  };

  return (
    <div className="list-modal">
      <div className="list-modal__header flex--row">
        <h1 className="heading3 list__title">{listModal}</h1>
        <span className="material-icons" onClick={() => setListModal("")}>
          close
        </span>
      </div>
      {list.map((user) => (
        <div
          className="suggestion__card list__card flex--row"
          onClick={() => listClickHandler(user.username)}
          key={user.username}
        >
          <img
            src={user.profileImg}
            className="suggestion__profile-img"
            alt="profile__img"
          />
          <h1 className="suggestion__username">{user.username}</h1>
        </div>
      ))}
    </div>
  );
};

export { ListModal };
