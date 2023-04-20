import { useState } from "react";
import GameJson from "../../../seed/games";

function GamesList() {
  const [games, setGames] = useState([GameJson]);
  return <></>;
}

export default GamesList;
