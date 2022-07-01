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
      <Route path="/" element={<LandingScreen />} />
      <Route
        path="/post/:postId"
        element={
          <PrivateRoute>
            <PostScreen />
          </PrivateRoute>
        }
      />
      <Route
        path="/feed"
        element={
          <PrivateRoute>
            <FeedScreen />
          </PrivateRoute>
        }
      />
      <Route
        path="/explore"
        element={
          <PrivateRoute>
            <ExploreScreen />
          </PrivateRoute>
        }
      />
      <Route
        path="/bookmarks"
        element={
          <PrivateRoute>
            <BookmarkScreen />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfileScreen />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/:userId"
        element={
          <PrivateRoute>
            <UserScreen />
          </PrivateRoute>
        }
      />
      {!isAuth && (
        <>
          <Route path="/signin" element={<SignInScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
        </>
      )}
      <Route path="*" element={<PageNotFoundScreen />} />
    </Routes>
  );
};

export { Router };
