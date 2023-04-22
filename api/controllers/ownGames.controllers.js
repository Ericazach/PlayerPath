const OwnGame = require("../models/ownGame.model");

module.exports.list = (req, res, next) => {
  OwnGame.find()
    .populate("user game")
    .then((ownGame) => res.json(ownGame))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  const { trophies, game } = req.body;
  OwnGame.create({ trophies, game, user: req.user.id })
    .then((ownGame) => res.status(201).json(ownGame))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  OwnGame.deleteOne({ _id: req.ownGame.id })
    .then(() => res.status(204).send())
    .catch(next);
};

module.exports.edit = (req, res, next) => {
  Object.assign(req.ownGame, req.body);
  req.ownGame
    .save()
    .then((ownGame) => res.json(ownGame))
    .catch(next);
};

module.exports.detail = (req, res, next) => res.json(req.ownGame);
