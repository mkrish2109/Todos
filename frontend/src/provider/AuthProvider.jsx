import React, { createContext, useContext, useState } from "react";
import { loginUser, logoutUser, registerUser } from "../services/apiService";
import { useNavigate } from "react-router-dom";

const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}

function AuthProvider({ children }) {
  let initialUser = JSON.parse(localStorage.getItem("user"));
  initialUser = initialUser && initialUser.data;

  const [user, setUser] = useState(initialUser);

  const navigate = useNavigate();

  async function login(data) {
    const result = await loginUser(data);
    localStorage.setItem("user", JSON.stringify(result));
    setUser(result.data);
    navigate("/admin/todos");
  }

  async function register(data) {
    const result = await registerUser(data);
    localStorage.setItem("user", JSON.stringify(result));
    setUser(result.data);
    navigate("/admin/todos");
  }

  async function logout() {
    const result = await logoutUser();
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  }

  return (
    <authContext.Provider value={{ user, login, register, logout }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
