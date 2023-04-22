require("../config/db.config");
const Game = require("../models/game.model");

const GameArr = [
  {
    name: "Resident Evil",
    description: "Random Game",
    gameImg:
      "http://trophy01.np.community.playstation.net/trophy/np/NPWR07494_00_00114BD0BC93A5544E40ECC9E429529B7B3482AC11/DB96ABE15209E2D3AA820D2988F4FE5344662957.PNG",
    trophies: ["Gold", "Silver"],
    tags: ["terror", "adventure"],
  },
  {
    name: "God of War 2",
    description: "Random Game",
    gameImg:
      "http://trophy01.np.community.playstation.net/trophy/np/NPWR04605_00_0003F44A427E5BD9F413208B08B93F612A1CA93137/ED3FA6A43EB1A9553598D71EDEC64923C1597003.png",
    trophies: ["Gold", "Silver"],
    tags: ["terror", "adventure"],
  },
  {
    name: "Ratchet & Clank: Into the Nexus",
    description: "Random Game",
    gameImg:
      "http://trophy01.np.community.playstation.net/trophy/np/NPWR00737_00_00FA3A73EE3A2DEB2B40BF284C58DE0F58460C3C3F/D823EA0FFFEE6DEF4E8010EA7905C73747197693.png",
    trophies: ["Gold", "Silver"],
    tags: ["terror", "adventure"],
  },
  {
    name: "Deadpool",
    description: "Random Game",
    gameImg:
      "http://trophy01.np.community.playstation.net/trophy/np/NPWR04891_00_00E7BAFC1BB1DBC5F18363B5E38A2EC54D801D1E13/26F9A9B563D85E4504309D2167A61C4543926AC7.png",
    trophies: ["Gold", "Silver"],
    tags: ["terror", "adventure"],
  },
  {
    name: "Silent Hill",
    description: "Random Game",
    gameImg:
      "http://trophy01.np.community.playstation.net/trophy/np/NPWR03529_00_00C8235FA05C36855A493038334B452749D23B4D8E/BA6E87245FDC6BE809323ACC139E71294A073367.png",
    trophies: ["Gold", "Silver"],
    tags: ["terror", "adventure"],
  },
];

Game.create(GameArr)
  .then(() => console.log("Games created"))
  .catch((err) => console.log(err));
