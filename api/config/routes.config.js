const express = require("express");
const router = express.Router();

const ownGames = require("../controllers/ownGames.controllers");
const games = require("../controllers/games.controllers");
const user = require("../controllers/user.controllers");
const like = require("../controllers/like.controllers");
const comments = require("../controllers/comments.controller");

const ownGamesMid = require("../middlewares/ownGames.mid");
const userMid = require("../middlewares/user.mid");
const commentMid = require("../middlewares/comments.mid");
const gamesMid = require("../middlewares/games.mid");

router.get("/owngames", ownGames.list);
router.post("/owngames", ownGames.create);
router.get("/owngames/:id", ownGamesMid.exists, ownGames.detail);
router.delete("/owngames/:id", ownGamesMid.exists, ownGames.delete);
router.patch("/owngames/:id", ownGamesMid.exists, ownGames.edit);

router.get("/games", games.list);
router.post("/games", games.create);
router.get("/games/:id", gamesMid.exists, games.detail);

router.get("/users", user.list);
router.post("/users", user.create);
router.get("/users/:id", userMid.exists, user.detail);
router.delete("/users/:id", userMid.exists, user.delete);
router.patch("/users/:id", userMid.exists, user.edit);

router.post("/games/:id/like", like.toggle);

router.post("/games/:id/comment", comments.create);
router.patch("/games/:id/comment/:commentId", commentMid.exists, comments.edit);
router.delete(
  "/games/:id/comment/:commentId",
  commentMid.exists,
  comments.delete
);

module.exports = router;
