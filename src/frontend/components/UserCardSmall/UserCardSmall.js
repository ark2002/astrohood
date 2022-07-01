import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { followUserHandler, makeSuggestions } from "../../slices";
import { getUnfollowedUsers } from "../../utils";
import "./UserCardSmall.css";

const UserCardSmall = ({ user }) => {
  const { username, profileImg } = user;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, currUser } = useSelector((store) => store.auth);
  const { allUsers } = useSelector((store) => store.user);

  const handleFollowUser = async () => {
    await dispatch(followUserHandler({ token, followUserId: username }));
    const unfollowedUsers = getUnfollowedUsers(allUsers, currUser.username);
    await dispatch(makeSuggestions(unfollowedUsers));
  };

  return (
    <div
      className="suggestion__card flex--row"
      onClick={() => navigate(`/user/${username}`)}
    >
      <img
        src={profileImg}
        className="suggestion__profile-img"
        alt="profile__img"
      />
      <h1 className="suggestion__username">{username}</h1>
      <button
        className="suggestion__follow-btn"
        onClick={(e) => {
          e.stopPropagation();
          handleFollowUser();
        }}
      >
        Follow
      </button>
    </div>
  );
};

export { UserCardSmall };
