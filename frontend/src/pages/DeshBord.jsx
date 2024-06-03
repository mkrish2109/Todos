import React, { useEffect, useState } from "react";
import { getDashBordTask } from "../services/apiService";

function DeshBord() {
  const [stats, setStats] = useState();
  useEffect(() => {
    getDashBordTask().then((data) => {
      setStats(data.data);
      console.log("stats", stats);
    });
  }, []);

  if (!stats) {
    return null;
  }

  return (
    <div className="p-8">
      <h2 className="font-bold text-xl pb-5">Dashbord</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className=" bg-red-500 p-4 rounded-md">
          <p>Pending Task</p>
          <p className="text-xl p-1">{stats.penddingTask}</p>
        </div>
        <div className=" bg-green-500 p-4 rounded-md">
          <p>Complete Task</p>
          <p className="text-xl p-1">{stats.isCompleted}</p>
        </div>
        <div className=" bg-blue-500 p-4 rounded-md">
          <p>Total Task</p>
          <p className="text-xl p-1">{stats.totalTask}</p>
        </div>
      </div>
    </div>
  );
}

export default DeshBord;
