const Game = require("../models/game.model");

module.exports.list = (req, res, next) => {
  Game.find()
    .populate("ownGames comments likes")
    .then((games) => res.json(games))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  Game.create(req.body)
    .then((game) => res.status(201).json(game))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Game.deleteOne({ _id: req.game.id })
    .then(() => res.status(204).send())
    .catch(next);
};

module.exports.edit = (req, res, next) => {
  Object.assign(req.game, req.body);
  req.game
    .save()
    .then((game) => res.json(game))
    .catch(next);
};

module.exports.detail = (req, res, next) => res.json(req.game);
