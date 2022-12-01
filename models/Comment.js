
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  comment: { type: String, required: true },
  userId: { type: mongoose.Types.ObjectId, ref: "users", required: true },
  itineraryId: { type: mongoose.Types.ObjectId, ref: "itineraries", required: true },
  date: {type: Date, required: true}
});

const Comment = mongoose.model("comments", schema);
module.exports = Comment;
