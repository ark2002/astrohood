import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FeedPostCard } from "../../components";
import { getAllPostsHandler } from "../../slices";

const ExploreScreen = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector((store) => store.post);
  const { token } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getAllPostsHandler(token));
  }, [dispatch, token]);

  return (
    <div className="explorepage">
      {posts === []
        ? null
        : posts
            .map((post) => <FeedPostCard post={post} key={post._id} />)
            .reverse()}
    </div>
  );
};

export { ExploreScreen };
