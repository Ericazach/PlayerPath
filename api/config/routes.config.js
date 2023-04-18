const express = require("express");
const router = express.Router();
const games = require("../controllers/games.controllers");
const user = require("../controllers/user.controllers");

router.get("/games", games.list);
router.get("/games/:id", games.detail);

router.post("/users", user.create);
router.get("/users/:id", user.detail);

module.exports = router;
