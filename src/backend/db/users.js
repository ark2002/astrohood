import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Farhan",
    lastName: "Quareshi",
    username: "farhanquareshi",
    password: "farhanquareshi123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolioLink: "https://adarshbalika.netlify.app",
    bio: "Abba Man gaye!",
    profileImg: "https://www.personality-database.com/profile_images/39642.png",
    followers: [
      {
        username: "tonystark",
        profileImg:
          "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc2NTQ3MDUyMjU4MzM4NTIz/tony-stark-case-study-and-psychological-assessment.jpg",
      },
      {
        username: "steverogers",
        profileImg:
          "https://pyxis.nymag.com/v1/imgs/8fa/98e/3a01cd0da4f1558b478d5bf7a74e488f1d-05-evans-america.rsquare.w330.jpg",
      },
      {
        username: "hankpym",
        profileImg:
          "https://pyxis.nymag.com/v1/imgs/711/992/eaf3d9aa86ceff87de2ff6ad7f98fa4953-ant-man-scene-1.rsquare.w700.jpg",
      },
    ],
    following: [
      {
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
      },
      {
        username: "stanlee",
        profileImg:
          "https://media.wired.com/photos/5be9d68a5d7c6a7b81d79e25/1:1/w_1800,h_1800,c_limit/StanLee-610719480.jpg",
      },
      {
        username: "tonystark",
        profileImg:
          "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc2NTQ3MDUyMjU4MzM4NTIz/tony-stark-case-study-and-psychological-assessment.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "johndoe123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolioLink: "https://adarshbalika.netlify.app",
    bio: "Hey there ! i am new here",
    profileImg:
      "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
    followers: [
      {
        username: "farhanquareshi",
        profileImg:
          "https://www.personality-database.com/profile_images/39642.png",
      },
      {
        username: "pepperpotts",
        profileImg:
          "https://elenasquareeyes.files.wordpress.com/2019/04/pepper-potts.jpg?w=640",
      },
      {
        username: "stephenstrange",
        profileImg:
          "https://pyxis.nymag.com/v1/imgs/288/3b0/e54e4bfd4095f34eca92495317353abcb8-23-doctor-strange.rsquare.w700.jpg",
      },
    ],
    following: [
      {
        username: "stephenstrange",
        profileImg:
          "https://pyxis.nymag.com/v1/imgs/288/3b0/e54e4bfd4095f34eca92495317353abcb8-23-doctor-strange.rsquare.w700.jpg",
      },
      {
        username: "clintbarton",
        profileImg:
          "https://i.pinimg.com/originals/79/de/60/79de607ba87528666b4e116d7dda2941.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Stan",
    lastName: "Lee",
    username: "stanlee",
    password: "stanlee123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolioLink: "https://adarshbalika.netlify.app",
    bio: "With great power comes great responsibility.",
    profileImg:
      "https://media.wired.com/photos/5be9d68a5d7c6a7b81d79e25/1:1/w_1800,h_1800,c_limit/StanLee-610719480.jpg",
    followers: [
      {
        username: "farhanquareshi",
        profileImg:
          "https://www.personality-database.com/profile_images/39642.png",
      },
      {
        username: "steverogers",
        profileImg:
          "https://pyxis.nymag.com/v1/imgs/8fa/98e/3a01cd0da4f1558b478d5bf7a74e488f1d-05-evans-america.rsquare.w330.jpg",
      },
      {
        username: "tonystark",
        profileImg:
          "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc2NTQ3MDUyMjU4MzM4NTIz/tony-stark-case-study-and-psychological-assessment.jpg",
      },
      {
        username: "stephenstrange",
        profileImg:
          "https://pyxis.nymag.com/v1/imgs/288/3b0/e54e4bfd4095f34eca92495317353abcb8-23-doctor-strange.rsquare.w700.jpg",
      },
    ],
    following: [
      {
        username: "pepperpotts",
        profileImg:
          "https://elenasquareeyes.files.wordpress.com/2019/04/pepper-potts.jpg?w=640",
      },
      {
        username: "hankpym",
        profileImg:
          "https://pyxis.nymag.com/v1/imgs/711/992/eaf3d9aa86ceff87de2ff6ad7f98fa4953-ant-man-scene-1.rsquare.w700.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Tony",
    lastName: "Stark",
    username: "tonystark",
    password: "tonystark123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolioLink: "https://adarshbalika.netlify.app",
    bio: "I am Iron Man.",
    profileImg:
      "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc2NTQ3MDUyMjU4MzM4NTIz/tony-stark-case-study-and-psychological-assessment.jpg",
    followers: [
      {
        username: "farhanquareshi",
        profileImg:
          "https://www.personality-database.com/profile_images/39642.png",
      },
      {
        username: "clintbarton",
        profileImg:
          "https://i.pinimg.com/originals/79/de/60/79de607ba87528666b4e116d7dda2941.jpg",
      },
      {
        username: "hankpym",
        profileImg:
          "https://pyxis.nymag.com/v1/imgs/711/992/eaf3d9aa86ceff87de2ff6ad7f98fa4953-ant-man-scene-1.rsquare.w700.jpg",
      },
    ],
    following: [
      {
        username: "farhanquareshi",
        profileImg:
          "https://www.personality-database.com/profile_images/39642.png",
      },
      {
        username: "stanlee",
        profileImg:
          "https://media.wired.com/photos/5be9d68a5d7c6a7b81d79e25/1:1/w_1800,h_1800,c_limit/StanLee-610719480.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Steve",
    lastName: "Rogers",
    username: "steverogers",
    password: "steverogers123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolioLink: "https://adarshbalika.netlify.app",
    bio: "I'm not looking for forgiveness, and I'm way past asking permission. ",
    profileImg:
      "https://pyxis.nymag.com/v1/imgs/8fa/98e/3a01cd0da4f1558b478d5bf7a74e488f1d-05-evans-america.rsquare.w330.jpg",
    followers: [
      {
        username: "farhanquareshi",
        profileImg:
          "https://www.personality-database.com/profile_images/39642.png",
      },
      {
        username: "stephenstrange",
        profileImg:
          "https://pyxis.nymag.com/v1/imgs/288/3b0/e54e4bfd4095f34eca92495317353abcb8-23-doctor-strange.rsquare.w700.jpg",
      },
    ],
    following: [
      {
        username: "farhanquareshi",
        profileImg:
          "https://www.personality-database.com/profile_images/39642.png",
      },
      {
        username: "stanlee",
        profileImg:
          "https://media.wired.com/photos/5be9d68a5d7c6a7b81d79e25/1:1/w_1800,h_1800,c_limit/StanLee-610719480.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Clint",
    lastName: "Barton",
    username: "clintbarton",
    password: "clintbarton123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolioLink: "https://adarshbalika.netlify.app",
    bio: "None of this makes sense. But I'm going back out there because it's my job.",
    profileImg:
      "https://i.pinimg.com/originals/79/de/60/79de607ba87528666b4e116d7dda2941.jpg",
    followers: [
      {
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
      },
    ],
    following: [
      {
        username: "tonystark",
        profileImg:
          "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc2NTQ3MDUyMjU4MzM4NTIz/tony-stark-case-study-and-psychological-assessment.jpg",
      },
      {
        username: "pepperpotts",
        profileImg:
          "https://elenasquareeyes.files.wordpress.com/2019/04/pepper-potts.jpg?w=640",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Pepper",
    lastName: "Potts",
    username: "pepperpotts",
    password: "pepperpotts123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolioLink: "https://adarshbalika.netlify.app",
    bio: "CEO of Stark Industries",
    profileImg:
      "https://elenasquareeyes.files.wordpress.com/2019/04/pepper-potts.jpg?w=640",
    followers: [
      {
        username: "stanlee",
        profileImg:
          "https://media.wired.com/photos/5be9d68a5d7c6a7b81d79e25/1:1/w_1800,h_1800,c_limit/StanLee-610719480.jpg",
      },
      {
        username: "clintbarton",
        profileImg:
          "https://i.pinimg.com/originals/79/de/60/79de607ba87528666b4e116d7dda2941.jpg",
      },
    ],
    following: [
      {
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
      },
      {
        username: "hankpym",
        profileImg:
          "https://pyxis.nymag.com/v1/imgs/711/992/eaf3d9aa86ceff87de2ff6ad7f98fa4953-ant-man-scene-1.rsquare.w700.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Stephen",
    lastName: "Strange",
    username: "stephenstrange",
    password: "stephenstrange123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolioLink: "https://adarshbalika.netlify.app",
    bio: "We never lose our demons, Mordo. We only learn to live above them.",
    profileImg:
      "https://pyxis.nymag.com/v1/imgs/288/3b0/e54e4bfd4095f34eca92495317353abcb8-23-doctor-strange.rsquare.w700.jpg",
    followers: [
      {
        username: "farhanquareshi",
        profileImg:
          "https://www.personality-database.com/profile_images/39642.png",
      },
      {
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
      },
    ],
    following: [
      {
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
      },
      {
        username: "stanlee",
        profileImg:
          "https://media.wired.com/photos/5be9d68a5d7c6a7b81d79e25/1:1/w_1800,h_1800,c_limit/StanLee-610719480.jpg",
      },
      {
        username: "steverogers",
        profileImg:
          "https://pyxis.nymag.com/v1/imgs/8fa/98e/3a01cd0da4f1558b478d5bf7a74e488f1d-05-evans-america.rsquare.w330.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Hank",
    lastName: "Pym",
    username: "hankpym",
    password: "hankpym123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolioLink: "https://adarshbalika.netlify.app",
    bio: "Bigger is Better",
    profileImg:
      "https://pyxis.nymag.com/v1/imgs/711/992/eaf3d9aa86ceff87de2ff6ad7f98fa4953-ant-man-scene-1.rsquare.w700.jpg",
    followers: [
      {
        username: "stanlee",
        profileImg:
          "https://media.wired.com/photos/5be9d68a5d7c6a7b81d79e25/1:1/w_1800,h_1800,c_limit/StanLee-610719480.jpg",
      },
      {
        username: "pepperpotts",
        profileImg:
          "https://elenasquareeyes.files.wordpress.com/2019/04/pepper-potts.jpg?w=640",
      },
    ],
    following: [
      {
        username: "farhanquareshi",
        profileImg:
          "https://www.personality-database.com/profile_images/39642.png",
      },
      {
        username: "tonystark",
        profileImg:
          "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc2NTQ3MDUyMjU4MzM4NTIz/tony-stark-case-study-and-psychological-assessment.jpg",
      },
    ],
  },
];
