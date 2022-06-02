import { useDispatch, useSelector } from "react-redux";
import { sortPostsHandler } from "../../slices";
import "./FeedSortOptions.css";

const FeedSortOptions = () => {
  const dispatch = useDispatch();
  const { sortPostsBy } = useSelector((store) => store.post);

  const sortHandler = (selectedSort) => {
    dispatch(sortPostsHandler(selectedSort));
    console.log(sortPostsBy);
  };

  return (
    <div className="sort__list flex--row secondary__font">
      <span
        className={
          sortPostsBy === "LATEST" ? "sort__selected" : "sort__list-item"
        }
        onClick={() => sortHandler("LATEST")}
      >
        <span className="material-icons">arrow_upward</span>Latest
      </span>
      <span
        className={
          sortPostsBy === "OLDEST" ? "sort__selected" : "sort__list-item"
        }
        onClick={() => sortHandler("OLDEST")}
      >
        <span className="material-icons">arrow_downward</span>Oldest
      </span>
      <span
        className={
          sortPostsBy === "TRENDING" ? "sort__selected" : "sort__list-item"
        }
        onClick={() => sortHandler("TRENDING")}
      >
        <span className="material-icons">trending_up</span>Trending
      </span>
    </div>
  );
};

export { FeedSortOptions };
