import React, { useEffect, useState } from "react";
import "./UserDetail.css";
import { useParams } from "react-router-dom";
import userService from "../../../services/users/users";

function UserOwnGames() {
  const [user, setUser] = useState();
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

  console.log(user?.ownGames);

  return (
    <div>
      <div className="skills">
        <h6 className="h6">My Games</h6>
        {/* <ul>{user.ownGames.map((game) => game.state)}</ul> */}
      </div>
    </div>
  );
}

export default UserOwnGames;
