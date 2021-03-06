import axios from "axios";

export const followAUserService = async (token, followUserId) => {
  try {
    const { data } = await axios.post(
      `/api/users/follow/${followUserId}`,
      {},
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
