import { useEffect, useRef, useState } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useOnClickOutside } from "../../hooks";
import { getCommentsService } from "../../services";
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
  const navigate = useNavigate();
  const location = useLocation();

  useOnClickOutside(ref, () => setOptionModalOpen(false));

  const [optionModalOpen, setOptionModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const {
    _id,
    username,
    content,
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
  const isOnPostScreen = matchPath(
    {
      path: "/post/:postId",
      exact: true,
      strict: true,
    },
    location.pathname
  )
    ? true
    : false;

  useEffect(() => {
    (async () => {
      const data = await getCommentsService(token, _id);
      setComments(data);
    })();
  }, [_id, token]);

  const toggleLikeHandler = async (e) => {
    e.stopPropagation();
    try {
      isLikedByCurrUser
        ? await dispatch(unlikeAPostHandler({ id: _id, token }))
        : await dispatch(likeAPostHandler({ id: _id, token }));
    } catch (error) {
      console.error(error);
    }
  };

  const bookmarkHandler = async (e) => {
    e.stopPropagation();
    try {
      isPostBookmarked
        ? await dispatch(removeFromBookmarksHandler({ id: _id, token }))
        : await dispatch(addToBookmarksHandler({ id: _id, token }));
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCurrentPostHandler = async (e) => {
    e.stopPropagation();
    try {
      await dispatch(deletePostHandler({ token, id: _id }));
      toast.success("Post Deleted!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        theme: "dark",
      });
      if (isOnPostScreen) {
        navigate("/feed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const userClickHandler = (e) => {
    e.stopPropagation();
    isPostedByCurrentUser
      ? navigate("/profile")
      : navigate(`/user/${username}`);
  };

  return (
    <>
      <div
        className={`feedpostcard__container ${
          isOnPostScreen ? "" : "show--pointer"
        }`}
        onClick={() => navigate(`/post/${_id}`)}
      >
        <div className="flex--row feedpostcard secondary__font">
          <div className="fd-postcard__aside">
            <img
              src={isPostedByCurrentUser ? currUser.profileImg : profileImg}
              alt="profile__img"
              className="fd-profile--img"
              onClick={(e) => userClickHandler(e)}
            />
          </div>
          <div className="fd-postcard__main flex--column">
            <div className="fd-postcard__top flex--row">
              <h1 className="heading4" onClick={(e) => userClickHandler(e)}>
                {username}
              </h1>
              <div className="fd-postcard__subheadings flex--row">
                <p>|</p>
                <p>
                  <Moment fromNow>{createdAt}</Moment>
                </p>
              </div>
              <div className="flex--row fd-postcard__modal-btn" ref={ref}>
                {isPostedByCurrentUser && (
                  <span
                    className="material-icons"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOptionModalOpen(!optionModalOpen);
                    }}
                  >
                    more_vert
                  </span>
                )}
                {optionModalOpen && (
                  <div className="options__modal flex--column secondary__Font">
                    <p
                      className="modal__options"
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditModalOpen(true);
                      }}
                    >
                      Edit
                    </p>
                    <p
                      className="modal__options"
                      onClick={(e) => deleteCurrentPostHandler(e)}
                    >
                      Delete
                    </p>
                  </div>
                )}
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
                    onClick={(e) => toggleLikeHandler(e)}
                  >
                    favorite
                  </span>
                ) : (
                  <span
                    className="material-icons option--like"
                    onClick={(e) => toggleLikeHandler(e)}
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
                  onClick={(e) => bookmarkHandler(e)}
                >
                  bookmark
                </span>
              ) : (
                <span
                  className="material-icons option--bookmark"
                  onClick={(e) => bookmarkHandler(e)}
                >
                  bookmark_border
                </span>
              )}
              <span
                className="material-icons option--share"
                onClick={(e) => e.stopPropagation()}
              >
                ios_share
              </span>
            </div>
          </div>
        </div>
      </div>
      {editModalOpen && (
        <div
          className="editpostmodal__container flex--column"
          onClick={(e) => {
            e.stopPropagation();
            setEditModalOpen(false);
          }}
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
