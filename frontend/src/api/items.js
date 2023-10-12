import axios from "axios";

export function createItem(data) {
  return axios.post(`${import.meta.env.VITE_BASE_URL}/items/`, data);
}
export function getOneItem(id) {
  return axios.get(`${import.meta.env.VITE_BASE_URL}/items/${id}`);
}
export function updateItem(id, data) {
  return axios.put(`${import.meta.env.VITE_BASE_URL}/items/${id}`, data);
}
export function deleteItem(id) {
  return axios.delete(`${import.meta.env.VITE_BASE_URL}/items/${id}`);
}
export function moveItem(id, data) {
  return axios.put(`${import.meta.env.VITE_BASE_URL}/items/move/${id}`, data);
}
