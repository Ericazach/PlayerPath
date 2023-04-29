const User = require("../models/user.model");
const createError = require("http-errors");

module.exports.exists = (req, res, next) => {
  const userId = req.params.userId || req.params.id;

  if (userId === "me") {
    if (req.user) {
      req.user = req.user;
      next();
    } else {
      next(createError(401, "Missing Access token"));
    }
  } else {
    User.findById(userId)
      .populate("ownGames")
      .then((user) => {
        if (user) {
          req.user = user;
          next();
        } else {
          next(createError(404, "User not found"));
        }
      })
      .catch(next);
  }
};
