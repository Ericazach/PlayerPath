import React from "react";
import UserForm from "../components/users/users-form/UserForm";

function RegisterPage() {
  return (
    <div>
      <div className="flex justify-center align-middle">
        <img
          className=" logo m-2 max-w-[200px] min-h-[200px]"
          src="/logoFinal.png"
          alt="logo"
        />
      </div>
      <UserForm />
    </div>
  );
}

export default RegisterPage;
