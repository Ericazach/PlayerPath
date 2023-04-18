const Game = require("../models/game.model");

module.exports.list = (req, res, next) => {
  Game.find()
    .then((games) => res.json(games))
    .catch(next);
};

module.exports.detail = (req, res, next) => res.json(req.game);
