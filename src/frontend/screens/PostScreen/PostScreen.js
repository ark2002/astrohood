import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";

import { FeedPostCard, PostCommentCard } from "../../components";
import { getCommentsService } from "../../services";
import { createACommentHandler } from "../../slices";

import "./PostScreen.css";

const PostScreen = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();

  const { posts } = useSelector((store) => store.post);
  const { token, currUser } = useSelector((store) => store.auth);

  const [currPost, setCurrPost] = useState(null);
  const [commentContent, setCommentContent] = useState("");
  const [comments, setComments] = useState([]);
  const [charCount, setCharCount] = useState();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/posts/${postId}`);
      setCurrPost(data.post);
    })();
  }, [postId, posts]);

  useEffect(() => {
    (async () => {
      const data = await getCommentsService(token, postId);
      setComments(data);
    })();
  });

  const handleCommentText = (event) => {
    const content = event.target.value;
    if (!content) {
      setCharCount(null);
    } else {
      setCharCount(250 - content.trim().length);
    }
    setCommentContent(content);
  };

  const handleSendComment = async () => {
    setCommentContent("");
    setCharCount(null);
    try {
      await dispatch(
        createACommentHandler({
          token: token,
          postId: postId,
          commentData: { text: commentContent },
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    currPost && (
      <div className="postScreen">
        <FeedPostCard post={currPost} />
        <div className="postScreen__comment flex--column">
          <div className="comment__top flex--row">
            <img
              src={currUser.profileImg}
              alt="comment-profile__img"
              className="comment-profile__img"
            />
            <TextareaAutosize
              minRows="1"
              className="comment__input"
              placeholder="Comment your reply"
              value={commentContent}
              onChange={handleCommentText}
            />
          </div>
          <div className="comment__bottom flex--row">
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
              onClick={() => handleSendComment()}
            >
              Post
            </button>
          </div>
        </div>
        {comments &&
          comments.map((comment) => (
            <PostCommentCard
              comment={comment}
              postId={postId}
              key={comment._id}
            />
          ))}
      </div>
    )
  );
};

export { PostScreen };
