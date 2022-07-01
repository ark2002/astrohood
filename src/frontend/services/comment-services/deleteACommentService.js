import axios from "axios";

export const deleteACommentService = async (token, commentId, postId) => {
  try {
    const { data } = await axios.post(
      `/api/comments/delete/${postId}/${commentId}`,
      {},
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
