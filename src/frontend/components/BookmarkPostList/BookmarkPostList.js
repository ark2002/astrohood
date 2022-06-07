import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarkedHandler } from "../../slices";
import { FeedPostCard } from "../FeedPostCard/FeedPostCard";
import "./BookmarkPostList.css";

const BookmarkPostList = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

  useEffect(() => {
    dispatch(getBookmarkedHandler(token));
  }, [dispatch, token]);

  const { posts } = useSelector((store) => store.post);
  const { bookmarks } = useSelector((store) => store.post);

  useEffect(
    () =>
      setBookmarkedPosts(
        posts.filter((post) => bookmarks.find((id) => post._id === id))
      ),
    [posts, bookmarks]
  );

  return (
    <div className="feed__post-list">
      {bookmarkedPosts === null
        ? null
        : bookmarkedPosts.map((post) => (
            <FeedPostCard post={post} key={post._id} />
          ))}
    </div>
  );
};

export { BookmarkPostList };
