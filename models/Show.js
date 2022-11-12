const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  hotelid: { type: String, required: true, ref: "hotels" },
  name: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true },
  userId: { type: mongoose.Types.ObjectId, ref: "users", required: true },
});

const Show = mongoose.model("shows", schema);
module.exports = Show;