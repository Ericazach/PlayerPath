const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  name: {
    type: String,
    required: "Name is required",
  },
  description: {
    type: String,
    required: "Description is required",
  },
  gameImg: {
    type: String,
    required: "User image url is required",
    match: [/^https?:\/\/.+\.(jpg|jpeg|png)$/, "Image URL must be valid"],
  },
  trophies: [String],
  tags: [String],
});

gameSchema.virtual("comments", {
  ref: "Comments",
  localField: "_id",
  foreignField: "game",
  justOne: false,
});

gameSchema.virtual("likes", {
  ref: "Like",
  localField: "_id",
  foreignField: "like",
  justOne: false,
});

const Game = mongoose.model("Game", gameSchema)
module.exports = Game
