import { Button, Datepicker, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { HiPencil } from "react-icons/hi";
import Select from "../comman/Select";
import FlowSelect from "../comman/FlowSelect";
import { updateTask } from "../../services/apiService";
import { updateTaskInState } from "../../helper/taskHelper";

function UpdateForm({ task, toggleModal, tasks, setTasks }) {
  const [formData, setFormData] = useState({
    task: task.task || "",
    dueDate: task.dueDate || "",
    priority: task.priority || "a",
    isCompleted: task.isCompleted || false,
  });

  function handleChange(e) {
    if (e instanceof Date) {
      setFormData({ ...formData, dueDate: e });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const updatedTask = await updateTask({ ...formData, _id: task._id });
    updateTaskInState(updatedTask.data, tasks, setTasks);
    toggleModal();
  }

  return (
   
    <form className="flex flex-col gap-4 p-2 bg-[#3f3f3f] " onSubmit={handleSubmit}>
      <TextInput
        className="[&>div>input]:rounded-md "
        type="text"
        sizing="md"
        icon={HiPencil}
        placeholder="Task"
        value={formData.task}
        name="task"
        onChange={handleChange}

      />
      <Datepicker
        value={new Date(formData.date)}
        name="dueDate"
        onChange={handleChange}
      />
      <FlowSelect
        selected={formData.priority}
        name="priority"
        onChange={handleChange}
      />
      <Button pill className="bg-[#BCFD4C] text-black enabled:hover:bg-[#9aec0c]"  type="submit">
        Submit
      </Button>
    </form>
 
  );
}

export default UpdateForm;
