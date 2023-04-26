require("../config/db.config");
const Game = require("../models/game.model");

const GameArr = [
  {
    name: "Resident Evil",
    description: "Random Game",
    gameImg:
      "https://static.wikia.nocookie.net/residentevil/images/1/10/Resident_Evil_%281996_game%29.jpg/revision/latest/scale-to-width-down/1200?cb=20160705173054",
    trophies: ["Gold", "Silver"],
    tags: ["terror", "adventure"],
  },
  {
    name: "God of War 2",
    description: "Random Game",
    gameImg:
      "https://m.media-amazon.com/images/M/MV5BYWQ5ZTM1YmMtNjQ2Ny00OGU4LWI5ZGMtOWNkZTY0MjJjNTZjXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
    trophies: ["Gold", "Silver"],
    tags: ["terror", "adventure"],
  },
  {
    name: "Ratchet & Clank: Into the Nexus",
    description: "Random Game",
    gameImg:
      "https://static.wikia.nocookie.net/ratchet/images/7/75/Into_the_Nexus_front_cover.png/revision/latest?cb=20190216183719",
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
      "https://static.wikia.nocookie.net/silent/images/9/9c/SH11EuropeanCover.png/revision/latest?cb=20160327234349",
    trophies: ["Gold", "Silver"],
    tags: ["terror", "adventure"],
  },
];

Game.create(GameArr)
  .then(() => console.log("Games created"))
  .catch((err) => console.log(err));
