import { FeedPostList, FeedSortOptions, NewPostCard } from "../../components";
import "./FeedScreen.css";

const FeedScreen = () => {
  return (
    <div className="feedScreen flex--column">
      <NewPostCard />
      <FeedSortOptions />
      <FeedPostList />
    </div>
  );
};

export { FeedScreen };
