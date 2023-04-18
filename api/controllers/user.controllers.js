const User = require("../models/user.model");

module.exports.list = (req, res, next) => {
  User.find()
    .then((users) => res.json(users))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch(next);
};

module.exports.detail = (req, res, next) => res.json(req.user); 

module.exports.delete = (req, res, next) => {
  User.deleteOne({ _id: req.user.id })
    .then(() => res.status(204).send)
    .catch(next);
};

module.exports.edit = (req, res, next) => {
  Object.assign(req.user, req.body);

  req.user
    .save()
    .then((user) => res.json(user))
    .catch(next);
};
