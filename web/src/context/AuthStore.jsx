import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../services/users/users";

const restoreFronLocalStorage = () => {
  const user = localStorage.getItem("current-user");
  if (user) {
    return JSON.parse(user);
  } else {
    return;
  }
};

const AuthContext = createContext();

function AuthStore({ children }) {
  const [user, setUser] = useState(restoreFronLocalStorage());
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      if (user) {
        const profile = await userService.get("me");
        handleUserChange({ ...profile, token: user.token });
      }
    }
    fetchUser();
  }, []);

  const handleUserChange = (user) => {
    if (!user) {
      localStorage.removeItem("current-user");
      localStorage.removeItem("user-access-token");
    } else {
      localStorage.setItem("user-access-token", user.token);
      localStorage.setItem("current-user", JSON.stringify(user));
    }
    setUser(user);
  };

  const handleUserEdit = (user) => {
    setUser(user);
  };

  const logout = () => {
    handleUserChange();
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        onUserChange: handleUserChange,
        onUserEdit: handleUserEdit,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthStore as default, AuthContext };
