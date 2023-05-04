import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import gameService from "../../../services/games/games";
import { AuthContext } from "../../../context/AuthStore";
import { FaTrophy } from "react-icons/fa";

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
            <div className="flex flex-col justify-center items-center bg-[#974063] border border-gray-200 rounded-lg shadow md:flex-row h-[750px] md:max-w-[800px] hover:bg-gray-700 dark:border-gray-700 dark:bg-white dark:hover:bg-gray-700">
              <img
                className="m-7 object-cover w-full rounded-full h-[500px]  md:w-[450px] md:rounded-r-lg md:rounded-l-lg"
                src={game.gameImg}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="m-3 text-2xl text-center font-bold tracking-tight text-gray-200 dark:text-white">
                  {game.name}
                </h5>
                <p className="m-3 font-normal text-white text-center dark:text-gray-200">
                  {game.description}
                </p>
                <div className="flex gap-4 justify-center items-center m-2">
                  <div className="flex flex-col justify-center items-center">
                    <FaTrophy className="text-blue-400 text-2xl" />
                    <p className="text-blue-400 text-lg">{game.trophies[0]}</p>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <FaTrophy className="text-yellow-200 text-2xl" />
                    <p className="text-yellow-200 text-lg">
                      {game.trophies[1]}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <FaTrophy className="text-gray-300 text-2xl" />
                    <p className="text-gray-300 text-lg">{game.trophies[2]}</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <FaTrophy className="text-yellow-400 text-2xl" />
                    <p className="text-yellow-400 text-lg">
                      {game.trophies[3]}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center flex-wrap items-center gap-1 mt-5">
                    {game.tags.map((tag) => (
                      <div className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                {!user ? (
                  <></>
                ) : (
                  <>
                    <div className="flex justify-center buttons m-3 text-center">
                      <Link to={`/ownGames/${game.id}/create`}>
                        <button className="button primary ">
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
