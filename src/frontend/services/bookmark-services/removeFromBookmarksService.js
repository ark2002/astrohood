import axios from "axios";

export const removeFromBookmarksService = async (id, token) => {
  try {
    const { data } = await axios.post(
      `/api/users/remove-bookmark/${id}`,
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
