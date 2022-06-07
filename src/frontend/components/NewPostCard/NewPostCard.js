import "./NewPostCard.css";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewPostHandler } from "../../slices/postsSlice";

const NewPostCard = () => {
  const [postContent, setPostContent] = useState("");
  const [charCount, setCharCount] = useState();
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);

  const handlePostText = (event) => {
    const content = event.target.value;
    if (!content) {
      setCharCount(null);
    } else {
      setCharCount(250 - content.trim().length);
    }
    setPostContent(content);
  };

  const handleSendPost = async () => {
    setPostContent("");
    setCharCount(null);
    try {
      await dispatch(
        createNewPostHandler({
          postData: { content: postContent },
          token: token,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="newPostCard flex--row">
      <div className="fd-postcard__aside">
        <img
          src="https://borchapartners.com/wp-content/uploads/2022/02/no-user-image.jpg"
          alt="profile__img"
          className="fd-profile--img"
        />
      </div>
      <div className="np__main flex--column">
        <div className="np__textbox">
          <TextareaAutosize
            minRows="1"
            className="np__post-content"
            placeholder="What's happening?"
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
              onClick={() => handleSendPost(postContent)}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewPostCard };
