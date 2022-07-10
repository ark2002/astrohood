import axios from "axios";

export const signUpService = async (user) => {
  try {
    const { data } = await axios.post("/api/auth/signup", {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      password: user.password,
      portfolioLink: "https://adarshbalika.netlify.app",
      bio: "Hey! I am new here",
      profileImg:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
    });
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
};
