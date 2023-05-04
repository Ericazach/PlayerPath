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
          <div className="">
            <div className="">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="block py-2.5 px-0 w-full text-xl text-gray-300  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                  placeholder=" "
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 4,
                      message: "User name needs at least 4 characters",
                    },
                  })}
                />
                {errors.username && (
                  <div className="text-red-500 text-lg">
                    {errors.username?.message}
                  </div>
                )}
                <label
                  htmlFor="username"
                  className="peer-focus:font-medium absolute text-2xl text-[#FF9677] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF9677] peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Username
                </label>
              </div>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="password"
                id="password"
                className="block py-2.5 px-0 w-full text-xl text-gray-300  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                {...register("password", {
                  required: "User password is required",
                  minLength: {
                    value: 8,
                    message: "User password needs at least 8 characters",
                  },
                })}
              />
              {errors.password && (
                <div className="text-red-500 text-lg">
                  {errors.password?.message}
                </div>
              )}
              <label
                htmlFor="password"
                className="peer-focus:font-medium absolute text-2xl text-[#FF9677] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF9677] peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
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
