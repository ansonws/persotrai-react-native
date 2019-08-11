import { BASE_URL } from "../config";

const User = {
  index() {
    return fetch(`${BASE_URL}/users`, {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json())
    .catch(err => console.log(err));
  },
  create() {
    return fetch(`${BASE_URL}/users`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json())
    .catch(err => console.log(err));
  },
  show(id) {
    return fetch(`${BASE_URL}/users/${id}/dashboard`, {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json())
    .catch(err => console.log(err));
  },
  edit(id) {
    return fetch(`${BASE_URL}/users${id}`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json())
    .catch(err => console.log(err));
  },
  delete(id) {
    return fetch(`${BASE_URL}/users${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json())
    .catch(err => console.log(err));
  },
}

export default User;
