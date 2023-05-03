const express = require("express");
const router = express.Router();
const storage = require("../config/multer.config");

const ownGames = require("../controllers/ownGames.controllers");
const games = require("../controllers/games.controllers");
const user = require("../controllers/user.controllers");
const like = require("../controllers/like.controllers");
const comments = require("../controllers/comments.controller");

const ownGamesMid = require("../middlewares/ownGames.mid");
const userMid = require("../middlewares/user.mid");
const commentMid = require("../middlewares/comments.mid");
const gamesMid = require("../middlewares/games.mid");
const secure = require("../middlewares/secure.mid");

router.post("/login", user.login);

router.get("/owngames", secure.auth, ownGames.list);
router.post("/owngames/create", secure.auth, ownGames.create);
router.get("/owngames/:id", secure.auth, ownGamesMid.exists, ownGames.detail);
router.delete(
  "/owngames/:id",
  secure.auth,
  ownGamesMid.exists,
  ownGames.delete
);
router.patch(
  "/owngames/:id",
  secure.auth,
  ownGamesMid.exists,
  ownGames.edit
);

router.get("/games", games.list);
router.post("/games", games.create);
router.get("/games/:id", gamesMid.exists, games.detail);

router.get("/users", user.list);
router.post("/users", user.create);
router.get("/users/:id", secure.auth, userMid.exists, user.detail);
router.get("/users/:id/confirm", userMid.exists, user.confirm);
router.delete("/users/:id", secure.auth, userMid.exists, user.delete);
router.patch(
  "/users/:id",
  secure.auth,
  userMid.exists,
  storage.user.single("file"),
  user.edit
);

router.post("/games/:id/like", secure.auth, gamesMid.exists, like.toggle);

router.post("/games/:id/comment", secure.auth, comments.create);
router.patch(
  "/games/:id/comment/:commentId",
  secure.auth,
  commentMid.exists,
  commentMid.checkOwner,
  comments.edit
);
router.delete(
  "/games/:id/comment/:commentId",
  secure.auth,
  commentMid.exists,
  commentMid.checkOwner,
  comments.delete
);

module.exports = router;
