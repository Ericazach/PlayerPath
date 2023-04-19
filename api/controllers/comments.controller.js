const Comment = require("../models/comment.model");

module.exports.list = (req, res, next) => {
  Comment.find()
    .then((comments) => res.json(comments))
    .catch(next);
};

module.exports.edit = (req, res, next) => {};

module.exports.delete = (req, res, next) => {};
