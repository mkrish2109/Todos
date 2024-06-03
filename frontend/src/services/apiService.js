import { fetchHelper } from "../helper/fetchHelper";

const BASE_URL = "http://localhost:5000";

export function getAllTasks() {
  return fetchHelper(`${BASE_URL}/tasks`, true);
}

export function addTask(data) {
  return fetchHelper(`${BASE_URL}/tasks`, true, "POST", data);
}

export function deleteTask(id) {
  return fetchHelper(`${BASE_URL}/tasks/${id}`, true, "DELETE");
}

export function updateTask(data) {
  return fetchHelper(`${BASE_URL}/tasks/${data._id}`, true, "PATCH", data);
}
// End Task

// user Auth

export function registerUser(data) {
  return fetchHelper(`${BASE_URL}/auth/register`, false, "POST", data);
}

export function loginUser(data) {
  return fetchHelper(`${BASE_URL}/auth/login`, false, "POST", data);
}

export function logoutUser(data) {
  return fetchHelper(`${BASE_URL}/auth/logout`, true);
}

//End Auth

//deshBord
export function getDashBordTask() {
  return fetchHelper(`${BASE_URL}/dashbord/stats`, true);
}

//end

// User

export function updateUser(id, body) {
  return fetchHelper(`${BASE_URL}/users/${id}`, true, "PATCH", body);
}

// End User
