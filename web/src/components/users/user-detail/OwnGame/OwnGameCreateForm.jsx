import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ownGameService from "../../../../services/ownGames/ownGames";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthStore";
import gameService from "../../../../services/games/games";

function OwnGameCreateForm() {
  const { gameId } = useParams();
  const [game, setGame] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const { user } = useContext(AuthContext);
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

  const onAddGame = async (ownGame) => {
    try {
      const newOwnGame = await ownGameService.create(ownGame);
      navigate("/users/me");
    } catch (error) {
      console.log(error);
    }
  };

  if (!game) {
    return;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onAddGame)}>
        <div className="card mt-10">
          <div className="card-container flex flex-col justify-center items-center">
            <div className="space-y-12 grid gap-5 justify-items-center p-20 ">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="sm:col-span-full">
                  <div className="mt-3">
                    <div className=" rounded-md shadow-sm ring-1 ring-inset">
                      <input
                        type="hidden"
                        value={game.id}
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
                  <div className="mt-3">
                    <select
                      className={`block w-full rounded-md border-0 py-1.5 text-[#FF9677]  sm:text-lg sm:leading-6  ${
                        errors.state ? "border-red-500 border-2" : ""
                      }`}
                      {...register("state", {
                        required: "State is required",
                      })}
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
                    <label
                      htmlFor="progress"
                      className="block mt-5 text-start text-2xl font-medium leading-6 text-[#FF9677]"
                    >
                      Progress
                    </label>
                    <div className="mt-3">
                      <input
                        type="number"
                        className={`block w-full rounded-md border-0 py-1.5 text-[#FF9677]  sm:text-2xl  sm:leading-6  ${
                          errors.progress ? "border-red-500 border-2" : ""
                        }`}
                        max="100"
                        min="0"
                        {...register("progress", {
                          required: "User progress is required",
                        })}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-x-6">
                  <button className="rounded-md bg-[#FF9677] px-3 py-2 text-2xl font-semibold text-[#41436A] shadow-sm hover:bg-[#974063] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#974063] mt-5">
                    <NavLink to={"/users/me"}>Cancel</NavLink>
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-[#FF9677] px-3 py-2 text-2xl font-semibold text-[#41436A] shadow-sm hover:bg-[#974063] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#974063] mt-5"
                  >
                    Change!
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

export default OwnGameCreateForm;
