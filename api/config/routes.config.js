const express = require("express");
const router = express.Router();

const ownGames = require("../controllers/ownGames.controllers");
const user = require("../controllers/user.controllers");
const like = require("../controllers/like.controllers");
const comments = require("../controllers/comments.controller");

const ownGamesMid = require("../middlewares/ownGames.mid");
const userMid = require("../middlewares/user.mid");

router.get("/owngames", ownGames.list);
router.post("/owngames", ownGames.create);
router.get("/owngames/:id", ownGamesMid.exists, ownGames.detail);
router.delete("/owngames/:id", ownGamesMid.exists, ownGames.delete);
router.patch("/owngames/:id", ownGamesMid.exists, ownGames.edit);

router.get("/users", user.list);
router.post("/users", user.create);
router.get("/users/:id", userMid.exists, user.detail);
router.delete("/users/:id", userMid.exists, user.delete);
router.patch("/users/:id", userMid.exists, user.edit);

router.post("/games/:id/like", like.toggle);

router.get("/games/:id/comment", comments.list);
router.patch("/games/:id/comment/:commentID", comments.edit);
router.delete("/games/:id/comment/:commentID", comments.delete);

module.exports = router;
