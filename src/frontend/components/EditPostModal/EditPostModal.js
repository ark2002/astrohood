import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useDispatch, useSelector } from "react-redux";

import { editPostHandler } from "../../slices";

import "./EditPostModal.css";

const EditPostModal = ({ post, setEditModalOpen }) => {
  const dispatch = useDispatch();

  const { token, currUser } = useSelector((store) => store.auth);

  const [postContent, setPostContent] = useState(post.content);
  const [charCount, setCharCount] = useState();

  const handlePostText = (event) => {
    const content = event.target.value;
    if (!content) {
      setCharCount(null);
    } else {
      setCharCount(250 - content.trim().length);
    }
    setPostContent(content);
  };

  const handleEditPost = async () => {
    setEditModalOpen(false);
    setCharCount(null);
    try {
      await dispatch(
        editPostHandler({
          postData: { ...post, content: postContent },
          token,
          id: post._id,
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
            value={postContent}
            onChange={handlePostText}
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
              disabled={charCount < 0 || postContent === "" ? true : false}
              onClick={() => handleEditPost(postContent)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EditPostModal };
