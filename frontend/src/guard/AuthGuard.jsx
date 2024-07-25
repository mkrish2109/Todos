import React from "react";
import { useAuth } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

function AuthGuard({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate tok="/login" replace />;
  }

  return <div>{children}</div>;
}

export default AuthGuard;
