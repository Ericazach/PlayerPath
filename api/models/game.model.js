const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
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
      // match: [/^https?:\/\/.+\.(jpg|jpeg|png)$/, "Image URL must be valid"],
    },
    trophies: [String],
    tags: [String],
  },
  {
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);

gameSchema.virtual("comments", {
  ref: "Comment",
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

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
