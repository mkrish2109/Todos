import { Button, Datepicker, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { HiPencil, HiPlus } from "react-icons/hi";
import { addTaskToState } from "../../helper/taskHelper";
import { addTask } from "../../services/apiService";
import style from "../../style/todos/addTask.module.css";
import FlowSelect from "../comman/FlowSelect";

function AddTask({ tasks, setTasks }) {
  const [newTodos, setNewTodos] = useState({
    task: "",
    dueDate: new Date(),
    priority: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await addTask({
      task: newTodos.task,
      dueDate: new Date(newTodos.dueDate),
      priority: newTodos.priority,
    });

    addTaskToState(result.data, tasks, setTasks);

    setTimeout(() => {
      if (result.success === true) {
        alert("Added successfully!");
      }
    }, 100);
  }
  function handleChange(e) {
    if (e instanceof Date) {
      setNewTodos({ ...newTodos, dueDate: e });
    } else {
      setNewTodos({ ...newTodos, [e.target.name]: e.target.value });
    }
  }
  return (
    <form onSubmit={handleSubmit} className={style.addTaskContainer}>
      <h2>Add Task</h2>
      <TextInput
        onChange={handleChange}
        name="task"
        className="[&>div>input]:rounded-md grow-[1]"
        type="text"
        sizing="md"
        icon={HiPencil}
        placeholder="Task"
      />
      <Datepicker
        onSelectedDateChanged={handleChange}
        className="[&>div]cursor-pointer"
      />
      <FlowSelect onChange={handleChange} />
      <Button
        className="bg-[#BCFD4C] text-black enabled:hover:bg-[#9aec0c]"
        type="submit">
        <HiPlus className="h-5 w-5 mr-2" />
        Add Task
      </Button>
    </form>
  );
}

export default AddTask;
