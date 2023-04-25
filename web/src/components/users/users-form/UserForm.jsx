import { useForm } from "react-hook-form";
import userService from "../../services/base-api/users";
import { useState } from "react";
import { Alert } from "flowbite-react";

function UserForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [serverError, setServerError] = useState(undefined);

  const onUserSubmit = (user) => {
    userService
      .create(user)
      .then((user) => console.info(user))
      .catch((error) => {
        const errors = error.response?.data?.errors;
        if (errors) {
          Object.keys(errors).forEach((inputName) =>
            setError(inputName, { message: errors[inputName] })
          );
        } else {
          setServerError(error.message);
        }
      });
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
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
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
                      placeholder="Username"
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

              <div className="col-span-full">
                <label
                  htmlFor="bio"
                  className="block text-2xl font-medium leading-6 text-[#FF9677]"
                >
                  Bio
                </label>
                <div className="mt-2">
                  <textarea
                    className={`block w-full rounded-md  py-1.5 text-[#FF9677]  ${
                      errors.bio ? "border-red-500 border-2" : ""
                    }`}
                    rows={3}
                    {...register("bio", {
                      required: "User bio is required",
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
            <h2 className="text-2xl font-semibold leading-7 text-[#FF9677]">
              Personal Information
            </h2>

            <div className="sm:col-span-4 mt-10">
              <label
                htmlFor="email"
                className="block text-l font-medium leading-6 text-[#FF9677]"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  className={`block w-full rounded-md border-0 py-1.5 text-[#FF9677]  sm:text-2xl sm:leading-6  ${
                    errors.email ? "border-red-500 border-2" : ""
                  }`}
                  type="email"
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
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="password"
                  className="block text-l font-medium leading-6 text-[#FF9677]"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    className={`block w-full rounded-md border-0 py-1.5 text-[#FF9677]  sm:text-2xl  sm:leading-6  ${
                      errors.password ? "border-red-500 border-2" : ""
                    }`}
                    {...register("password", {
                      required: "User password is required",
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

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-[#FF9677] px-3 py-2 text-2xl font-semibold text-[#41436A] shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-20"
          >
            Create your User!
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
