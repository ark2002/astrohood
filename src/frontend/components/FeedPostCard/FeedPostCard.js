import { useRef, useState } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { useOnClickOutside } from "../../hooks";
import {
  addToBookmarksHandler,
  deletePostHandler,
  likeAPostHandler,
  removeFromBookmarksHandler,
  unlikeAPostHandler,
} from "../../slices";
import { EditPostModal } from "../EditPostModal/EditPostModal";
import "./FeedPostCard.css";

const FeedPostCard = ({ post }) => {
  const dispatch = useDispatch();
  const ref = useRef();

  useOnClickOutside(ref, () => setOptionModalOpen(false));

  const [optionModalOpen, setOptionModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const {
    _id,
    username,
    content,
    comments,
    createdAt,
    likes: { likeCount, likedBy },
    profileImg,
  } = post;

  const { currUser, token } = useSelector((store) => store.auth);
  const { bookmarks } = useSelector((store) => store.post);

  const getIslikedByCurrUser = () =>
    likedBy.find((user) => user.username === currUser.username) ? true : false;

  const getIsPostBookmarked = () => bookmarks.includes(_id);

  const getIsPostedByCurrentUser = () =>
    username === currUser.username ? true : false;

  const isLikedByCurrUser = getIslikedByCurrUser();
  const isPostBookmarked = getIsPostBookmarked();
  const isPostedByCurrentUser = getIsPostedByCurrentUser();

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

  const deleteCurrentPostHandler = async () => {
    try {
      await dispatch(deletePostHandler({ token, id: _id }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="feedpostcard__container">
        <div className="flex--row feedpostcard secondary__font">
          <div className="fd-postcard__aside">
            <img
              src={
                username === currUser.username
                  ? currUser.profileImg
                  : profileImg
              }
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
              {isPostedByCurrentUser && (
                <span
                  className="material-icons"
                  onClick={() => setOptionModalOpen(!optionModalOpen)}
                >
                  more_vert
                </span>
              )}
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
        {optionModalOpen && (
          <div
            className="options__modal flex--column secondary__Font"
            ref={ref}
          >
            <p
              className="modal__options"
              onClick={() => setEditModalOpen(true)}
            >
              Edit
            </p>
            <p
              className="modal__options"
              onClick={() => deleteCurrentPostHandler()}
            >
              Delete
            </p>
          </div>
        )}
      </div>
      {editModalOpen && (
        <div
          className="editpostmodal__container flex--column"
          onClick={() => setEditModalOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <EditPostModal post={post} setEditModalOpen={setEditModalOpen} />
          </div>
        </div>
      )}
    </>
  );
};

export { FeedPostCard };
