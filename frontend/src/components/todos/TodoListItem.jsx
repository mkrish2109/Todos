import React, { useState } from "react";
import style from "../../style/todos/todoList.module.css";
import Select from "../comman/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircle, faEdit } from "@fortawesome/free-regular-svg-icons";
import FlowModel from "../comman/FlowModel";
import UpdateForm from "./UpdateForm";
import FlowSelect from "../comman/FlowSelect";
import { deleteTask, updateTask } from "../../services/apiService";
import {
  removeTaskFromState,
  updateTaskInState,
} from "../../helper/taskHelper";

function TodoListItem({ task, tasks, setTasks }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function handleDelete() {
    deleteTask(task._id);
    removeTaskFromState(task._id, tasks, setTasks);
  }

  function handleEdit() {
    toggleModal();
  }
  async function handleCheckChange(e) {
    const updatedTask = await updateTask({
      ...task,
      isCompleted: e.target.checked,
    });
    updateTaskInState(updatedTask.data, tasks, setTasks);
  }

  return (
    <>
      <div className={style.todoItemContainer}>
        <div className="flex items-center justify-center gap-3">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={task.isCompleted}
            className={style.chekbox}
            onChange={handleCheckChange}
          />
          <p>{task.task}</p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <p>{task.dueDate}</p>
          <FlowSelect selected={task.priority} />
          <button
            className={`${style.icon} ${style.update}`}
            onClick={handleEdit}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            className={`${style.icon} ${style.delete}`}
            onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      {isOpen && (
        <FlowModel
          title="Update Task"
          isOpen={isOpen}
          toggleModal={toggleModal}
          body={
            <UpdateForm
              task={task}
              tasks={tasks}
              setTasks={setTasks}
              toggleModal={toggleModal}
            />
          }
        />
      )}
    </>
  );
}

export default TodoListItem;
