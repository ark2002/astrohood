import Moment from "react-moment";
import "./FeedPostCard.css";

const FeedPostCard = ({ post }) => {
  const { username, content, comments, createdAt, likes } = post;
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
          <div className="flex--row option--like">
            <span className="material-icons option--like">favorite_border</span>
            <p>{likes.likeCount}</p>
          </div>
          <div className="flex--row option--comment">
            <span className="material-icons">chat_bubble_outline</span>
            <p>{comments.length}</p>
          </div>
          <span className="material-icons option--bookmark">
            bookmark_border
          </span>
          <span className="material-icons option--share">ios_share</span>
        </div>
      </div>
    </div>
  );
};

export { FeedPostCard };
