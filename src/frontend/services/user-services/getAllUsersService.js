import axios from "axios";

export const getAllUsersService = async (token) => {
  try {
    const { data } = await axios.get("/api/users", {
      headers: {
        authorization: token,
      },
    });
    return data.users;
  } catch (error) {
    console.error(error);
  }
};
