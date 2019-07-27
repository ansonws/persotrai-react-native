import { BASE_URL } from "../config";

const Trainer = {
  index() {
    return fetch(`${BASE_URL}/trainers`, {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json());
  },
  create() {
    return fetch(`${BASE_URL}/trainers`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json());
  },
  show(id) {
    return fetch(`${BASE_URL}/trainers/${id}/trainer_dashboard`, {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json());
  },
  edit(id) {
    return fetch(`${BASE_URL}/trainers${id}`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json());
  },
  delete(id) {
    return fetch(`${BASE_URL}/trainers${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json());
  },
}

export default Trainer;
