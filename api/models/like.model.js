const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema(
  {
    game: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Game",
      required: "Like game is required",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "Like user is required",
    },
  },
  {
    timestamps: true,
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

const Like = mongoose.model("Like", likeSchema);
module.exports = Like;
