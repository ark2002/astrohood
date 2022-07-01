import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../components";
import {
  BookmarkScreen,
  ExploreScreen,
  FeedScreen,
  LandingScreen,
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
        <Route path="/" element={<FeedScreen />} />
        <Route path="/explore" element={<ExploreScreen />} />
        <Route path="/bookmarks" element={<BookmarkScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/user/:userId" element={<UserScreen />} />
      </Route>
      <Route path="/signin" element={<SignInScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />
      <Route path="*" element={<PageNotFoundScreen />} />
    </Routes>
  );
};

export { Router };
