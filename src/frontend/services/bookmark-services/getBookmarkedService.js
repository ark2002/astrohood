import axios from "axios";

export const getBookmarkedService = async (token) => {
  try {
    const { data } = await axios.get("/api/users/bookmark", {
      headers: {
        authorization: token,
      },
    });
    return data.bookmarks;
  } catch (error) {
    console.error(error);
  }
};
