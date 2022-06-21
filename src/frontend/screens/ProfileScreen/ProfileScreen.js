import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FeedPostCard } from "../../components";
import { getAllPostsHandler } from "../../slices";
import "./ProfileScreen.css";

const ProfileScreen = () => {
  const [userPosts, setUserPosts] = useState([]);
  const dispatch = useDispatch();

  const {
    token,
    currUser: {
      profileImg,
      username,
      firstName,
      lastName,
      bio,
      following,
      followers,
      portfolioLink,
    },
  } = useSelector((store) => store.auth);
  const { posts } = useSelector((store) => store.post);

  useEffect(() => {
    dispatch(getAllPostsHandler(token));
  }, [dispatch, token]);

  useEffect(() => {
    setUserPosts(posts.filter((post) => post.username === username));
  }, [posts, username]);

  return (
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
          Portfolio <span class="material-icons">open_in_new</span>
        </a>
        <div className="profile__follow-details heading5 flex--row">
          <h1 className="profile__following">{following.length} Following</h1>
          <h1 className="profile__followers">{followers.length} Followers</h1>
        </div>
      </div>
      <div className="profile__post-list">
        {userPosts === []
          ? null
          : userPosts
              .map((post) => <FeedPostCard post={post} key={post._id} />)
              .reverse()}
      </div>
    </>
  );
};

export { ProfileScreen };
