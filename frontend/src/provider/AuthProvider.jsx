import React, { createContext, useContext, useState } from "react";
import { loginUser, logoutUser, registerUser } from "../services/apiService";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { isExpired, decodeToken } from "react-jwt";
import "react-toastify/dist/ReactToastify.css";

const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}

function AuthProvider({ children }) {
  let initialUser = localStorage.getItem("token");
  const isMyTokenExpired = isExpired(initialUser || "");

  if (initialUser && !isMyTokenExpired) {
    initialUser = decodeToken(initialUser || "");
  } else {
    initialUser = null;
    localStorage.removeItem("token");
  }

  const [user, setUser] = useState(initialUser);

  const navigate = useNavigate();

  async function login(data) {
    const result = await loginUser(data);
    if (result.success) {
      localStorage.setItem("token", result.token);
      const user = decodeToken(result.token);
      setUser(user);
      navigate("/admin/todos");
    } else {
      localStorage.removeItem("token");
      toast(result.msg);
    }
  }

  async function register(data) {
    const result = await registerUser(data);
    if (result.success) {
      localStorage.setItem("token", result.token);
      const user = decodeToken(result.token);
      setUser(user);
      navigate("/admin/todos");
    } else {
      localStorage.removeItem("token");
      toast(result.msg);
    }
  }

  async function logout() {
    const result = await logoutUser();
    if (result.success) {
      localStorage.removeItem("token");
      setUser(null);
      navigate("/");
    } else {
      toast(result.msg);
    }
  }

  async function removeUser() {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/login");
  }

  // const notify = () => toast("Wow so easy!");

  return (
    <authContext.Provider value={{ user, login, register, logout, removeUser }}>
      {children}
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer
        toastStyle={{ backgroundColor: "black", color: "white" }}
      />
    </authContext.Provider>
  );
}

export default AuthProvider;
