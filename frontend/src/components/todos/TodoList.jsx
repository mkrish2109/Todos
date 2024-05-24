import React from "react";
import TodoListItem from "../todos/TodoListItem";

function TodoList({ tasks, setTasks }) {
  if (!tasks) return null;
  return (
    <ul>
      {tasks.map((task, i) => {
        return (
          <TodoListItem key={i} task={task} tasks={tasks} setTasks={setTasks} />
        );
      })}
    </ul>
  );
}

export default TodoList;
