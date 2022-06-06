import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBookmarksHandler,
  likeAPostHandler,
  removeFromBookmarksHandler,
  unlikeAPostHandler,
} from "../../slices";
import "./FeedPostCard.css";

const FeedPostCard = ({ post }) => {
  const dispatch = useDispatch();

  const {
    _id,
    username,
    content,
    comments,
    createdAt,
    likes: { likeCount, likedBy },
  } = post;

  const { currUser, token } = useSelector((store) => store.auth);
  const { bookmarks } = useSelector((store) => store.post);

  const getIslikedByCurrUser = () =>
    likedBy.find((user) => user.username === currUser.username) ? true : false;

  const getIsPostBookmarked = () => bookmarks.includes(_id);

  const isLikedByCurrUser = getIslikedByCurrUser();
  const isPostBookmarked = getIsPostBookmarked();

  const toggleLikeHandler = async () => {
    try {
      isLikedByCurrUser
        ? await dispatch(unlikeAPostHandler({ id: _id, token }))
        : await dispatch(likeAPostHandler({ id: _id, token }));
    } catch (error) {
      console.error(error);
    }
  };

  const bookmarkHandler = async () => {
    try {
      isPostBookmarked
        ? await dispatch(removeFromBookmarksHandler({ id: _id, token }))
        : await dispatch(addToBookmarksHandler({ id: _id, token }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex--row feedpostcard secondary__font">
      <div className="fd-postcard__aside">
        <img
          src="https://borchapartners.com/wp-content/uploads/2022/02/no-user-image.jpg"
          alt="profile__img"
          className="fd-profile--img"
        />
      </div>
      <div className="fd-postcard__main flex--column">
        <div className="fd-postcard__top flex--row">
          <h1 className="heading4">{username}</h1>
          <div className="fd-postcard__subheadings flex--row">
            <p>|</p>
            <p>
              <Moment fromNow>{createdAt}</Moment>
            </p>
          </div>
        </div>
        <div className="fd-postcard__content">{content}</div>
        <div className="fd-postcard__options flex--row">
          <div
            className={`flex--row option--like ${
              isLikedByCurrUser ? "post__liked" : ""
            }`}
          >
            {isLikedByCurrUser ? (
              <span
                className="material-icons option--like"
                onClick={() => toggleLikeHandler()}
              >
                favorite
              </span>
            ) : (
              <span
                className="material-icons option--like"
                onClick={() => toggleLikeHandler()}
              >
                favorite_border
              </span>
            )}
            <p>{likeCount}</p>
          </div>
          <div className="flex--row option--comment">
            <span className="material-icons">chat_bubble_outline</span>
            <p>{comments.length}</p>
          </div>
          {isPostBookmarked ? (
            <span
              className="material-icons post__bookmarked"
              onClick={() => bookmarkHandler()}
            >
              bookmark
            </span>
          ) : (
            <span
              className="material-icons option--bookmark"
              onClick={() => bookmarkHandler()}
            >
              bookmark_border
            </span>
          )}
          <span className="material-icons option--share">ios_share</span>
        </div>
      </div>
    </div>
  );
};

export { FeedPostCard };
