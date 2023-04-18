const Game = require("../models/game.model");
const createError = require("http-errors");

module.exports.exists = (req, res, next) => {
  Game.findById(req.params.id)
    .then((game) => {
      if (game) {
        req.game = game;
        next();
      } else {
        next(createError(404, "Game not found"));
      }
    })
    .catch(next);
};
