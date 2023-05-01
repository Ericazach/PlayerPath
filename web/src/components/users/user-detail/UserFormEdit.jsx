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
                  <label
                    htmlFor="username"
                    className="block text-start text-2xl mt-5 font-medium leading-6 text-[#FF9677]"
                  >
                    Username
                  </label>
                  <div className="mt-3">
                    <div className=" rounded-md shadow-sm ring-1 ring-inset">
                      <input
                        className={`block w-full rounded-md py-1.5  text-[#FF9677] sm:text-2xl sm:leading-6  ${
                          errors.username ? "border-red-500 border-2" : ""
                        }`}
                        type="text"
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
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-full ">
                  <label
                    htmlFor="email"
                    className="block mt-5 text-start text-2xl font-medium leading-6 text-[#FF9677]"
                  >
                    Email address
                  </label>
                  <div className="mt-3">
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

                <div className="mt-1 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-full">
                    <label
                      htmlFor="password"
                      className="block mt-5 text-start text-2xl font-medium leading-6 text-[#FF9677]"
                    >
                      Password
                    </label>
                    <div className="mt-3">
                      <input
                        type="password"
                        className={`block w-full rounded-md border-0 py-1.5 text-[#FF9677]  sm:text-2xl  sm:leading-6  ${
                          errors.password ? "border-red-500 border-2" : ""
                        }`}
                        {...register("password", {
                          required: "User password is required",
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
                      <div className="col-span-full">
                        <label
                          htmlFor="bio"
                          className="block text-start mt-5 text-2xl font-medium leading-6 text-[#FF9677]"
                        >
                          Bio
                        </label>
                        <div className="mt-3">
                          <textarea
                            className={`block w-full rounded-md text-lg py-1.5 text-[#FF9677]  ${
                              errors.bio ? "border-red-500 border-2" : ""
                            }`}
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
