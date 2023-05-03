const OwnGame = require("../models/ownGame.model");
const createError = require("http-errors");

module.exports.exists = (req, res, next) => {
  OwnGame.findById(req.params.id)
    .populate("game user")
    .then((ownGame) => {
      if (ownGame) {
        req.ownGame = ownGame;
        next();
      } else {
        next(createError(404, "ownGame not found"));
      }
    })
    .catch(next);
};

module.exports.checkOwner = (req, res, next) => {
  if (req.ownGame.user.toString() !== req.user.id.toString()) {
    next(createError(403, "Forbidden"));
  } else {
    next();
  }
};
