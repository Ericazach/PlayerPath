import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ownGameService from "../../../../services/ownGames/ownGames";
// import { AuthContext } from "../../../../context/AuthStore";

function OwnGameDetail() {
  const { ownGameId } = useParams();
  const [ownGame, setOwnGame] = useState();
  const navigate = useNavigate();
  // const { user } = useContext(AuthContext);

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

  return (
    <div>
      {!ownGame ? (
        <>
          {" "}
          <p className="text-white">Loading...</p>
        </>
      ) : (
        <>
          <div className="flex justify-center mt-40">
            <div className="flex flex-col justify-center items-center bg-[#974063] border border-gray-200 rounded-lg shadow md:flex-row h-[600px] md:max-w-[800px] hover:bg-gray-700 dark:border-gray-700 dark:bg-white dark:hover:bg-gray-700">
              <img
                className="m-7 object-cover w-full rounded-t-lg h-[500px]  md:w-[450px] md:rounded-none md:rounded-l-lg"
                src=""
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="m-3 text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
                  {ownGame.name}
                </h5>
                <p className="m-3 font-normal text-white dark:text-gray-200">
                  Ratchet & Clank: Into the Nexus (known as Ratchet & Clank:
                  Nexus in Europe and Australia) is an entry in the Ratchet &
                  Clank series serving as an epilogue to the Future saga,[1]
                  developed by Insomniac Games and published by Sony Interactive
                  Entertainment. It is a shorter title than A Crack in Time, but
                  longer than Quest for Booty or Full Frontal Assault.[2] It was
                  released in November 2013 for the PlayStation 3. It was also
                  added to the PlayStation Now streaming service library of
                  games. A related mobile spinoff, Before the Nexus, was also
                  released that could transfer Raritanium to an Into the Nexus
                  save.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default OwnGameDetail;
