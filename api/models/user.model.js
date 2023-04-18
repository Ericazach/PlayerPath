const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: "Username is required",
      minlength: [3, "Name needs at least 2 chars"],
    },
    email: {
      type: String,
      required: "Email is required",
      match: [/^\S+@\S+\.\S+$/, "Student email must be valid"],
    },
    password: {
      type: String,
      required: "User password is required",
      minlength: [8, "User password needs at least 8 chars"],
    },
    profilePic: {
      type: String,
      required: "User image url is required",
      match: [/^https?:\/\/.+\.(jpg|jpeg|png)$/, "Image URL must be valid"],
    },
    bio: {
      type: String,
      required: "User bio is required",
    },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
