import axios from "axios";

export const editUserDetailService = async (token, userData) => {
  try {
    const { data } = await axios.post(
      "/api/users/edit",
      { userData },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
