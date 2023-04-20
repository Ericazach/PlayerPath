const Game = require("../models/game.model");
const createError = require("http-errors");

module.exports.exists = (req, res, next) => {
  const gamesId = req.params.gamesId || req.params.id;

  Game.findById(gamesId)
    .populate("comments")
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
