import { useEffect, useState } from "react";
import gamesService from "../../services/games/games";

function GamesList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gamesService
      .list()
      .then((res) => setGames(res))
      .catch((err) => console.error);
  }, []);

  return (
    <>
      {games.map((game) => (
        <div
          key={game.name}
          className="flex flex-col justify-center items-center mb-10 mt-5"
        >
          <h1 className="text-2xl text-[#FF9677]">{game.name}</h1>
          <img className="w-1/4" src={game.gameImg} alt="game" />
        </div>
      ))}
    </>
  );
}

export default GamesList;
