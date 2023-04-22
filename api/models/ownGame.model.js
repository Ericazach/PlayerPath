const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ownGameSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "User is required",
    },
    game: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Game",
      unique: true,
      required: "Game is required",
    },
    trophies: [String],
    state: [
      {
        type: String,
        enum: ["WishList", "inProgress", "Completed"],
        required: "State is required",
      },
    ],
    progress: {
      type: Number,
    },
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

const OwnGame = mongoose.model("OwnGame", ownGameSchema);
module.exports = OwnGame;
