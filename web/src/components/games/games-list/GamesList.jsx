import { useState } from "react";
import GameJson from "../../../seed/games";

function GamesList() {
  const [games, setGames] = useState([GameJson]);
  console.log(GameJson);
  return <></>;
}

export default GamesList;
