import React, { useEffect, useState } from "react";
import "./UserDetail.css";
import { useParams } from "react-router-dom";
import userService from "../../../services/users/users";
import ownGamesService from "../../../services/ownGames/ownGames";
import OwnGameItem from "./OwnGameItem";

function UserOwnGames() {
  const [user, setUser] = useState();
  const [ownGames, setOwnGames] = useState();
  const { userId } = useParams();

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await userService.get(userId);
        setUser(user);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, [userId]);

  useEffect(() => {
    if (!userId) {
      return;
    }

    ownGamesService
      .list()
      .then((res) => setOwnGames(res))
      .catch((err) => console.error(err));
  }, [userId]);

  if (!ownGames) {
    return <h1>There is no Games yet</h1>;
  }

  return (
    <div>
      <div className="skills">
        <h6 className=" text-gray-200 whitespace-normal dark:text-gray-400 text-2xl">My Games</h6>
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          {ownGames.map((game) => (
            <div key={game.id} className="grid gap-2 m-4">
              <OwnGameItem
                name={game.game.name}
                gameImg={game.game.gameImg}
                id={game.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserOwnGames;
