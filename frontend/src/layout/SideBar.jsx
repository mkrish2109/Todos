import React from "react";
import { LuLayoutDashboard, LuList, LuUser2 } from "react-icons/lu";
import { Link } from "react-router-dom";

function SideBar() {
  const links = [
    {
      name: "Profile",
      link: "/admin/profile",
      icon: <LuUser2 />,
    },
    {
      name: "Deshbord",
      link: "/admin/deshbord",
      icon: <LuLayoutDashboard />,
    },

    {
      name: "Todos",
      icon: <LuList />,
      link: "/admin/todos",
    },
  ];
  return (
    <div>
      <ul className="bg-[#6e6e6e] h-full flex flex-col gap-4  mr-5 px-4 pt-3 border-r-[2px] border-[#5f5f5f] ">
        {links.map((value, index) => {
          return (
            <Link
              key={index}
              to={value.link}
              className="flex gap-2 items-center cursor-pointer hover:underline hover:text-[#bcfd4c] active:text-[#bcfd4c] focus:ring-violet-300">
              {value.icon}
              {value.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
