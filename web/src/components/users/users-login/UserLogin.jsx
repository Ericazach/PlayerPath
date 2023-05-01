import { useForm } from "react-hook-form";
import userService from "../../../services/users/users";
import { useState, useContext } from "react";
import { Alert } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthStore";

function UserLogin() {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [serverError, setServerError] = useState(undefined);
  const { onUserChange } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const onLoginSubmit = async (user) => {
    try {
      setServerError();
      user = await userService.login(user);
      onUserChange(user);
      navigate("/");
    } catch (error) {
      const errors = error.response?.data?.errors;

      if (errors) {
        Object.keys(errors).forEach((inputName) =>
          setError(inputName, { message: errors[inputName] })
        );
      } else {
        setServerError(error.message);
      }
    }
  };

  return (
    <div>
      {location?.state?.user.confirm === false && (
        <div className="flex justify-center items-center">
          <Alert color="failure" className="mt-20 h-30 w-[400px]">
            <div className="text-2xl text-center text-[#41436a]">
              You must active your account before login, please check your
              inbox.
            </div>
          </Alert>
        </div>
      )}
      <form
        onSubmit={handleSubmit(onLoginSubmit)}
        className="grid justify-center "
      >
        {serverError && (
          <Alert color="failure" className="mt-20  h-30">
            <span className="text-center">
              <span className="text-2xl ">Info alert!</span>{" "}
              <div className="text-2xl ">{serverError}.</div>
            </span>
          </Alert>
        )}
        <div className="space-y-12 grid gap-5 justify-items-center mt-10 p-20 border">
          <div className="border-b pb-12 ">
            <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-full">
                <label
                  htmlFor="username"
                  className="block text-2xl font-medium leading-6 text-[#FF9677]"
                >
                  Username
                </label>
                <div className="mt-2">
                  <div className=" rounded-md shadow-sm ring-1 ring-inset">
                    <input
                      className={`block w-full rounded-md py-1.5  text-[#FF9677] sm:text-2xl sm:leading-6  ${
                        errors.username ? "border-red-500 border-2" : ""
                      }`}
                      type="text"
                      {...register("username", {
                        required: "Username is required",
                      })}
                    />
                    {errors.username && (
                      <div className="text-red-500 text-lg">
                        {errors.username?.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:col-span-full mt-4">
              <label
                htmlFor="username"
                className="block text-2xl font-medium leading-6 text-[#FF9677]"
              >
                Password
              </label>
              <div className="mt-2">
                <div className=" rounded-md shadow-sm ring-1 ring-inset">
                  <input
                    className={`block w-full rounded-md py-1.5  text-[#FF9677] sm:text-2xl sm:leading-6  ${
                      errors.password ? "border-red-500 border-2" : ""
                    }`}
                    type="password"
                    {...register("password", {
                      required: "password is required",
                    })}
                  />
                  {errors.password && (
                    <div className="text-red-500 text-lg">
                      {errors.password?.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex mt-3 gap-3 justify-center text-2xl leading-6 text-[#FF9677]">
          <p>New in PlayerPath?</p>
          <Link to="/register" className="text-[#F54768]">
            Create an Account
          </Link>
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-[#FF9677] px-3 py-2 text-2xl font-semibold text-[#41436A] shadow-sm hover:bg-[#974063] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#974063] mb-20"
          >
            Log In!
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserLogin;
