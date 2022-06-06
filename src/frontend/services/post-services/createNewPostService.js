import axios from "axios";

export const createNewPostService = async (postData, token) => {
  console.log(postData);
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
    console.log(data.posts);
    return data.posts;
  } catch (error) {
    console.error(error);
  }
};
