import axios from "axios";

export const getCommentsService = async (token, id) => {
  try {
    const { data } = await axios.get(`/api/comments/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return data.comments;
  } catch (error) {
    console.error(error);
  }
};
