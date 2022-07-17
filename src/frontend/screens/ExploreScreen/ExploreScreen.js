import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FeedPostCard, FeedSortOptions } from "../../components";
import { getAllPostsHandler } from "../../slices";

import "./ExploreScreen.css";

const ExploreScreen = () => {
  const dispatch = useDispatch();

  const { posts, sortPostsBy } = useSelector((store) => store.post);
  const { token } = useSelector((store) => store.auth);

  const [sortedPosts, setSortedPosts] = useState([]);

  useEffect(() => {
    dispatch(getAllPostsHandler(token));
  }, [dispatch, token]);

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
    <div className="explorepage flex--column">
      <FeedSortOptions />
      <div>
        {sortedPosts === []
          ? null
          : sortedPosts
              .map((post) => <FeedPostCard post={post} key={post._id} />)
              .reverse()}
      </div>
    </div>
  );
};

export { ExploreScreen };
