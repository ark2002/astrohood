import "./EditCommentModal.css";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editACommentHandler } from "../../slices";

const EditCommentModal = ({ comment, postId, setEditModalOpen }) => {
  const [commentContent, setCommentContent] = useState(comment.text);
  const [charCount, setCharCount] = useState();
  const dispatch = useDispatch();
  const { token, currUser } = useSelector((store) => store.auth);

  const handleCommentContent = (event) => {
    const content = event.target.value;
    if (!content) {
      setCharCount(null);
    } else {
      setCharCount(250 - content.trim().length);
    }
    setCommentContent(content);
  };

  const handleEditComment = async () => {
    setEditModalOpen(false);
    setCharCount(null);
    try {
      await dispatch(
        editACommentHandler({
          token,
          postId,
          commentId: comment._id,
          commentData: { ...comment, text: commentContent },
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="newPostCard flex--row edit__modalCard">
      <div className="fd-postcard__aside">
        <img
          src={currUser.profileImg}
          alt="profile__img"
          className="fd-profile--img"
        />
      </div>
      <div className="np__main flex--column">
        <div className="np__textbox">
          <TextareaAutosize
            minRows="1"
            className="np__post-content"
            placeholder=""
            value={commentContent}
            onChange={handleCommentContent}
          />
        </div>
        <div className="np__bottom flex--row">
          <div className="np__bottom-right flex--row">
            <h3
              className={`np__charcount secondary__font ${
                charCount <= 10 && charCount >= 0
                  ? "charcount--warn"
                  : charCount < 0
                  ? "charcount--error"
                  : ""
              }`}
            >
              {charCount}
            </h3>
            <button
              className="btn btn-color--primary btn-font--secondary np__post-button"
              disabled={charCount < 0 || commentContent === "" ? true : false}
              onClick={() => handleEditComment(commentContent)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EditCommentModal };
