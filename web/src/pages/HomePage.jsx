import React from "react";
import GamesList from "../components/games/games-list/GamesList";

function Home() {
  return (
    <div>
      <div className="flex justify-center align-middle">
        <img
          className=" logo m-2 max-w-[200px] min-h-[200px]"
          src="/logoFinal.png"
          alt="logo"
        />
      </div>
      <div className="flex justify-center flex-col items-center">
        <GamesList />
      </div>
    </div>
  );
}

export default Home;
