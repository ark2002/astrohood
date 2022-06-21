import axios from "axios";

export const deletePostService = async (token, id) => {
  try {
    const { data } = await axios.delete(`/api/posts/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return data.posts;
  } catch (error) {
    console.error(error);
  }
};
