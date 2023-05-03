import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import userService from "../../../services/users/users";
import "./UserDetail.css";

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
        <div className="card mt-5">
          <div className="card-container flex flex-col justify-center items-center">
            <button className="button self-end primary me-2 rounded-full">
              <NavLink to={`/users/${user.id}/edit`}>Edit Profile</NavLink>
            </button>
            <img
              className="logo max-w-[180px] min-h-[180px]"
              src={
                user.profilePic ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              }
              alt="user"
            />
            <h3 className="h3">{user.username}</h3>
            <h6 className="h6">{user.email}</h6>
            <p className="p mb-5">{user.bio}</p>
            <div className="buttons mb-3">
              <button className="button primary">My Games</button>
              <button className="button primary ghost">Wishlist</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserDetail;
