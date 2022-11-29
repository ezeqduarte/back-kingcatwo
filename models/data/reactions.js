let reactions = [
  {
    itineraryId: "636d59b2bdc288278110ef65",
    name: "like",
    icon: "https://img.icons8.com/fluency/512/like.png",
    iconBack: "https://img.icons8.com/fluency-systems-regular/512/like.png",
    userId: ["6384b66b6751f3a301b46856", "63837d4dd17676ad68b46ea8"],
  },
  {
    itineraryId: "636d59b2bdc288278110ef6a",
    name: "not-like",
    icon: "https://img.icons8.com/color/512/dislike.png",
    iconBack: "https://img.icons8.com/plumpy/512/dislike.png",
    userId: ["6384b66b6751f3a301b46856", "63837d4dd17676ad68b46ea8"],
  },
  {
    itineraryId: "636edb24ec24a1369ec99c58",
    name: "love",
    icon: "https://img.icons8.com/color/512/in-love.png",
    iconBack: "https://img.icons8.com/metro/512/in-love.png",
    userId: ["6384b66b6751f3a301b46856", "63837d4dd17676ad68b46ea8"],
  },
  {
    itineraryId: "636d59b2bdc288278110ef6d",
    name: "surprise",
    icon: "https://img.icons8.com/emoji/512/hushed-face.png",
    iconBack: "https://img.icons8.com/ios/512/embarrassed.png",
    userId: ["6384b66b6751f3a301b46856", "63837d4dd17676ad68b46ea8"],
  },
];

require("dotenv").config();
require("../../config/database");
const Reaction = require("../Reaction");

reactions.forEach((reaction) => {
  Reaction.create({
    itineraryId: reaction.itineraryId,
    name: reaction.name,
    icon: reaction.icon,
    iconBack: reaction.iconBack,
    userId: reaction.userId,
  });
});
