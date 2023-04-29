import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import gameService from "../../../services/games/games";

function GameDetail() {
  const { gameId } = useParams();
  const [game, setGame] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchGame() {
      try {
        const game = await gameService.detail(gameId);
        setGame(game);
      } catch (error) {
        console.error(error);
        const statusCode = error.response?.status;
        if (statusCode === 404) {
          navigate("/");
        }
      }
    }

    fetchGame();
  }, [gameId]);

  return (
    <>
      {!game ? (
        <p>....Finding game</p>
      ) : (
        <>
          <h1>{game.name}</h1>
        </>
      )}
    </>
  );
}

export default GameDetail;
