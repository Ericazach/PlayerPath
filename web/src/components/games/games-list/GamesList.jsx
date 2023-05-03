import { useEffect, useState } from "react";
import gamesService from "../../../services/games/games";
import GameItem from "../games-item/GameItem";
import Slider from "./Slider";

function GamesList() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    gamesService
      .list()
      .then((res) => setGames(res))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (ev) => {
    setSearch(ev.target.value);
  };

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Slider games={games} />

      <form className="flex items-start w-[900px] m-9">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-200 dark:text-gray-200"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-[#974063] border border-[#5c5e8a] text-gray-200 text-lg rounded-lg focus:ring-[#41436A] focus:border-[#41436A] block w-full pl-10 p-2.5  dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={search}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ml-2 text-2xl font-medium text-white bg-[#974063] rounded-lg border border-[#5c5e8a] hover:bg-[#41436A] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {filteredGames.map((game) => (
          <div key={game.id} className="grid gap-2 mb-4">
            <GameItem name={game.name} gameImg={game.gameImg} id={game.id} />
          </div>
        ))}
      </div>
    </>
  );
}

export default GamesList;
