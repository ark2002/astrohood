import axios from "axios";

export const unfollowAUserService = async (token, followUserId) => {
  try {
    const { data } = await axios.post(
      `/api/users/unfollow/${followUserId}`,
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
