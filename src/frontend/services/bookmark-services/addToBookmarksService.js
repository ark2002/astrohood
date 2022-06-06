import axios from "axios";

export const addToBookmarksService = async (id, token) => {
  try {
    const { data } = await axios.post(
      `/api/users/bookmark/${id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data.bookmarks;
  } catch (error) {
    console.error(error);
  }
};
