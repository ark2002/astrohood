import axios from "axios";

export const createNewPostService = async (postData, token) => {
  try {
    const { data } = await axios.post(
      "/api/posts",
      { postData },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data.posts;
  } catch (error) {
    console.error(error);
  }
};
