import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const PublicRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  // If token exists, redirect to admin dashboard
  if (token) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default PublicRoute;
