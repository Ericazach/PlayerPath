const Game = require("../models/game.model");

module.exports.list = (req, res, next) => {
  Game.find()
    .populate("comments likes")
    .then((games) => res.json(games))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  Game.create(req.body)
    .then((game) => res.status(201).json(game))
    .catch(next);
};

module.exports.detail = (req, res, next) => res.json(req.game);
