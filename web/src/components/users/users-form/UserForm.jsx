import { useForm } from "react-hook-form";
import userService from "../../../services/users/users";
import { useState } from "react";
import { Alert } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function UserForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [serverError, setServerError] = useState(undefined);
  const navigate = useNavigate();

  const onUserSubmit = async (user) => {
    try {
      setServerError(undefined);
      console.debug("Registering...");
      user = await userService.create(user);
      navigate("/login", { state: { user } });
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors) {
        console.error(error.message, errors);
        Object.keys(errors).forEach((inputName) =>
          setError(inputName, { message: errors[inputName] })
        );
      } else {
        console.error(error);
        setServerError(error.message);
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onUserSubmit)}
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
            <div className=" ">
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

              <div className="col-span-full">
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="bio"
                    className=" mt-5 text-start text-2xl font-medium leading-6 text-[#FF9677]"
                  >
                    Bio
                  </label>
                  <textarea
                    className="block py-2.5 px-0 w-full text-xl text-gray-300  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                    rows={3}
                    {...register("bio", {
                      required: "User bio is required",
                      minLength: {
                        value: 6,
                        message: "User bio needs at least 6 characters",
                      },
                    })}
                  />
                  {errors.bio && (
                    <div className="text-red-500 text-lg">
                      {errors.bio?.message}
                    </div>
                  )}
                </div>
                <p className="mt-3 text-2xl leading-6 text-[#FF9677]">
                  Write a few sentences about yourself.
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-2xl mb-7 font-semibold leading-7 text-[#FF9677]">
              Personal Information
            </h2>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-xl text-gray-300  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                {...register("email", {
                  required: "User email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "User email must be valid",
                  },
                })}
              />
              {errors.email && (
                <div className="text-red-500 text-lg">
                  {errors.email?.message}
                </div>
              )}
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-2xl text-[#FF9677] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF9677] peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
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

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-[#FF9677] px-3 py-2 text-2xl font-semibold text-[#41436A] shadow-sm hover:bg-[#974063] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#974063] mb-20"
          >
            Create your User!
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
