const User = require("../models/user.model");

module.exports.create = (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch(next);
};

module.exports.detail = (req, res, next) => res.json(req.user); //!cuando traigo el usuario puedo hacer un populate de sus juegos?
