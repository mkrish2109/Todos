import React from "react";
import style from "../style/layout/navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={style.navContainer}>
      <div className={style.logo}>
   
        <h1 className="text-[#964734] font-bold	text-4xl">TODOS</h1>
      </div>
      <ul className={style.listMenu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin/deshbord">Deshbord</Link>
        </li>
        <li>
          <Link to="/admin/todos">Todos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
