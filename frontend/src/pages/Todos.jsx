import React, { useEffect, useState } from "react";
import AddTask from "../components/todos/AddTask";
import TodoList from "../components/todos/TodoList";
import { getAllTasks } from "../services/apiService";

function Todos() {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    getAllTasks().then((data) => {
      console.log(data);
      setTasks(data.data);
    });
  }, []);
  return (
    <div className="flex flex-col gap-10 p-5  h-[calc(100vh-90 px-90px)]">
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default Todos;
