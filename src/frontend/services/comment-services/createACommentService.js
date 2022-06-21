import axios from "axios";

export const createACommentService = async (token, postId, commentData) => {
  try {
    const { data } = await axios.post(
      `/api/comments/add/${postId}`,
      { commentData },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data.comments;
  } catch (error) {
    console.error(error);
  }
};
