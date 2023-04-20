const Like = require("../models/like.model");

module.exports.toggle = (req, res, next) => {
  const params = {
    game: req.params.id,
    author: "644181d18410b3e1ec15cf77", //req.user.id
  };

  Like.findOne(params)
    .then((like) => {
      if (like) {
        return Like.deleteOne({ _id: like.id });
      } else {
        return Like.create(params);
      }
    })
    .then((like) => res.json(like))
    .catch(next);
};
