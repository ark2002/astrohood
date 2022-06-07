import axios from "axios";

export const unlikeAPostService = async (id, token) => {
  try {
    const { data } = await axios.post(
      `/api/posts/dislike/${id}`,
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
