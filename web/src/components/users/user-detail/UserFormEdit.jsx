import { useForm } from "react-hook-form";
import userService from "../../../services/users/users";
import "./UserDetail.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthStore";

function UserFormEdit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const { user, onUserEdit } = useContext(AuthContext);
  const navigate = useNavigate();

  const onChangeProfile = async (data) => {
    try {
      const formData = new FormData();
      formData.append("file", data.file[0]);
      formData.append("username", data.username);
      formData.append("bio", data.bio);
      formData.append("password", data.password);
      formData.append("email", data.email);
      //TODO eliminar elementos extra del objeto que devuelve formData

      const newUser = await userService.edit(user.id, formData);
      onUserEdit(newUser);
      navigate("/users/me");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onChangeProfile)}>
        <div className="card mt-10">
          <div className="card-container flex flex-col justify-center items-center">
            <div className="space-y-12 grid gap-5 justify-items-center p-20 ">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="sm:col-span-full">
                  <div className="flex items-center">
                    <img
                      className="logo max-w-[150px] min-h-[150px]"
                      src={user.profilePic}
                      alt="user"
                    />

                    <input
                      id="file"
                      type="file"
                      accept="image/"
                      {...register("file")}
                      className="ms-3 rounded-full border "
                    />
                    {errors.profilePic && (
                      <div className="text-red-500 text-lg">
                        {errors.profilePic?.message}
                      </div>
                    )}
                  </div>

                  <div className="relative z-0 w-full mb-6 group mt-4">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="block py-2.5 px-0 w-full text-xl text-gray-300  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                      placeholder=" "
                      {...register("username", {
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
                    type="email"
                    name="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-xl text-gray-300  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                    placeholder=" "
                    {...register("email", {
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

                <div className="">
                  <div className="">
                    <div className="">
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="block py-2.5 px-0 w-full text-xl text-gray-300  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                          placeholder=" "
                          {...register("password", {
                            minLength: {
                              value: 8,
                              message:
                                "User password needs at least 8 characters",
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-x-6">
                  <button className="rounded-md bg-[#FF9677] px-3 py-2 text-2xl font-semibold text-[#41436A] shadow-sm hover:bg-[#974063] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#974063] mt-5">
                    <NavLink to={"/users/me"}>Cancel</NavLink>
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-[#FF9677] px-3 py-2 text-2xl font-semibold text-[#41436A] shadow-sm hover:bg-[#974063] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#974063] mt-5"
                  >
                    Change!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default UserFormEdit;
