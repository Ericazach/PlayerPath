import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import ownGameService from "../../../../services/ownGames/ownGames";
import { AuthContext } from "../../../../context/AuthStore";

function OwnGameDetail() {
  const { ownGameId } = useParams();
  const [ownGame, setOwnGame] = useState();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function fetchOwnGame() {
      try {
        const ownGameResult = await ownGameService.detail(ownGameId);
        setOwnGame(ownGameResult);
      } catch (error) {
        console.error(error);
        const statusCode = error.response?.status;
        if (statusCode === 404) {
          navigate("/");
        }
      }
    }

    fetchOwnGame();
  }, [ownGameId]);

  const handleDeleteButton = async () => {
    try {
      const deleteResult = window.confirm(
        "Are you sure that you want to delete this Game?"
      );
      if (deleteResult) {
        await ownGameService.remove(ownGameId);
        navigate("/users/me");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!ownGame) {
    return <></>;
  }

  return (
    <div>
      {!ownGame ? (
        <>
          <p className="text-white">Loading...</p>
        </>
      ) : (
        <>
          <div className="flex justify-center mt-40">
            <div className="flex flex-col justify-center items-center bg-[#974063] border border-gray-200 rounded-lg shadow md:flex-row h-[700px] md:max-w-[700px] hover:bg-gray-700 dark:border-gray-700 dark:bg-white dark:hover:bg-gray-700">
              <img
                className="m-7 object-cover w-full rounded-t-lg h-[500px]  md:w-[450px] md:rounded-r-lg md:rounded-l-lg"
                src={ownGame?.game?.gameImg}
                alt=""
              />
              <div className=" flex flex-col justify-between p-5 leading-normal">
                <h5 className="m-3 text-2xl text-center font-bold tracking-tight text-gray-200 dark:text-white">
                  {ownGame.game.name}
                </h5>
                {/* <p className=" m-3 font-normal text-white text-center dark:text-gray-200">
                  {ownGame.game.description}
                </p> */}

                <div className="mt-7 mb-7 flex justify-center items-center">
                  <p className=" text-2xl  text-[#e4e5f2]  dark:text-gray-200">
                    State:
                  </p>
                  <p className="text-white bg-gradient-to-br from-purple-400 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 ms-7">
                    {ownGame.state}
                  </p>
                </div>

                <div className="flex justify-between mb-1">
                  <span className=" text-lg  text-[#e4e5f2]   dark:text-gray-200">
                    My Progress
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-br from-purple-400 to-blue-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                    style={{ width: `${ownGame.progress}%` }}
                  >
                    {ownGame.progress}
                  </div>
                </div>

                <div className="flex justify-center buttons mb-3 mt-7 text-center gap-3">
                  <Link to={`/ownGames/${ownGame.id}/edit`}>
                    <button className="py-2.5 px-5  text-sm font-medium text-gray-200 focus:outline-none bg-[#41436A] rounded-lg  hover:bg-gray-600 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Edit
                    </button>
                  </Link>

                  <button
                    className="py-2.5 px-5  text-sm font-medium text-gray-200 focus:outline-none bg-[#41436A] rounded-lg  hover:bg-gray-600 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={handleDeleteButton}
                  >
                    Delete
                  </button>
                </div>
                <button
                  type="button"
                  className=" mt-28 py-2.5 px-5  text-sm font-medium text-gray-200 focus:outline-none bg-[#41436A] rounded-lg  hover:bg-gray-600 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <NavLink to={`/users/me`}>Back to Profile</NavLink>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default OwnGameDetail;
