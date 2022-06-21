import axios from "axios";

export const editACommentService = async (token, postId,commentId, commentData) => {
  try {
    const { data } = await axios.post(
      `/api/comments/edit/${postId}/${commentId}`,
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
