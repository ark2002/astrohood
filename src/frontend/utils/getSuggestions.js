export const getSuggestions = (users, curruser) => {
  const { username, following } = curruser;
  const followingUsernames = following.map((user) => user.username);
  return users.filter(
    (user) =>
      !followingUsernames.includes(user.username) && user.username !== username
  );
};
