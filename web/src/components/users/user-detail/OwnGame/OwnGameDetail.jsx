import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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

  return (
    <div>
      {!ownGame ? (
        <>
          <p className="text-white">Loading...</p>
        </>
      ) : (
        <>
          <div className="flex justify-center mt-40">
            <div className="flex flex-col justify-center items-center bg-[#974063] border border-gray-200 rounded-lg shadow md:flex-row h-[600px] md:max-w-[800px] hover:bg-gray-700 dark:border-gray-700 dark:bg-white dark:hover:bg-gray-700">
              <img
                className="m-7 object-cover w-full rounded-t-lg h-[500px]  md:w-[450px] md:rounded-none md:rounded-l-lg"
                src={ownGame.game.gameImg}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-10 text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
                  {ownGame.game.name}
                </h5>
                <p className=" font-normal text-white dark:text-gray-200">
                  {ownGame.game.description}
                </p>
                <p className=" font-normal text-white dark:text-gray-200">
                  {ownGame.state}
                </p>

                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-white dark:text-white">
                    Progress
                  </span>
                  <span className="text-sm font-medium text-white dark:text-white">
                    {ownGame.progress}
                  </span>
                </div>
                <div className="">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${ownGame.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex buttons mb-3 mt-7 text-center gap-3">
                  <Link to={`/ownGames/${ownGame.id}/edit`}>
                    <button className="button primary">Edit</button>
                  </Link>

                  <button
                    className="button primary"
                    onClick={handleDeleteButton}
                  >
                    Delete
                  </button>

                  {/* <Link to={`/ownGames/${game.id}/create`}>
                        <button className="button primary ghost">
                          Leave a Comment
                        </button>
                      </Link> */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default OwnGameDetail;
