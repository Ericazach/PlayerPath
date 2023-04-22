const Comment = require("../models/comment.model");

module.exports.create = (req, res, next) => {
  Comment.create({
    text: req.body.text,
    game: req.params.id,
    author: req.user.id,
  })
    .then((comment) => res.json(comment))
    .catch(next);
};

module.exports.edit = (req, res, next) => {
  Object.assign(req.comment, req.body);

  req.comment
    .save()
    .then((comment) => {
      comment.populate("game author").then((comment) => res.json(comment));
      //res.json(comment)
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Comment.deleteOne({ _id: req.comment.id })
    .then(() => res.status(204).send())
    .catch(next);
};
