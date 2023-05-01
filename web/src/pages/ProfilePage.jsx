import React from "react";
import UserDetail from "../components/users/user-detail/UserDetail";
import UserOwnGames from "../components/users/user-detail/UserOwnGames";

function ProfilePage() {
  return (
    <div>
      <UserDetail />
      <div className="flex justify-center ">
        <UserOwnGames />
      </div>
    </div>
  );
}

export default ProfilePage;
