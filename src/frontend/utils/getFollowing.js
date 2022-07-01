import { getUserDetails } from "./getUserDetails";

export const getFollowing = (user, username) =>
  getUserDetails(user, username)?.following;
