export function addTaskToState(newTask, tasks, setTasks) {
  setTasks([...tasks, newTask]);
}

export function updateTaskInState(newTask, tasks, setTasks) {
  const newTasks = tasks.map((task) => {
    if (task._id === newTask._id) {
      return { ...task, ...newTask };
    }
    return task;
  });

  setTasks(newTasks);
}

export function removeTaskFromState(id, tasks, setTasks) {
  const newTasks = tasks.filter((task) => {
    if (task._id === id) {
      return false;
    }
    return true;
  });

  setTasks(newTasks);
}
