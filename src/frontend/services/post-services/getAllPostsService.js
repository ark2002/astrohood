import axios from "axios";

export const getAllPostsService = async (token) => {
  try {
    const { data } = await axios.get("/api/posts", {
      headers: {
        authorization: token,
      },
    });
    return data.posts;
  } catch (error) {
    console.error(error);
  }
};
