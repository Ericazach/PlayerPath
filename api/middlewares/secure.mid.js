module.exports.cleanBody = (req, res, next) => {
  if (req.body) {
    delete req.body_id;
  }
  next();
};
