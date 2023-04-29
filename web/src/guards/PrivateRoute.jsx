import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthStore";

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  return (
    <div>{!user ? <Navigate to="/login" replace={true} /> : children}</div>
  );
}

export default PrivateRoute;
