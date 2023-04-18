const express = require("express");
const router = express.Router();

const ownGames = require("../controllers/games.controllers");
const user = require("../controllers/user.controllers");
const like = require("../controllers/like.controllers");

const ownGamesMid = require("../middlewares/games.mid");
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

module.exports = router;
