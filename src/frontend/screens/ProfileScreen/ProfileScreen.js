import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  EditUserModal,
  FeedPostCard,
  ListModal,
  Loading,
} from "../../components";
import { useOnClickOutside } from "../../hooks";
import { getAllPostsHandler, getSingleUserHandler } from "../../slices";

import "./ProfileScreen.css";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  const { token, currUser } = useSelector((store) => store.auth);
  const { allUsers, userDetails } = useSelector((store) => store.user);
  const { posts } = useSelector((store) => store.post);

  const [userPosts, setUserPosts] = useState([]);
  const [isModal, setIsModal] = useState("");

  useOnClickOutside(ref, () => setIsModal(""));

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

  useEffect(() => {
    (async () => {
      await dispatch(getAllPostsHandler(token));
      await dispatch(
        getSingleUserHandler({ token, username: currUser.username })
      );
    })();
  }, [currUser, dispatch, token, allUsers]);

  useEffect(() => {
    setUserPosts(posts.filter((post) => post.username === currUser.username));
  }, [posts, currUser, allUsers]);

  return userDetails.username !== currUser.username ? (
    <Loading />
  ) : (
    <div>
      <div className="profilescreen flex--column secondary__font">
        <div className="profile__banner flex--row">
          <img className="profile__image" src={profileImg} alt="not found" />
        </div>
        <button
          className="edit__button secondary__font"
          onClick={() => setIsModal("Edit")}
        >
          Edit
        </button>
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
        <div className="profile__follow-details heading5 flex--row">
          <h1
            className="profile__following"
            onClick={() => setIsModal("Following")}
          >
            {following?.length} Following
          </h1>
          <h1
            className="profile__followers"
            onClick={() => setIsModal("Followers")}
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
      {isModal !== "" && (
        <div className="list-modal__container flex--row">
          <div ref={ref}>
            {isModal === "Edit" ? (
              <EditUserModal
                userDetails={userDetails}
                setIsModal={setIsModal}
              />
            ) : (
              <ListModal
                listModal={isModal}
                list={isModal === "Following" ? following : followers}
                setListModal={setIsModal}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export { ProfileScreen };
