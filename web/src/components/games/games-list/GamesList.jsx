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
      <div className="grid grid-cols-2 md:grid-cols-4 mt-7">
        {games.map((game) => (
          <div key={game.name} className="grid gap-2 mb-4">
            <GameItem name={game.name} gameImg={game.gameImg} id={game.id} />
          </div>
        ))}
      </div>
    </>
  );
}

export default GamesList;
