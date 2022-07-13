import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { PrivateRoute } from "../components";
import {
  BookmarkScreen,
  ExploreScreen,
  FeedScreen,
  PageNotFoundScreen,
  PostScreen,
  ProfileScreen,
  SignInScreen,
  SignUpScreen,
  UserScreen,
} from "../screens";

const Router = () => {
  const { isAuth } = useSelector((store) => store.auth);
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/post/:postId" element={<PostScreen />} />
        <Route path="/feed" element={<FeedScreen />} />
        <Route path="/" element={<Navigate to="/feed" />} />
        <Route path="/explore" element={<ExploreScreen />} />
        <Route path="/bookmarks" element={<BookmarkScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/user/:userId" element={<UserScreen />} />
      </Route>
      {!isAuth && (
        <Route>
          <Route path="/signin" element={<SignInScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
        </Route>
      )}
      <Route path="*" element={<PageNotFoundScreen />} />
    </Routes>
  );
};

export { Router };
