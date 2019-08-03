import { BASE_URL } from "../config";

const User = {
  index() {
    return fetch(`${BASE_URL}/users`, {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json());
  },
  create() {
    return fetch(`${BASE_URL}/users`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json());
  },
  show(id) {
    return fetch(`${BASE_URL}/users/${id}/dashboard`, {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json());
  },
  edit(id) {
    return fetch(`${BASE_URL}/users${id}`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json());
  },
  delete(id) {
    return fetch(`${BASE_URL}/users${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json());
  },
}

export default User;
