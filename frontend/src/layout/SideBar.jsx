import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  const links = [
    {
      name: "Deshbord",
      link: "admin/dashbord",
    },
    {
      name: "Profile",
      link: "admin/dashbord",
    },
    {
      name: "Todos",
      link: "admin/todos",
    },
  ];
  return (
    <div>
      <ul className="bg-[#6E6E6E] h-full flex flex-col gap-4">
        {links.map((value) => {
          return (
            <Link to={value.link}>
              <li className="px-8 py-2">{value.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
