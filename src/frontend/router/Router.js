import { Route, Routes } from "react-router-dom";
import {
  BookmarkScreen,
  ExploreScreen,
  FeedScreen,
  LandingScreen,
  PageNotFoundScreen,
  ProfileScreen,
  SignInScreen,
  SignUpScreen,
} from "../screens";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingScreen />} />
      <Route path="/feed" element={<FeedScreen />} />
      <Route path="/explore" element={<ExploreScreen />} />
      <Route path="/bookmarks" element={<BookmarkScreen />} />
      <Route path="/profile" element={<ProfileScreen />} />
      <Route path="/signin" element={<SignInScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />
      <Route path="*" element={<PageNotFoundScreen />} />
    </Routes>
  );
};

export { Router };
