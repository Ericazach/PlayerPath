import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import gameService from "../../../services/games/games";
import { AuthContext } from "../../../context/AuthStore";
import "./gameDetail.css";

function GameDetail() {
  const { gameId } = useParams();
  const [game, setGame] = useState();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

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
          <div className="flex justify-center mt-40">
            <div className="flex flex-col justify-center items-center bg-[#974063] border border-gray-200 rounded-lg shadow md:flex-row h-[600px] md:max-w-[800px] hover:bg-gray-700 dark:border-gray-700 dark:bg-white dark:hover:bg-gray-700">
              <img
                className="m-7 object-cover w-full rounded-full h-[500px]  md:w-[450px] md:rounded-r-lg md:rounded-l-lg"
                src={game.gameImg}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="m-3 text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
                  {game.name}
                </h5>
                <p className="m-3 font-normal text-white dark:text-gray-200">
                  {game.description}
                </p>
                <p className="m-3 font-normal text-white dark:text-gray-200"></p>

                {!user ? (
                  <></>
                ) : (
                  <>
                    <div className="flex buttons mb-3 text-center">
                      <Link to={`/ownGames/${game.id}/create`}>
                        <button className="button primary">
                          Add to My Games
                        </button>
                      </Link>
                      {/* <Link to={`/ownGames/${game.id}/create`}>
                        <button className="button primary ghost">
                          Leave a Comment
                        </button>
                      </Link> */}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-3 p-6">
            <Comments currentUserId={user.id} />
          </div> */}
        </>
      )}
    </>
  );
}

export default GameDetail;
