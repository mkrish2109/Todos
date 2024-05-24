import { fetchHelper } from "../helper/fetchHelper";

const BASE_URL = "http://localhost:5000";

export function getAllTasks() {
  return fetchHelper(`${BASE_URL}/tasks`);
}

export function addTask(data) {
  return fetchHelper(`${BASE_URL}/tasks`, "POST", data);
}

export function deleteTask(id) {
  return fetchHelper(`${BASE_URL}/tasks/${id}`, "DELETE");
}

export function updateTask(data) {
  return fetchHelper(`${BASE_URL}/tasks/${data._id}`, "PATCH", data);
}
