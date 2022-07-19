import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { FeedPostCard, ListModal, Loading } from "../../components";
import { useOnClickOutside } from "../../hooks";
import {
  followUserHandler,
  getSingleUserHandler,
  unFollowUserHandler,
} from "../../slices";

import "./UserScreen.css";

const UserScreen = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const { userId } = useParams();

  const { token, currUser } = useSelector((store) => store.auth);
  const { allUsers, userDetails } = useSelector((store) => store.user);
  const { posts } = useSelector((store) => store.post);

  useOnClickOutside(ref, () => setListModal(""));

  const {
    profileImg,
    username,
    firstName,
    lastName,
    bio,
    following,
    followers,
    portfolioLink,
  } = userDetails;

  const [userPosts, setUserPosts] = useState([]);
  const [listModal, setListModal] = useState("");

  useEffect(() => {
    (async () => {
      await dispatch(getSingleUserHandler({ token, username: userId }));
    })();
  }, [allUsers, dispatch, token, userId]);

  useEffect(() => {
    setUserPosts(posts.filter((post) => post.username === userId));
  }, [allUsers, currUser, following, posts, userId]);

  const handleFollowUser = async () => {
    await dispatch(followUserHandler({ token, followUserId: username }));
    toast.success(`Followed ${username} !`, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      theme: "dark",
    });
  };

  const handleUnfollowUser = async () => {
    await dispatch(unFollowUserHandler({ token, followUserId: username }));
    toast.info(`Unfollowed ${username} !`, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      theme: "dark",
    });
  };

  return userDetails.username !== userId ? (
    <Loading />
  ) : (
    <>
      <div className="profilescreen flex--column secondary__font">
        <div className="profile__banner flex--column">
          <img className="profile__image" src={profileImg} alt="not found" />
        </div>
        <h1 className="profile__username">@{username}</h1>
        <div className="profile__name flex--row heading4">
          <h1 className="profile__first-name">{firstName}</h1>
          <h1 className="profile__last-name">{lastName}</h1>
        </div>
        <p className="profile__bio">{bio}</p>
        <a
          href={portfolioLink}
          target="_blank"
          rel="noreferrer"
          className="portfolio__link"
        >
          Portfolio <span className="material-icons">open_in_new</span>
        </a>
        <div className="userprofile__follow-details heading5 flex--row">
          <h1
            className="profile__following"
            onClick={() => setListModal("Following")}
          >
            {following?.length} Following
          </h1>
          <div>
            {followers.some((user) => user.username === currUser.username) ? (
              <button
                className="unfollow-btn"
                onClick={() => handleUnfollowUser()}
              >
                Unfollow
              </button>
            ) : (
              <button
                className="suggestion__follow-btn"
                onClick={() => handleFollowUser()}
              >
                Follow
              </button>
            )}
          </div>
          <h1
            className="profile__followers"
            onClick={() => setListModal("Followers")}
          >
            {followers?.length} Followers
          </h1>
        </div>
      </div>
      <div className="profile__post-list">
        {userPosts === []
          ? null
          : userPosts
              .map((post) => <FeedPostCard post={post} key={post._id} />)
              .reverse()}
      </div>
      {listModal !== "" && (
        <div className="list-modal__container flex--row">
          <div ref={ref}>
            <ListModal
              listModal={listModal}
              list={listModal === "Following" ? following : followers}
              setListModal={setListModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export { UserScreen };
