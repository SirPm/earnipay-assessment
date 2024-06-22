import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export const AuthRedirect = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Navigate to="/login" replace />;
};
