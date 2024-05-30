import React from "react";
import style from "../style/layout/navbar.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { Button } from "flowbite-react";

function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className={style.navContainer}>
      <div className={style.logo}>
        <h1 className="text-[#BCFD4C] font-bold	text-4xl">TODOS</h1>
      </div>
      <ul className={style.listMenu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/admin/deshbord">Deshbord</Link>
            </li>
            <li>
              <Link to="/admin/todos">Todos</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login/Register</Link>
          </li>
        )}
        {user && (
          <li>
            <Button
              className=" bg-red-600 enabled:hover:bg-red-700"
              onClick={logout}>
              Logout
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
