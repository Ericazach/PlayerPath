import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import ownGameService from "../../../../services/ownGames/ownGames";

function OwnGameEditForm() {
  const { ownGameId } = useParams();
  const [ownGame, setOwnGame] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fecthOwnGame = async () => {
      try {
        const newOwnGame = await ownGameService.detail(ownGameId);
        setOwnGame(newOwnGame);
      } catch (error) {
        console.error(error);
      }
    };

    fecthOwnGame();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onEditOwnGame = async (ownGame) => {
    try {
      const editedOwnGame = await ownGameService.edit(ownGameId, ownGame);
      navigate(`/ownGames/${ownGameId}`);
    } catch (error) {
      console.error(error);
    }
  };

  if (!ownGame) {
    return <></>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onEditOwnGame)}>
        <div className="card mt-10">
          <div className="card-container flex  justify-center items-center">
            <img
              className="ms-5 mb-5 object-cover w-full rounded-full h-[500px]  md:w-[450px] md:rounded-r-lg md:rounded-l-lg"
              src={ownGame.game.gameImg}
              alt=""
            />
            <div className="space-y-12 grid gap-5 justify-items-center p-20 ">
              <h5 className=" text-center text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
                {ownGame.game.name}
              </h5>
              <div className="border-b border-gray-900/10 pb-12">
                <div className="sm:col-span-full">
                  <div className="mt-3">
                    <div className=" rounded-md shadow-sm ring-1 ring-inset">
                      <input
                        type="hidden"
                        value={ownGame.game.id}
                        className={`block w-full rounded-md py-1.5  text-[#FF9677] sm:text-2xl sm:leading-6 `}
                        {...register("game")}
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-full ">
                  <label
                    htmlFor="email"
                    className="block mt-5 text-start text-2xl font-medium leading-6 text-[#FF9677]"
                  >
                    State
                  </label>
                  <div className="mt-3 mb-7">
                    <select
                      className="bg-transparent border-0 border-b-2 border-white text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("state")}
                    >
                      <option value="WishList">Playing</option>
                      <option value="Completed">Completed</option>
                      <option value="Finished">Finished</option>
                      <option value="Abandoned">Abandoned</option>
                      <option value="Wanted">Wanted</option>
                    </select>
                    {errors.state && (
                      <div className="text-red-500 text-lg">
                        {errors.state?.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-1 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-full">
                    <div className="mt-3">
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="number"
                          name="progress"
                          max="100"
                          min="0"
                          id="progress"
                          className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                          placeholder=" "
                          {...register("progress")}
                        />
                        <label
                          htmlFor="progress"
                          className=" peer-focus:font-medium absolute text-2xl text-[#FF9677] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF9677] peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Progress
                        </label>
                      </div>

                      {errors.progress && (
                        <div className="text-red-500 text-lg">
                          {errors.progress?.message}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-x-2 mt-5">
                  <button className="text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    <NavLink to={"/users/me"}>Cancel</NavLink>
                  </button>
                  <button
                    type="submit"
                    className="text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Edit!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default OwnGameEditForm;
