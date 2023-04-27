import React from "react";
import UserLogin from "../components/users/users-login/UserLogin";

function LogInPage() {
  return (
    <div>
      <div className="flex justify-center align-middle">
        <img
          className=" logo m-2 max-w-[200px] min-h-[200px]"
          src="/logoFinal.png"
          alt="logo"
        />
      </div>
      <UserLogin />
    </div>
  );
}

export default LogInPage;
