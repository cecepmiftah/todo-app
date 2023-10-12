import axios from "axios";

export function getTodos() {
  return axios.get(`${import.meta.env.VITE_BASE_URL}/todos`);
}
export function getOneTodo(id) {
  return axios.get(`${import.meta.env.VITE_BASE_URL}/todos/${id}`);
}
export function createTodo(data) {
  return axios.post(`${import.meta.env.VITE_BASE_URL}/todos`, data);
}
export function updateTodo(id, data) {
  return axios.put(`${import.meta.env.VITE_BASE_URL}/todos/${id}`, data);
}
export function deleteTodo(id) {
  return axios.delete(`${import.meta.env.VITE_BASE_URL}/todos/${id}`);
}
