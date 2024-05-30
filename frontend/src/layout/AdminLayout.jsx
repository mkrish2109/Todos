import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function AdminLayout() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-[200px_1fr]">
          <SideBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
