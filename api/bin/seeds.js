require("../config/db.config");
const Game = require("../models/game.model");

const GameArr = [
  {
    name: "Resident Evil",
    description: "Random Game",
    gameImg:
      "https://i.pinimg.com/originals/22/ed/b5/22edb53b73c2106dd6f49f4b0e233f43.jpg",
    trophies: ["Gold", "Silver"],
    tags: ["terror", "adventure"],
  },
  {
    name: "God of War 2",
    description: "Random Game",
    gameImg:
      "https://game-kala.com/wp-content/uploads/2020/10/6670-japanese-cover-4968.jpg",
    trophies: ["Gold", "Silver"],
    tags: ["terror", "adventure"],
  },
  {
    name: "Ratchet & Clank: Into the Nexus",
    description: "Random Game",
    gameImg:
      "https://m.media-amazon.com/images/M/MV5BYWQ5ZTM1YmMtNjQ2Ny00OGU4LWI5ZGMtOWNkZTY0MjJjNTZjXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
    trophies: ["Gold", "Silver"],
    tags: ["terror", "adventure"],
  },
  {
    name: "Deadpool",
    description: "Random Game",
    gameImg:
      "https://m.media-amazon.com/images/M/MV5BOTk3YzUyZjYtMzk4My00NjNiLTk4YTktOWM2MDI2MzE4MzFkXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg",
    trophies: ["Gold", "Silver"],
    tags: ["terror", "adventure"],
  },
  {
    name: "Silent Hill",
    description: "Random Game",
    gameImg:
      "https://m.media-amazon.com/images/I/51R3Q2KW3SL._AC_UF1000,1000_QL80_.jpg",
    trophies: ["Gold", "Silver"],
    tags: ["terror", "adventure"],
  },
];

Game.create(GameArr)
  .then(() => console.log("Games created"))
  .catch((err) => console.log(err));
