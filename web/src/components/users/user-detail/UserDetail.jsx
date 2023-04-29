import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userService from "../../../services/users/users";

function UserDetail() {
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

  return (
    <>
      {!user ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{user.username}</h1>
        </>
      )}
    </>
  );
}

export default UserDetail;
