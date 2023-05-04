require("../config/db.config");
const Game = require("../models/game.model");

const GameArr = [
  {
    name: "Horizon Zero Dawn",
    description:
      "The story is set in a post-apocalyptic United States, between the states of Colorado, Wyoming, Utah, California, and Nevada in the 31st century. Humans live in scattered, primitive tribes with varying levels of technological development. Their technologically advanced predecessors are remembered as the Old Ones.Large robotic creatures, known as machines, dominate the Earth. For the most part, they peacefully coexist with humans, who occasionally hunt them for parts.",
    gameImg: "https://m.media-amazon.com/images/I/71Uzb-UfIQS._AC_SL1000_.jpg",
    trophies: ["1", "2", "11", "65"],
    tags: ["Action", "Science fiction", "Drama", "Open world"],
  },
  {
    name: "Horizon Forbidden West",
    description:
      "The story is set in a post-apocalyptic United States, between the states of Colorado, Wyoming, Utah, California, and Nevada in the 31st century. Humans live in scattered, primitive tribes with varying levels of technological development. Their technologically advanced predecessors are remembered as the Old Ones.Large robotic creatures, known as machines, dominate the Earth. For the most part, they peacefully coexist with humans, who occasionally hunt them for parts.",
    gameImg:
      "https://www.vsgamers.es/thumbnails/product_gallery_large/uploads/products/sony/videojuegos/horizon-forbidden-west-ps4/galeria/horizon-forbidden-west-ps4-photos-image-cb451d0c54bad83538bf06d2911d25.jpg",
    trophies: ["1", "2", "11", "65"],
    tags: ["Action", "Science fiction", "Drama", "Open world"],
  },
  {
    name: "Resident Evil 3",
    description:
      "Biohazard (バイオハザード Baiohazādo?, 'riesgo biológico') —nombre con que se conoce en Japón—, rebautizado en Estados Unidos y Europa como Resident Evil (“el mal que reside”), es una serie de videojuegos de terror y una franquicia de medios, entre los que se incluyen manga, novelas, películas y coleccionables como figuras de acción, guías de estrategia y otras publicaciones.Desarrollados por Capcom y creados por Shinji Mikami la mayoría, al año 2014.",
    gameImg: "https://m.media-amazon.com/images/I/81vV8P7fFIL._AC_SL1500_.jpg",
    trophies: ["1", "9", "12", "14"],
    tags: ["Action", "Horror", "Survival"],
  },
  {
    name: "Resident Evil 2",
    description:
      "Biohazard (バイオハザード Baiohazādo?, 'riesgo biológico') —nombre con que se conoce en Japón—, rebautizado en Estados Unidos y Europa como Resident Evil (“el mal que reside”), es una serie de videojuegos de terror y una franquicia de medios, entre los que se incluyen manga, novelas, películas y coleccionables como figuras de acción, guías de estrategia y otras publicaciones.Desarrollados por Capcom y creados por Shinji Mikami la mayoría, al año 2014, se han vendido 61 millones de copias de los videojuegos en todo el mundo.",
    gameImg: "https://m.media-amazon.com/images/I/61OJdq6GT4L.jpg",
    trophies: ["1", "5", "15", "24"],
    tags: ["Action", "Horror", "Survival"],
  },
  {
    name: "God of War",
    description:
      "God of War II is an action-adventure hack and slash video game developed by Santa Monica Studio and published by Sony Computer Entertainment (SCE). First released for the PlayStation 2 (PS2) console on March 13, 2007, it is the second installment in the God of War series, the sixth chronologically, and the sequel to 2005's God of War. The game is based on Greek mythology and set in ancient Greece, with vengeance as its central motif.",
    gameImg: "https://m.media-amazon.com/images/I/711lrrvzt+L.jpg",
    trophies: ["1", "5", "9", "22"],
    tags: ["Action", "Fantasy", "Historical"],
  },
  {
    name: "Ratchet & Clank: Into the Nexus",
    description:
      "Ratchet & Clank: Into the Nexus (known as Ratchet & Clank: Nexus in PAL regions) is a 2013 platform video game developed by Insomniac Games and published by Sony Computer Entertainment for the PlayStation 3. It is the eighth main installment in the Ratchet & Clank series and the fourth and final installment in its Future saga.[6] The series is noted for the inclusion of exotic and unique locations and over-the-top gadgets, elements of the traditional Ratchet & Clank experience that return in this game.",
    gameImg: "https://www.sportsdirect.com/images/imgzoom/80/80318669_xxl.jpg",
    trophies: ["1", "7", "7", "8"],
    tags: ["Action", "Science fiction", "Comedy"],
  },
  {
    name: "Deadpool",
    description:
      "Deadpool is an action-adventure video game based on the Marvel Comics antihero of the same name. It was developed by High Moon Studios and published by Activision for Microsoft Windows (in digital format only), PlayStation 3, and Xbox 360 in June 2013. Written by Daniel Way, the game's story follows Deadpool as he joins forces with the X-Men and Cable to thwart Mister Sinister's latest scheme, getting into numerous comedic adventures along the way. Similarly to other media featuring the character.",
    gameImg: "https://m.media-amazon.com/images/I/81S-+hqlwgL.jpg",
    trophies: ["1", "2", "10", "38"],
    tags: ["Action", "Comedy"],
  },
  {
    name: "Call of Duty",
    description:
      "Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II. Over time, the series has seen games set in the midst of the Cold War, futuristic worlds, and the modern day. The games were first developed by Infinity Ward, then also by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare II, was released on October 28, 2022.",
    gameImg: "https://m.media-amazon.com/images/I/71fB4N0-cdL.jpg",
    trophies: ["1", "4", "11", "18"],
    tags: ["Science fiction", "Warfare", "Shooter"],
  },
  {
    name: "Grand Theft Auto 5",
    description:
      "Grand Theft Auto is a 2002 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the fourth main entry in the Grand Theft Auto series, following 2001's Grand Theft Auto III, and the sixth instalment overall. Set in 1986 within the fictional Vice City (based on Miami and Miami Beach), the single-player story follows mobster Tommy Vercetti's rise to power after being released from prison and becoming caught up in an ambushed drug deal. ",
    gameImg: "https://m.media-amazon.com/images/I/916T5H6sCtL._AC_SL1500_.jpg",
    trophies: ["1", "4", "11", "18"],
    tags: ["Shooter", "Racing", "Adventure"],
  },
  {
    name: "Uncharted",
    description:
      "Uncharted is an action-adventure video game franchise published by Sony Interactive Entertainment and developed by Naughty Dog. Created by Amy Hennig, the Uncharted franchise follows a group of treasure hunters who travel across the world to uncover various historical mysteries. The series features historical fiction, elements of fantasy and folklore, and fictional characters alongside real-world historical figures and events. ",
    gameImg: "https://m.media-amazon.com/images/I/713God7yV7S.jpg",
    trophies: ["1", "4", "11", "48"],
    tags: ["Shooter", "Adventure"],
  },
];

Game.create(GameArr)
  .then(() => console.log("Games created"))
  .catch((err) => console.log(err));
