import axios from "axios";

export const getUserAllPostsService = async (token, username) => {
  try {
    const { data } = await axios.get(`/api/posts/user/${username}`, {
      headers: {
        authorization: token,
      },
    });
    return data.posts;
  } catch (error) {
    console.error(error);
  }
};
