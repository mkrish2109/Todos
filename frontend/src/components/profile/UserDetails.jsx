import React from "react";
import { useAuth } from "../../provider/AuthProvider";

function UserDetails() {
  const { user } = useAuth();
  return <></>;
}

export default UserDetails;
