import axios from "axios";

export const signInService = async (user) => {
  try {
    const { data } = await axios.post("/api/auth/login", {
      username: user.username,
      password: user.password,
    });
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
};
