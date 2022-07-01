import { useState } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteACommentHandler } from "../../slices";
import { EditCommentModal } from "../EditCommentModal/EditCommentModal";
import "./PostCommentCard.css";

const PostCommentCard = ({ comment, postId }) => {
  const { profileImg, username, text, createdAt, _id } = comment;
  const { token, currUser } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [editModalOpen, setEditModalOpen] = useState(false);

  const getIsCommentedByCurrentUser = () =>
    username === currUser.username ? true : false;
  const isCommentedByCurrentUser = getIsCommentedByCurrentUser();

  const deleteCurrentCommentHandler = async () => {
    try {
      await dispatch(deleteACommentHandler({ token, commentId: _id, postId }));
      toast.success("Comment Deleted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="post__commentCard flex--row secondary__font">
        <div className="commentCard__aside">
          <img
            src={isCommentedByCurrentUser ? currUser.profileImg : profileImg}
            alt="profile__img"
            className="comment-profile--img"
          />
        </div>
        <div className="commentCard__main flex--column">
          <div className="commentCard__top flex--row">
            <h1 className="heading4">{username}</h1>
            <div className="commentCard__subheadings flex--row">
              <p>|</p>
              <p>
                <Moment fromNow>{createdAt}</Moment>
              </p>
            </div>
            {isCommentedByCurrentUser && (
              <div className="commentCard__options">
                <span
                  className="material-icons"
                  onClick={() => setEditModalOpen(true)}
                >
                  edit
                </span>
                <span
                  className="material-icons"
                  onClick={() => deleteCurrentCommentHandler()}
                >
                  delete
                </span>
              </div>
            )}
          </div>
          <div className="commentCard__content">{text}</div>
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
            <EditCommentModal
              comment={comment}
              postId={postId}
              setEditModalOpen={setEditModalOpen}
            />
          </div>
        </div>
      )}
    </>
  );
};

export { PostCommentCard };
