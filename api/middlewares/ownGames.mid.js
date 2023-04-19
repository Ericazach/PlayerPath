const OwnGame = require("../models/ownGame.model");
const createError = require("http-errors");

module.exports.exists = (req, res, next) => {
  OwnGame.findById(req.params.id)
    .then((ownGame) => {
      if (ownGame) {
        req.ownGame = ownGame;
        next();
      } else {
        next(createError(404, "Game not found"));
      }
    })
    .catch(next);
};
