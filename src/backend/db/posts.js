import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "The Weather seems good today!",
    likes: {
      likeCount: 3,
      likedBy: [
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
          username: "clintbarton",
          profileImg:
            "https://i.pinimg.com/originals/79/de/60/79de607ba87528666b4e116d7dda2941.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "farhanquareshi",
    profileImg: "https://www.personality-database.com/profile_images/39642.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Change the world by being yourself.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          username: "hankpym",
          profileImg:
            "https://pyxis.nymag.com/v1/imgs/711/992/eaf3d9aa86ceff87de2ff6ad7f98fa4953-ant-man-scene-1.rsquare.w700.jpg",
        },
        {
          username: "pepperpotts",
          profileImg:
            "https://elenasquareeyes.files.wordpress.com/2019/04/pepper-potts.jpg?w=640",
        },
      ],
      dislikedBy: [],
    },
    username: "johndoe",
    profileImg:
      "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "farhanquareshi",
        profileImg:
          "https://www.personality-database.com/profile_images/39642.png",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "tonystark",
        profileImg:
          "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc2NTQ3MDUyMjU4MzM4NTIz/tony-stark-case-study-and-psychological-assessment.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "hankpym",
        profileImg:
          "https://pyxis.nymag.com/v1/imgs/711/992/eaf3d9aa86ceff87de2ff6ad7f98fa4953-ant-man-scene-1.rsquare.w700.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Every moment is a fresh beginning.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "pepperpotts",
    profileImg:
      "https://elenasquareeyes.files.wordpress.com/2019/04/pepper-potts.jpg?w=640",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "The time is always right to do what is right.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          username: "johndoe",
          profileImg:
            "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "clintbarton",
    profileImg:
      "https://i.pinimg.com/originals/79/de/60/79de607ba87528666b4e116d7dda2941.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Never regret anything that made you smile",
    likes: {
      likeCount: 4,
      likedBy: [
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
        {
          username: "stephenstrange",
          profileImg:
            "https://pyxis.nymag.com/v1/imgs/288/3b0/e54e4bfd4095f34eca92495317353abcb8-23-doctor-strange.rsquare.w700.jpg",
        },
        {
          username: "hankpym",
          profileImg:
            "https://pyxis.nymag.com/v1/imgs/711/992/eaf3d9aa86ceff87de2ff6ad7f98fa4953-ant-man-scene-1.rsquare.w700.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "hankpym",
    profileImg:
      "https://pyxis.nymag.com/v1/imgs/711/992/eaf3d9aa86ceff87de2ff6ad7f98fa4953-ant-man-scene-1.rsquare.w700.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "May your choices reflect your hopes, not your fears.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "stanlee",
    profileImg:
      "https://media.wired.com/photos/5be9d68a5d7c6a7b81d79e25/1:1/w_1800,h_1800,c_limit/StanLee-610719480.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Die with memories, not dreams.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "clintbarton",
    profileImg:
      "https://i.pinimg.com/originals/79/de/60/79de607ba87528666b4e116d7dda2941.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Aspire to inspire before we expire.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "steverogers",
    profileImg:
      "https://pyxis.nymag.com/v1/imgs/8fa/98e/3a01cd0da4f1558b478d5bf7a74e488f1d-05-evans-america.rsquare.w330.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Everything you can imagine is real",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "stanlee",
    profileImg:
      "https://media.wired.com/photos/5be9d68a5d7c6a7b81d79e25/1:1/w_1800,h_1800,c_limit/StanLee-610719480.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Simplicity is the ultimate sophistication.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tonystark",
    profileImg:
      "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc2NTQ3MDUyMjU4MzM4NTIz/tony-stark-case-study-and-psychological-assessment.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Whatever you do, do it well.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "steverogers",
    profileImg:
      "https://pyxis.nymag.com/v1/imgs/8fa/98e/3a01cd0da4f1558b478d5bf7a74e488f1d-05-evans-america.rsquare.w330.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "What we think, we become.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "farhanquareshi",
    profileImg: "https://www.personality-database.com/profile_images/39642.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "All limitations are self-imposed.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johndoe",
    profileImg:
      "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Tough times never last but tough people do.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "hankpym",
    profileImg:
      "https://pyxis.nymag.com/v1/imgs/711/992/eaf3d9aa86ceff87de2ff6ad7f98fa4953-ant-man-scene-1.rsquare.w700.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Problems are not stop signs, they are guidelines.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "pepperpotts",
    profileImg:
      "https://elenasquareeyes.files.wordpress.com/2019/04/pepper-potts.jpg?w=640",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "One day the people that don’t even believe in you will tell everyone how they met you.",
    likes: {
      likeCount: 0,

      likedBy: [],
      dislikedBy: [],
    },
    username: "johndoe",
    profileImg:
      "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "If I’m gonna tell a real story, I’m gonna start with my name.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tonystark",
    profileImg:
      "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc2NTQ3MDUyMjU4MzM4NTIz/tony-stark-case-study-and-psychological-assessment.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "If you tell the truth you don’t have to remember anything.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "stanlee",
    profileImg:
      "https://media.wired.com/photos/5be9d68a5d7c6a7b81d79e25/1:1/w_1800,h_1800,c_limit/StanLee-610719480.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Have enough courage to start and enough heart to finish.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "steverogers",
    profileImg:
      "https://pyxis.nymag.com/v1/imgs/8fa/98e/3a01cd0da4f1558b478d5bf7a74e488f1d-05-evans-america.rsquare.w330.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "I could agree with you but then we’d both be wrong",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "clintbarton",
    profileImg:
      "https://i.pinimg.com/originals/79/de/60/79de607ba87528666b4e116d7dda2941.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Determine your priorities and focus on them.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "stephenstrange",
    profileImg:
      "https://pyxis.nymag.com/v1/imgs/288/3b0/e54e4bfd4095f34eca92495317353abcb8-23-doctor-strange.rsquare.w700.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Yesterday you said tomorrow. Just do it.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "pepperpotts",
    profileImg:
      "https://elenasquareeyes.files.wordpress.com/2019/04/pepper-potts.jpg?w=640",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Never let your emotions overpower your intelligence.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "hankpym",
    profileImg:
      "https://pyxis.nymag.com/v1/imgs/711/992/eaf3d9aa86ceff87de2ff6ad7f98fa4953-ant-man-scene-1.rsquare.w700.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "To live will be an awfully big adventure.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johndoe",
    profileImg:
      "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Yes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "johndoe",
        profileImg:
          "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        text: "Relief!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
