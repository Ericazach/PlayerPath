import { useEffect, useState } from "react";
import gamesService from "../../../services/games/games";
import GameItem from "../games-item/GameItem";

function GamesList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gamesService
      .list()
      .then((res) => setGames(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-10 mt-10">
        {games.map((game) => (
          <div key={game.name} className="text-center w-[300px] h-[450px]">
            <GameItem name={game.name} gameImg={game.gameImg} id={game.id} />
          </div>
        ))}
      </div>
    </>
  );
}

export default GamesList;
