import axios from "axios";

export const editPostService = async (token, id, postData) => {
  try {
    const { data } = await axios.post(
      `/api/posts/edit/${id}`,
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
