import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostsHandler } from "../../slices";
import { getUserDetails } from "../../utils";
import { FeedPostCard } from "../FeedPostCard/FeedPostCard";
import "./FeedPostList.css";

const FeedPostList = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);
  const [sortedPosts, setSortedPosts] = useState([]);
  const [feedPosts, setFeedPosts] = useState([]);

  useEffect(() => {
    dispatch(getAllPostsHandler(token));
  }, [dispatch, token]);

  const { posts, sortPostsBy } = useSelector((store) => store.post);
  const { currUser } = useSelector((store) => store.auth);
  const { allUsers } = useSelector((store) => store.user);

  useEffect(() => {
    const usersDetails = getUserDetails(allUsers, currUser.username);
    setFeedPosts(
      posts.filter((post) =>
        usersDetails?.following.find(
          (user) =>
            user.username === post.username ||
            post.username === currUser.username
        )
      )
    );
  }, [allUsers, currUser, posts]);

  useEffect(() => {
    sortPostsBy === "LATEST"
      ? setSortedPosts([...feedPosts].reverse())
      : sortPostsBy === "OLDEST"
      ? setSortedPosts([...feedPosts])
      : sortPostsBy === "TRENDING"
      ? setSortedPosts(
          [...feedPosts].sort(
            (a, b) =>
              b.comments.length +
              b.likes.likeCount -
              (a.comments.length + a.likes.likeCount)
          )
        )
      : setSortedPosts([...feedPosts]);
  }, [sortPostsBy, feedPosts]);

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
