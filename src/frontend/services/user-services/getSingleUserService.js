import axios from "axios";

export const getSingleUserService = async (token, username) => {
  try {
    const { data } = await axios.get(`/api/users/${username}`, {
      headers: {
        authorization: token,
      },
    });
    return data.user;
  } catch (error) {
    console.error(error);
  }
};
