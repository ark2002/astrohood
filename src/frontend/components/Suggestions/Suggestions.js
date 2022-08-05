import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllUsersHandler, makeSuggestions } from "../../slices";
import { getUnfollowedUsers } from "../../utils";
import { UserCardSmall } from "../UserCardSmall/UserCardSmall";

import "./Suggestions.css";

const Suggestions = () => {
  const dispatch = useDispatch();

  const { currUser, token } = useSelector((store) => store.auth);
  const { allUsers, suggestions } = useSelector((store) => store.user);

  useEffect(() => {
    if (!allUsers.length) {
      (async () => {
        await dispatch(getAllUsersHandler(token));
      })();
    }
  }, [allUsers.length, dispatch, token]);

  useEffect(() => {
    const unfollowedUsers = getUnfollowedUsers(allUsers, currUser);
    dispatch(makeSuggestions(unfollowedUsers));
  }, [allUsers, currUser, dispatch]);

  return (
    suggestions && (
      <div className="suggestions__container">
        <div className="suggestions flex--column secondary__font">
          <h1 className="suggestion__heading">Suggestions</h1>
          {suggestions.map((user) => (
            <UserCardSmall user={user} key={user._id} />
          ))}
        </div>
      </div>
    )
  );
};

export { Suggestions };
