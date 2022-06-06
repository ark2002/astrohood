import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostsHandler } from "../../slices";
import { FeedPostCard } from "../FeedPostCard/FeedPostCard";
import "./FeedPostList.css";

const FeedPostList = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);
  const [sortedPosts, setSortedPosts] = useState([]);

  useEffect(() => {
    dispatch(getAllPostsHandler(token));
  }, [dispatch, token]);

  const { posts } = useSelector((store) => store.post);
  const { sortPostsBy } = useSelector((store) => store.post);

  useEffect(() => {
    sortPostsBy === "LATEST"
      ? setSortedPosts([...posts].reverse())
      : sortPostsBy === "OLDEST"
      ? setSortedPosts([...posts])
      : sortPostsBy === "TRENDING"
      ? setSortedPosts(
          [...posts].sort(
            (a, b) =>
              b.comments.length +
              b.likes.likeCount -
              (a.comments.length + a.likes.likeCount)
          )
        )
      : setSortedPosts([...posts]);
  }, [sortPostsBy, posts]);

  return (
    <div className="feed__post-list">
      {sortedPosts === null
        ? null
        : sortedPosts.map((post) => (
            <FeedPostCard post={post} key={post._id} />
          ))}
    </div>
  );
};

export { FeedPostList };
