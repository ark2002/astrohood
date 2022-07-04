import { getFollowing } from "./getFollowing";

export const getUnfollowedUsers = (users, username) => {
  const followingUsers = getFollowing(users, username);

  const unfollowedUsers = users?.filter((listItem) =>
    username === listItem.username
      ? false
      : followingUsers?.find(
          (followedUser) => followedUser.username === listItem.username
        )
      ? false
      : true
  );

  if (unfollowedUsers?.length > 3) {
    return unfollowedUsers.slice(0, 3);
  }

  return unfollowedUsers;
};
