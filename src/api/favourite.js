import { BASE_URL } from "../config";

const Favourite = {
  create(trainer_id) {
    return fetch(`${BASE_URL}/trainers/${trainer_id}/favourites`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json());
  },
  delete(trainer_id, favourite_id) {
    return fetch(`${BASE_URL}/trainers/${trainer_id}/favourites/${favourite_id}`, {
      method: "DELETE",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json());
  },
}

export default Favourite;
