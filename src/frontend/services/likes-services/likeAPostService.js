import axios from "axios";

export const likeAPostService = async (id, token) => {
  try {
    const { data } = await axios.post(
      `/api/posts/like/${id}`,
      {},
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
