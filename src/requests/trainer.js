import { BASE_URL } from "../../config";

const Trainer = {
  index() {
    return fetch(`${BASE_URL}/trainers`, {
      credentials: "include",
      headers: { 
        Accept: 'application/json',
        "Content-Type": "application/json" 
      },
    }).then(res => res.json())
    .catch(err => {
      console.log(err);
      return [];
    });
  },
  create() {
    return fetch(`${BASE_URL}/trainers`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json())
    .catch(err => console.log(err));
  },
  show(id) {
    return fetch(`${BASE_URL}/trainers/${id}/trainer_dashboard`, {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json())
    .catch(err => console.log(err));
  },
  edit(id) {
    return fetch(`${BASE_URL}/trainers${id}`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json())
    .catch(err => console.log(err));
  },
  delete(id) {
    return fetch(`${BASE_URL}/trainers${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json())
    .catch(err => console.log(err));
  },
}

export default Trainer;
